import { Box, Button, Checkbox, FormControlLabel, Grid2, Tab, Tabs, TextField, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

function Starting() {
    const navigation = useNavigate();

    const [value, setValue] = useState('0');
    const [checked, setChecked] = useState(false);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCheckbox = () => {
        setChecked(!checked);
    }

    const loginFormik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log('Login Values:', values);
        },
    });

    const registerFormik = useFormik({

        initialValues: {
            email: '',
            password: '',
            username: '',
        },
        onSubmit: (values) => {
            console.log(values)
            setValue('0')
        },
    });

    return (
        <Grid2
            container
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Grid2 size={12}
            >
                <Box className='content-container' flexDirection={'column'}>
                    <TabContext value={value}>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            p={2}
                        >
                            <Tabs value={value} onChange={handleChange}
                            >
                                <Tab value="0"
                                    label="Login" />
                                <Tab value="1"
                                    label="Register" />
                            </Tabs>
                        </Box>

                        {value === '0' && (
                            <Box
                                display={'flex'}
                                className='content'
                                flexDirection={'column'}
                                p={2}
                                alignItems={'center'}
                            >
                                <Box
                                    display={'flex'}
                                    justifyContent={'center'}
                                >
                                    <Typography
                                        variant='h5'
                                    >
                                        Login
                                    </Typography>
                                </Box>
                                <form onSubmit={loginFormik.handleSubmit}>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'center'}
                                        flexDirection={'column'}
                                    >

                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            margin='normal'
                                            label='Email'
                                            type='email'
                                        >

                                        </TextField>

                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            margin='normal'
                                            label='Password'
                                            type='password'
                                        >
                                        </TextField>

                                        <FormControlLabel control={<Checkbox color='secondary' onClick={handleCheckbox} checked={checked} />} label="Remember me" />

                                        <Box
                                            mt={2}
                                        >
                                            <Button
                                                variant='contained'
                                                color='secondary'
                                                fullWidth
                                                size='large'
                                                type='submit'
                                            >
                                                Login
                                            </Button>
                                        </Box>

                                    </Box>

                                </form>

                            </Box>

                        )}

                        {value === '1' && (
                            <Box
                                display={'flex'}
                                className='content'
                                flexDirection={'column'}
                                p={2}
                                alignItems={'center'}
                            >
                                <Box
                                    display={'flex'}
                                    justifyContent={'center'}
                                >
                                    <Typography
                                        variant='h5'
                                    >
                                        Register
                                    </Typography>
                                </Box>
                                <form onSubmit={registerFormik.handleSubmit}>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'center'}
                                        flexDirection={'column'}

                                    >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            margin='normal'
                                            label='Email'
                                            type='email'

                                        >

                                        </TextField>

                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            margin='normal'
                                            label='Username'

                                        >

                                        </TextField>

                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            margin='normal'
                                            label='Password'
                                            type='password'

                                        >

                                        </TextField>

                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            margin='normal'
                                            label='Confirm Password'
                                            type='password'


                                        >

                                        </TextField>

                                        <Box
                                            mt={2}
                                        >
                                            <Button
                                                variant='contained'
                                                color='secondary'
                                                fullWidth
                                                size='large'
                                                type='submit'
                                            >
                                                Register
                                            </Button>
                                        </Box>

                                    </Box>

                                </form>

                            </Box>

                        )}


                    </TabContext>
                </Box >
            </Grid2 >
        </Grid2 >
    );
}

export default Starting;
