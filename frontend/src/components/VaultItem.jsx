import React from 'react'
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
function VaultItem(props) {

    const { id, name, type, url, username, email, createdDate, updatedDate, } = props;
    return (
        <Box
            p={2}
            display={'flex'}
            bgcolor={'#313131'}
            flexDirection={'column'}
        >
            <Box
                width={'100%'}
            >
                <Typography
                    variant='h6'
                    textAlign={'center'}
                >
                    Item Information
                </Typography>
            </Box>
            <Stack>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box>
                        <Typography
                            variant='body2'
                            mb={1}
                        >
                            Name
                        </Typography>
                        <TextField
                            variant='outlined'
                            size='small'
                            fullWidth
                            value={name}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                }
                            }}
                        >
                            Amazon
                        </TextField>
                    </Box>

                </Box>
                <Divider
                    sx={{
                        bgcolor: 'white',
                        mt: 1,
                        mb: 2
                    }}
                ></Divider>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box>
                        <Typography
                            variant='body2'
                            mb={1}
                        >
                            Username
                        </Typography>
                        <TextField
                            variant='outlined'
                            size='small'
                            fullWidth
                            value={username}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                }
                            }}
                        >
                            Amazon
                        </TextField>
                    </Box>

                </Box>
                <Divider
                    sx={{
                        bgcolor: 'white',
                        mt: 1,
                        mb: 2
                    }}
                ></Divider>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box>
                        <Typography
                            variant='body2'
                            mb={1}
                        >
                            Email
                        </Typography>
                        <TextField
                            variant='outlined'
                            size='small'
                            fullWidth
                            value={email}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                }
                            }}
                        >
                            Amazon
                        </TextField>
                    </Box>

                </Box>
                <Divider
                    sx={{
                        bgcolor: 'white',
                        mt: 1,
                        mb: 2
                    }}
                ></Divider>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box>
                        <Typography
                            variant='body2'
                            mb={1}
                        >
                            Password
                        </Typography>
                        <TextField
                            variant='outlined'
                            size='small'
                            fullWidth
                            value={username}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                }
                            }}
                        >
                            Amazon
                        </TextField>
                    </Box>

                </Box>
                <Divider
                    sx={{
                        bgcolor: 'white',
                        mt: 1,
                        mb: 2
                    }}
                ></Divider>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Box>
                        <Typography
                            variant='body2'
                            mb={1}
                        >
                            Website
                        </Typography>
                        <TextField
                            variant='outlined'
                            size='small'
                            fullWidth
                            value={username}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                }
                            }}
                        >

                        </TextField>
                    </Box>

                </Box>
                <Divider
                    sx={{
                        bgcolor: 'white',
                        mt: 1,
                        mb: 2
                    }}
                ></Divider>

            </Stack>
            <Box
                width={'100%'}
            >
                <Typography
                    variant='h6'
                    textAlign={'center'}
                >
                    Notes
                </Typography>
            </Box>
            <Box
                width={'100%'}
                mt={1}
            >
                <TextField
                    variant='outlined'
                    fullWidth
                    size='small'
                    multiline
                ></TextField>

            </Box>

            <Box
                display={'flex'}
                flexDirection={'column'}
                mt={2}
            >
                <Box>
                    <Typography
                        variant='caption'
                        fontWeight={'bold'}
                    >
                        Created  :
                    </Typography>
                    <Typography
                        variant='caption'
                    >
                        {createdDate}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant='caption'
                        fontWeight={'bold'}
                    >
                        Updated :
                    </Typography>
                    <Typography
                        variant='caption'

                    >
                        {updatedDate}
                    </Typography>
                </Box>
            </Box>
            <Box
                display={'flex'}
                mt={2}
            >
                <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                >
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default VaultItem