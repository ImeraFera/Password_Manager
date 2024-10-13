import { Box, Button, Grid2, Tab, Tabs, TextField, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { useFormik } from 'formik';


function Home() {
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

                </Box>
            </Grid2>
        </Grid2>
    )
}

export default Home