import React from 'react'
import Navbar from '../components/Navbar'
import { Avatar, Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid2, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'

function Profile() {


    const updateFormik = useFormik({
        initialValues: {
            recoveryEmail: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            console.log(values)
        },
        validationSchema: null,
    })


    return (
        <Grid2
            container
            className='container'
            spacing={0}
        >


            <Grid2
                size={12}
                mb={2}
            >
                <Navbar></Navbar>
            </Grid2>



            <Grid2
                size={12}
                mb={2}
            >
                <Box
                    display={'flex'}
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
            </Grid2>


            <Grid2
                size={{
                    md: 6,
                    sm: 6,
                    xs: 12
                }}
                flexDirection={'column'}
                display={'flex'}
                justifyContent={'center'}
                my={2}
            >
                <Box
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                    >
                        <TextField
                            variant='outlined'
                            margin='normal'
                            label='Recovery Email'
                            type='email'
                            name='recoveryEmail'
                            value={updateFormik.values.recoveryEmail}
                            onChange={updateFormik.handleChange}
                        >

                        </TextField>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            label='Password'
                            type='password'
                            name='password'
                            value={updateFormik.values.password}
                            onChange={updateFormik.handleChange}
                        >

                        </TextField>
                        <TextField
                            variant='outlined'
                            label='Confirm Password'
                            margin='normal'
                            type='password'
                            name='confirmPassword'
                            value={updateFormik.values.confirmPassword}
                            onChange={updateFormik.handleChange}
                        >

                        </TextField>
                    </Box>

                </Box>

            </Grid2>

            <Grid2
                size={{
                    md: 6,
                    sm: 6,
                    xs: 12
                }}
                display={'flex'}
                justifyContent={'left'}
                flexDirection={'row'}
                my={2}
            >

                <Box
                    display={'flex'}
                    flexWrap={'wrap'}
                    flexDirection={'column'}
                    justifyContent={'space-evenly'}
                    alignItems={'flex-start'}
                >

                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lock my account if accessed from another location." />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Automatically log out when session expires." />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Send notifications when logging in from new devices." />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Require two-factor authentication." />

                </Box>


            </Grid2>

            <Grid2
                size={12}
                my={2}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <Box
                        width={'75%'}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            type='submit'
                            fullWidth
                            onClick={updateFormik.handleSubmit}
                        >
                            Save
                        </Button>
                    </Box>

                </Box>

            </Grid2>

        </Grid2>

    )
}

export default Profile