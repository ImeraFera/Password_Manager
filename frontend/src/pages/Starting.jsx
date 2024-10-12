import { Box, Button, Grid2, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik'
function Starting() {


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }
    })

    return (

        <Grid2
            container
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Grid2
                size={12}
            >
                <Box className='content-container'>

                    <Box sx={{ width: '100%', mt: 5 }}>
                        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                            <Tab label="Login" />
                            <Tab label="Register" />
                        </Tabs>
                        {value === 0 && (
                            <Box sx={{ p: 3 }}>
                                <h2>Login</h2>
                                <form>
                                    <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                                    <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                                    <Button variant="contained" color="primary" type="submit">
                                        Login
                                    </Button>
                                </form>
                            </Box>
                        )}
                        {value === 1 && (
                            <Box sx={{ p: 3 }}>
                                <h2>Register</h2>
                                <form>
                                    <TextField label="Username" variant="outlined" fullWidth margin="normal" />
                                    <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                                    <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                                    <Button variant="contained" color="primary" type="submit">
                                        Register
                                    </Button>
                                </form>
                            </Box>
                        )}
                    </Box>


                </Box>
            </Grid2>
        </Grid2 >
    )
}

export default Starting