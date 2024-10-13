import { Box, Button, Grid2, Tab, Tabs, TextField, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { useFormik } from 'formik';

function Starting() {
    const [value, setValue] = useState('0'); // Değeri string olarak ayarlayın

    const handleChange = (event, newValue) => {
        setValue(newValue); // newValue zaten string formatında olacak
    };

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
            console.log('Register Values:', values);
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
            <Grid2 size={12}>
                <Box className='content-container' flexDirection={'column'}>
                    <TabContext value={value}>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                        >

                            <Tabs value={value} onChange={handleChange}
                            >
                                <Tab value="0"
                                    label="Login" />
                                <Tab value="1"
                                    label="Register" />
                            </Tabs>
                        </Box>

                        <TabPanel value="0"
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{
                                    py: {
                                        xs: '25%',
                                        sm: '35%',
                                        md: 10,
                                    },
                                }}
                            >
                                <Box mb={2}>
                                    <Typography variant='h4' textAlign={'center'}>
                                        Login
                                    </Typography>
                                </Box>
                                <form onSubmit={loginFormik.handleSubmit}>
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        label='Email'
                                        fullWidth
                                        name="email"
                                        onChange={loginFormik.handleChange}
                                        value={loginFormik.values.email}
                                    />
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        label='Password'
                                        fullWidth
                                        name="password"
                                        onChange={loginFormik.handleChange}
                                        value={loginFormik.values.password}
                                        type="password"
                                    />
                                    <Box
                                        height={50}
                                        display={'flex'}
                                        mt={2}
                                    >

                                        <Button variant='contained' fullWidth

                                            color='secondary' type="submit">
                                            Login
                                        </Button>
                                    </Box>
                                </form>
                            </Box>

                        </TabPanel>

                        <TabPanel value="1">
                            <Box
                                display={'flex'}
                                sx={{
                                    py: {
                                        xs: '25%',
                                        sm: '35%',

                                        md: 10,
                                    },
                                }}
                                flexDirection={'column'}
                            >

                                <Box mb={2}>
                                    <Typography variant='h4' textAlign={'center'}>
                                        Register
                                    </Typography>
                                </Box>
                                <form onSubmit={registerFormik.handleSubmit}>
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        label='Email'
                                        fullWidth
                                        name="email"
                                        onChange={registerFormik.handleChange}
                                        value={registerFormik.values.email}
                                    />
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        label='Password'
                                        fullWidth
                                        name="password"
                                        onChange={registerFormik.handleChange}
                                        value={registerFormik.values.password}
                                        type="password"
                                    />
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        label='Username'
                                        fullWidth
                                        name="username"
                                        onChange={registerFormik.handleChange}
                                        value={registerFormik.values.username}
                                    />
                                    <Box
                                        height={50}
                                        mt={2}
                                        display={'flex'}
                                    >

                                        <Button variant='contained' fullWidth

                                            color='secondary' type="submit">
                                            Register
                                        </Button>
                                    </Box>

                                </form>
                            </Box>

                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default Starting;
