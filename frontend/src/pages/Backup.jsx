import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid2, Stack, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import UploadBox from '../components/UploadBox'
function Backup() {
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


            <Grid2 container p={1}

                height={'69vh'}
                spacing={2} className='content-container'>

                <Grid2
                    size={12}
                    display={'flex'}
                    flexDirection={'column'}
                    borderColor={'rgba(255, 255, 255, 0.2)'}
                    borderRadius={'0.5em'}
                    p={2}
                    sx={{
                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )'

                    }}
                >                    <Box
                    display={'flex'}
                    flexDirection={'column'}
                    p={1}

                >
                        <Typography
                            variant='body2'
                        >
                            Backup Settings
                        </Typography>

                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            flexWrap={'wrap'}

                        >
                            <FormControlLabel control={<Checkbox />} label="Encrypt backup file" />
                            <FormControlLabel control={<Checkbox />} label="Upload backup file to cloud" />
                            <FormControlLabel control={<Checkbox />} label="Remove old backup from cloud" />

                        </Stack>

                    </Box>

                    <Box
                        display={'flex'}
                        p={1}
                        my={2}

                    >
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >

                            <Box
                                justifyContent={'center'}
                                display={'flex'}
                                alignItems={'center'}
                                width={'75%'}
                            >
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    fullWidth
                                >
                                    Download
                                </Button>
                            </Box>


                        </Box>
                    </Box>

                    <Box
                        display={'flex'}
                        width={'100%'}
                        height={'100%'}
                        flex={1}
                    >

                        <UploadBox></UploadBox>

                    </Box>

                </Grid2>
            </Grid2>
        </>

    )
}

export default Backup