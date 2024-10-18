import { Box, Button, Grid2, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import { DiTerminal } from "react-icons/di";
import { IoIosCopy } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import Log from '../components/Log';

function Logs() {
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
                border={2}
                borderColor={'#414141'}
            >
                <Grid2
                    size={12}
                    bgcolor={'#313131'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    p={2}
                >

                    <Box
                        display={'flex'}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            mr={1}
                        >
                            <DiTerminal
                                size={24}
                            ></DiTerminal>
                        </Box>
                        <Box>
                            <Typography
                                variant='body1'

                            >
                                Terminal
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton>
                        <IoIosCopy
                            color='white'
                            size={18}
                        ></IoIosCopy>
                    </IconButton>

                </Grid2>

                <Grid2
                    size={12}
                    p={1}
                    display={'flex'}
                >

                    <Stack
                        className='log-list-container'
                        spacing={1}
                        height={'54vh'}
                    >
                        {Array(19).fill(null).map((log, index) => {
                            return (
                                <Log key={index}
                                    type='Warning'
                                    content='lorem ipsum  dolor sit amet, con  et justo od   reprehenderit in voluptate velit esse cillum'
                                    date={new Date().toUTCString()}
                                ></Log>
                            )
                        })}
                    </Stack>

                </Grid2>
            </Grid2>
        </Grid2>

    )
}

export default Logs