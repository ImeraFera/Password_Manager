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


        <>
            <Grid2
                container
            >
                <Grid2
                    size={12}
                >
                    <Navbar></Navbar>
                </Grid2>
            </Grid2>

            <Grid2 container p={1} spacing={2} className='content-container'
                height='67vh'
            >

                <Grid2
                    mt={2}
                    size={12}
                    display={'flex'}
                    flex={1}
                    flexDirection={'column'}
                    p={2}
                    justifyContent={'space-between'}
                    borderRadius={'0.5em'}
                    sx={{
                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )'

                    }}
                >
                    <Box
                        display={'flex'}
                    >
                        <Box
                            display={'flex'}
                            width={'100%'}
                        >
                            <TextField
                                variant='outlined'
                                size='small'
                                fullWidth
                                value={password}
                            />
                        </Box>
                        <Box
                            display={'flex'}
                            ml={2}
                        >

                            <Button variant='contained' color='secondary' onClick={copyToClipboard}>

                                Copy
                            </Button>
                        </Box>

                    </Box>
                    <Box
                        display={'flex'}

                    >
                        <Box
                            width={'100%'}
                        >
                            <Slider
                                color='secondary'
                                value={passwordLength}
                                min={4}
                                max={50}
                                onChange={handleSliderChange}
                                aria-label="Password Length"
                                valueLabelDisplay="auto"
                            />

                        </Box>
                        <Box
                            width={'5em'}
                            ml={2}
                        >
                            <TextField
                                type="number"
                                size="small"
                                value={passwordLength}
                                onChange={handleTextFieldChange}
                            />
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        width={'100%'}
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

                    <Box
                        display={'flex'}
                    >
                        <Box
                            justifyContent={'space-evenly'}
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

                    <Box
                        width={'100%'}
                        display={'flex'}
                    >
                        <Button
                            variant='contained'
                            size='large'
                            color='secondary'
                            fullWidth
                        >
                            Generate Password
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>
        </>

    );
}

export default PasswordGenerator;
