import { Box, Button, Checkbox, FormControlLabel, Grid2, IconButton, Slider, TextField, LinearProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import calculatePasswordStrength from '../utils/calculatePasswordStrength';
import generatePassword from '../utils/generatePassword';
import { copyToClipboard, readFromClipboard } from '../utils/clipboard';
function PasswordGenerator() {

    const [passwordLength, setPasswordLength] = useState(8);
    const [password, setPassword] = useState('');

    const [passwordStrength, setPasswordStrength] = useState(calculatePasswordStrength(8));
    const [checkedChars, setCheckedChars] = useState({
        uppercase: true,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const handleCheckboxChange = (e) => {

        setCheckedChars((prevVals) => {
            return {
                ...prevVals,
                [e.target.name]: e.target.checked,
            }
        })
    }

    const handleGeneratePasswordClick = () => {

        const vals = {
            passwordLength,
            checkedChars,
        }

        const password = generatePassword(vals);
        setPassword(password);
    }

    const handleSliderChange = (event, newValue) => {
        setPasswordLength(newValue);
        setPasswordStrength(calculatePasswordStrength(newValue));
    };

    const handleTextFieldChange = (event) => {
        const value = event.target.value === '' ? 0 : Number(event.target.value);
        setPasswordLength(value);
        setPasswordStrength(calculatePasswordStrength(value));
    };

    return (
        <Grid2
            container
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Grid2 size={12}>
                <Box className='content-container' flexDirection={'column'}>
                    <Navbar />

                    <Box className='password-generator-content'>
                        <Grid2
                            container
                            width={'100%'}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                        >
                            <Grid2
                                size={12}
                                display={'flex'}
                            >
                                <Box
                                    display={'flex'}
                                    justifyContent={'center'}
                                    width={'100%'}
                                >
                                    <Typography
                                        variant='h5'
                                    >
                                        Password Generator
                                    </Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={12} display={'flex'}>
                                <Box
                                    mt={2}
                                    display={'flex'}
                                    bgcolor={'#313131'}
                                    p={2}
                                    width={'100%'}
                                >
                                    <Box width={'100%'}>
                                        <TextField
                                            variant='outlined'
                                            size='small'
                                            fullWidth
                                            value={password}
                                        />
                                    </Box>

                                    <Box display={'flex'} ml={1}>
                                        <Button variant='contained'
                                            onClick={(e) => copyToClipboard(password)}
                                            color='secondary'>
                                            Copy
                                        </Button>

                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={12} display={'flex'}>
                                <Box
                                    display={'flex'}
                                    bgcolor={'#313131'}
                                    p={2}
                                    width={'100%'}
                                >
                                    <Box display={'flex'} width={'100%'} alignItems={'center'}>
                                        <Slider
                                            color='secondary'
                                            value={passwordLength} // Controlled değer
                                            min={4}
                                            max={50}
                                            onChange={handleSliderChange}  // Slider değişikliği
                                            aria-label="Password Length"
                                            valueLabelDisplay="auto"
                                        />
                                        <Box ml={2} width={'6em'}>
                                            <TextField
                                                type="number"
                                                size="small"
                                                value={passwordLength} // Controlled değer
                                                onChange={handleTextFieldChange}  // TextField değişikliği
                                                inputProps={{ min: 4, max: 50 }}  // Minimum ve maksimum sınır
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={12} display={'flex'}>
                                <Box
                                    display={'flex'}
                                    bgcolor={'#313131'}
                                    p={2}
                                    width={'100%'}
                                    alignItems={'center'}
                                >
                                    <Box
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        display={'flex'}
                                        flexWrap={'wrap'}
                                        width={'100%'}
                                    >
                                        <FormControlLabel control={<Checkbox
                                            onChange={handleCheckboxChange}
                                            checked={checkedChars.uppercase}
                                            size='large'
                                            name='uppercase'
                                        />} label="ABC" />
                                        <FormControlLabel control={<Checkbox
                                            onChange={handleCheckboxChange}
                                            checked={checkedChars.lowercase}
                                            size='large'
                                            name='lowercase'
                                        />} label="abc" />
                                        <FormControlLabel control={<Checkbox
                                            size='large'
                                            name='numbers'
                                            onChange={handleCheckboxChange}
                                            checked={checkedChars.numbers}
                                        />} label="123" />
                                        <FormControlLabel control={<Checkbox
                                            size='large'
                                            name='symbols'
                                            onChange={handleCheckboxChange}
                                            checked={checkedChars.symbols}
                                        />} label="#$&" />
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={12} display={'flex'}>
                                <Box
                                    display={'flex'}
                                    bgcolor={'#313131'}
                                    p={2}
                                    width={'100%'}
                                    alignItems={'center'}
                                >
                                    <Box width={'100%'}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={(passwordStrength / 5) * 100}
                                            sx={{
                                                backgroundColor: '#ff4d4d',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: passwordStrength === 5 ? '#00e676' : passwordStrength >= 4 ? '#76ff03' : passwordStrength >= 3 ? '#ffeb3b' : '#ff9800',
                                                },
                                            }}
                                        />
                                        <Box mt={1} textAlign="center">
                                            {passwordStrength === 1 && "Çok Güçsüz"}
                                            {passwordStrength === 2 && "Güçsüz"}
                                            {passwordStrength === 3 && "Orta"}
                                            {passwordStrength === 4 && "Güçlü"}
                                            {passwordStrength === 5 && "Çok Güçlü"}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={12} display={'flex'}>
                                <Box
                                    display={'flex'}
                                    bgcolor={'#313131'}
                                    p={2}
                                    width={'100%'}
                                    justifyContent={'center'}
                                    flexDirection={'column'}
                                >
                                    <Button
                                        variant='contained'
                                        size='large'
                                        color='secondary'
                                        fullWidth
                                        onClick={handleGeneratePasswordClick}
                                    >
                                        Generate Password
                                    </Button>
                                </Box>
                            </Grid2>

                        </Grid2>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default PasswordGenerator;
