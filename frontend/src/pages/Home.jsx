import { AppBar, Box, Button, Grid2, IconButton, Tab, Tabs, TextField, Toolbar, Typography, CardActionArea, Stack } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import MenuIcon from '@mui/icons-material/Menu';
import { BsFillSafeFill } from "react-icons/bs";
import HomeCard from '../components/HomeCard';
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePassword, MdOutlineSettingsBackupRestore } from "react-icons/md";
import { SiWindowsterminal } from "react-icons/si";
import { IoIosWarning } from "react-icons/io";
import Navbar from '../components/Navbar'
function Home() {

    return (
        <Grid2
            container
            className="container"
        >
            <Grid2
                size={12}
            >
                <Navbar />


                <Box
                    bgcolor={'red'}
                    className='home-card-container'
                >
                    <Box
                        className='home-card'
                    >

                    </Box>
                    <Box
                        className='home-card'
                    >

                    </Box>
                    <Box
                        className='home-card'
                    >

                    </Box> <Box
                        className='home-card'
                    >

                    </Box> <Box
                        className='home-card'
                    >

                    </Box>
                    <Box
                        className='home-card'
                    >

                    </Box>
                </Box>
            </Grid2>

        </Grid2>

    )
}

export default Home