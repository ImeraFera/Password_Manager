import React from 'react'
import Navbar from '../components/Navbar'
import { Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Grid2, Stack, TextField } from '@mui/material'
import { useFormik } from 'formik'

function Profile() {


    const updateFormik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {

        },
        validationSchema: null,
    })
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
                    <Navbar></Navbar>
                    <Box
                        className='home-content'
                        flexDirection={'column'}
                    >
                        <Box
                            display={'flex'}
                            p={2}
                            bgcolor={'#313131'}
                            justifyContent={'center'}
                        >
                            <Avatar
                                sx={{
                                    width: '4em',
                                    height: '4em',
                                }}
                            >
                            </Avatar>
                        </Box>
                        <Box
                            display={'flex'}
                            bgcolor={'#313131'}
                            width={'100%'}
                            justifyContent={'space-around'}
                            flexWrap={'wrap'}
                        >

                            <form onSubmit={updateFormik.handleSubmit}>
                                <Box
                                    width={'100%'}
                                    display={'flex'}
                                    flexDirection={'column'}
                                    mb={2}
                                >
                                    <TextField
                                        variant='outlined'
                                        label='Email'
                                        fullWidth
                                        margin='normal'
                                        value={updateFormik.values.email}
                                        onChange={updateFormik.handleChange}
                                        type='email'
                                        name='email'
                                    >

                                    </TextField>
                                    <TextField
                                        variant='outlined'
                                        label='Username'
                                        fullWidth
                                        margin='normal'
                                        value={updateFormik.values.email}
                                        onChange={updateFormik.handleChange}
                                        type='text'
                                        name='username'
                                    >

                                    </TextField>
                                    <TextField
                                        variant='outlined'
                                        label='Password'
                                        fullWidth
                                        margin='normal'
                                        value={updateFormik.values.email}
                                        onChange={updateFormik.handleChange}
                                        type='password'
                                        name='password'
                                    >

                                    </TextField>

                                    <TextField
                                        variant='outlined'
                                        label='Confirm Password'
                                        fullWidth
                                        margin='normal'
                                        value={updateFormik.values.email}
                                        onChange={updateFormik.handleChange}
                                        type='password'
                                        name='password'
                                    >

                                    </TextField>
                                    <Box
                                        mt={2}
                                    >

                                    </Box>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        fullWidth
                                        type='submit'
                                    >
                                        Update
                                    </Button>
                                </Box>
                            </form>

                            <Box
                                display={'flex'}
                            >

                                <Stack>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

                                </Stack>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid2>
        </Grid2 >
    )
}

export default Profile