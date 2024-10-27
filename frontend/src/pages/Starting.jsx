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
            navigation('/home');
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


        <>
            <Grid2
                container
            >
                <Grid2
                    size={12}
                    p={2}
                >

                    <Box display={'flex'} justifyContent={'center'}>
                        <Tabs value={value} onChange={handleChange}                    >
                            <Tab
                                label='Login'
                                value={'0'}
                            >
                            </Tab>
                            <Tab
                                label='Register'
                                value={'1'}
                            >
                            </Tab>
                        </Tabs>
                    </Box>
                </Grid2>
            </Grid2>

            <Grid2
                container
                className='content-container'
                spacing={0}
            >
                <Grid2
                    size={12}
                    flexDirection={'column'}
                    display={'flex'}
                    p={2}
                    height={'68vh'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {(value === '0' && (
                        <Box
                            width={'100%'}
                        >
                            <Typography
                                variant='h4'
                                textAlign={'center'}
                            >
                                Login
                            </Typography>

                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'column'}
                            >
                                <Box
                                    width={{
                                        md: '50%',
                                        sm: '100%',
                                        xs: '100%',
                                    }}
                                >
                                    <TextField
                                        variant='outlined'
                                        label='Email'
                                        type='email'
                                        name='email'
                                        margin='normal'
                                        fullWidth

                                    >

                                    </TextField>

                                    <TextField
                                        variant='outlined'
                                        label='Password'
                                        type='password'
                                        name='password'
                                        margin='normal'
                                        fullWidth
                                    >
                                    </TextField>

                                    <FormControlLabel control={<Checkbox onChange={handleCheckbox} checked={checked} />} label="Remember me" />

                                    <Button
                                        variant='contained'
                                        type='submit'
                                        color='secondary'
                                        fullWidth
                                        onClick={loginFormik.handleSubmit}
                                    >
                                        Login
                                    </Button>
                                </Box>

                            </Box>
                        </Box>

                    ))}

                    {(value === '1' && (
                        <Box
                            width={'100%'}
                        >
                            <Typography
                                variant='h4'
                                textAlign={'center'}
                            >
                                Register
                            </Typography>

                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'column'}
                            >
                                <Box
                                    width={{
                                        md: '50%',
                                        sm: '100%',
                                        xs: '100%',
                                    }}
                                >
                                    <TextField
                                        variant='outlined'
                                        label='Username'
                                        type='text'
                                        name='username'
                                        margin='normal'
                                        fullWidth

                                    >

                                    </TextField>
                                    <TextField
                                        variant='outlined'
                                        label='Email'
                                        type='email'
                                        name='email'
                                        margin='normal'
                                        fullWidth

                                    >

                                    </TextField>
                                    <TextField
                                        variant='outlined'
                                        label='Password'
                                        type='password'
                                        name='password'
                                        margin='normal'
                                        fullWidth

                                    >

                                    </TextField>
                                    <TextField
                                        variant='outlined'
                                        label='Confirm Password'
                                        type='password'
                                        name='confirmPassword'
                                        margin='normal'
                                        fullWidth

                                    >
                                    </TextField>
                                    <Button
                                        variant='contained'
                                        type='submit'
                                        color='secondary'
                                        fullWidth
                                        onClick={registerFormik.handleSubmit}
                                    >
                                        Register
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                    ))}

                </Grid2>
            </Grid2 >
        </>

    );
}

export default Starting;
