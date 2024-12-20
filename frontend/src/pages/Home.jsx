import { AppBar, Box, Button, Grid2, IconButton, Tab, Tabs, TextField, Toolbar, Typography, CardActionArea, Stack } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { BsFillSafeFill } from "react-icons/bs";
import HomeCard from '../components/HomeCard';
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePassword, MdOutlineSettingsBackupRestore } from "react-icons/md";
import { SiWindowsterminal } from "react-icons/si";
import { IoIosWarning } from "react-icons/io";
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigation = useNavigate();

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
                    size={{
                        md: 4, sm: 6, xs: 6
                    }}
                    display={'flex'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        className='home-card'
                        onClick={() => navigation('/password-case')}
                    >
                        <BsFillSafeFill
                            className='home-card-icon'
                        ></BsFillSafeFill>
                    </Box>
                </Grid2>

                <Grid2
                    size={{
                        md: 4, sm: 6, xs: 6
                    }}
                    display={'flex'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        className='home-card'
                        onClick={() => navigation('/password-generator')}

                    >
                        <MdOutlinePassword
                            className='home-card-icon'
                        ></MdOutlinePassword>
                    </Box>
                </Grid2>

                <Grid2
                    size={{
                        md: 4, sm: 6, xs: 6
                    }}
                    display={'flex'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        className='home-card'
                        onClick={() => navigation('/am-i-safe')}

                    >
                        <IoIosWarning
                            className='home-card-icon'
                        ></IoIosWarning>
                    </Box>
                </Grid2>

                <Grid2
                    size={{
                        md: 4, sm: 6, xs: 6
                    }}
                    display={'flex'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        className='home-card'
                        onClick={() => navigation('/logs')}

                    >
                        <SiWindowsterminal
                            className='home-card-icon'
                        ></SiWindowsterminal>
                    </Box>
                </Grid2>

                <Grid2
                    size={{
                        md: 4, sm: 6, xs: 6
                    }}
                    display={'flex'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        className='home-card'
                        onClick={() => navigation('/backup')}

                    >
                        <MdOutlineSettingsBackupRestore
                            className='home-card-icon'
                        ></MdOutlineSettingsBackupRestore>
                    </Box>
                </Grid2>

                <Grid2
                    size={{
                        md: 4, sm: 6, xs: 6
                    }}
                    display={'flex'}

                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        className='home-card'
                        onClick={() => navigation('/profile')}

                    >
                        <FaCircleUser
                            className='home-card-icon'
                        ></FaCircleUser>
                    </Box>
                </Grid2>


            </Grid2>
        </>

    )
}

export default Home