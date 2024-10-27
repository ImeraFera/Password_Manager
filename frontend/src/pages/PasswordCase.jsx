import React, { useState } from 'react';
import { Box, Button, Divider, Grid2, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography, TextField, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { FaCirclePlus } from "react-icons/fa6";
import { PiVaultFill } from "react-icons/pi";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";
import { FaAddressCard } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import Navbar from '../components/Navbar';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FaKey } from "react-icons/fa";
import VaultListItem from '../components/VaultListItem'
import { useParams } from 'react-router-dom'
import VaultItem from '../components/VaultItem';

function PasswordCase() {



    const { id } = useParams();


    const [openDialog, setOpenDialog] = useState(false);
    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCreateVault = () => {
        console.log('vault is created');
        handleClose();
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

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

            <Grid2 container p={1} spacing={2} className='content-container'>
                <Grid2
                    size={{
                        md: 4,
                        sm: 6,
                        xs: 12,
                    }}
                    display={'flex'}
                    flexDirection={'column'}
                    borderColor={'rgba(255, 255, 255, 0.2)'}
                    borderRadius={'0.5em'}
                    p={2}
                    sx={{
                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )'

                    }}
                >
                    <Box mb={2}>
                        <Typography variant='h6'>
                            Filters
                        </Typography>
                    </Box>
                    <Box>
                        <Box display={'flex'} alignItems="center">
                            <TextField
                                variant='outlined'
                                size="small"
                                label='Search'
                                fullWidth
                            />
                            <IconButton onClick={() => null}>
                                <HiMiniMagnifyingGlassCircle
                                    size={32}
                                    color='white' />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box
                        height={349}
                    >

                        <Scrollbars
                            autoHide
                            style={{ maxHeight: '100%' }}
                            renderThumbVertical={({ style, ...props }) => (
                                <div {...props} style={{ ...style, backgroundColor: '#4b8100', borderRadius: '1em', width: '.2em' }} />
                            )}

                        >
                            <List
                                component="nav"
                                subheader={<li />}
                            >
                                <ListSubheader
                                    sx={{
                                        bgcolor: 'transparent',
                                        color: 'white',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'space-between'}
                                    >
                                        <Typography variant='body1'>
                                            My Vaults
                                        </Typography>
                                        <IconButton>
                                            <FaCirclePlus size={24} color='white' />
                                        </IconButton>
                                    </Box>
                                </ListSubheader>
                                <Divider sx={{ my: 1, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                                <ListItemButton
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                    sx={{
                                        borderRadius: 1,
                                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )',
                                        marginBottom: 2,
                                    }}
                                >
                                    <ListItemIcon>
                                        <PiVaultFill color='white' size={28} />
                                    </ListItemIcon>
                                    <ListItemText primary="Personal Vault" primaryTypographyProps={{ variant: 'body2' }} />
                                </ListItemButton>

                                <ListSubheader
                                    sx={{
                                        bgcolor: 'transparent',
                                        color: 'white',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'space-between'}
                                    >
                                        <Typography variant='body1'>
                                            All Items
                                        </Typography>
                                    </Box>
                                </ListSubheader>
                                <Divider sx={{ my: 1, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                    sx={{
                                        borderRadius: 1,
                                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )',
                                        marginBottom: 2,
                                    }}
                                >
                                    <ListItemIcon>
                                        <FaAddressCard color='white' size={28} />
                                    </ListItemIcon>
                                    <ListItemText primary="Identity" primaryTypographyProps={{ variant: 'body2' }} />
                                </ListItemButton>

                                <ListItemButton
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)}
                                    sx={{
                                        borderRadius: 1,
                                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )',
                                        marginBottom: 2,
                                    }}
                                >
                                    <ListItemIcon>
                                        <FaCreditCard color='white' size={28} />
                                    </ListItemIcon>
                                    <ListItemText primary="Card" />
                                </ListItemButton>

                                <ListItemButton
                                    selected={selectedIndex === 3}
                                    onClick={(event) => handleListItemClick(event, 3)}
                                    sx={{
                                        borderRadius: 1,
                                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )',
                                        marginBottom: 2,
                                    }}
                                >
                                    <ListItemIcon>
                                        <FaStickyNote color='white' size={28} />
                                    </ListItemIcon>
                                    <ListItemText primary="Note" />
                                </ListItemButton>

                                <ListItemButton
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListItemClick(event, 3)}
                                    sx={{
                                        borderRadius: 1,
                                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )',
                                        marginBottom: 2,
                                    }}
                                >
                                    <ListItemIcon>
                                        <FaKey color='white' size={28} />
                                    </ListItemIcon>
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </List>
                        </Scrollbars>
                    </Box>

                </Grid2>

                {(!id) ? (
                    <Grid2
                        size={{
                            md: 8,
                            sm: 6,
                            xs: 12,
                        }}
                        display={'flex'}
                        flexDirection={'column'}
                        borderColor={'rgba(255, 255, 255, 0.2)'}
                        borderRadius={'0.5em'}
                        sx={{
                            boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )'

                        }}
                    >
                        <Scrollbars
                            style={{ width: '100%', height: '66vh' }}
                            autoHide
                            renderThumbVertical={({ style, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...style,
                                        backgroundColor: '#4b8100',
                                        borderRadius: '1em',
                                        width: '.2em',
                                    }}
                                />
                            )}
                        >
                            <Box
                                width={'100%'}
                                maxHeight={500}
                                height={'100%'}
                            >

                                <Stack
                                    p={1}
                                    spacing={2}
                                >
                                    <VaultListItem name="Gmail" type="login" id={0} />
                                    <VaultListItem name="Facebook" type="login" id={1} />
                                    <VaultListItem name="Credit Card" type="card" id={2} />

                                </Stack>
                            </Box>
                        </Scrollbars>

                    </Grid2>
                ) : (
                    <Grid2
                        size={{
                            md: 8,
                            sm: 6,
                            xs: 12,
                        }}
                        display={'flex'}
                        flexDirection={'column'}
                        borderColor={'rgba(255, 255, 255, 0.2)'}
                        borderRadius={'0.5em'}
                        sx={{
                            boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .25 )'

                        }}
                    >
                        <Scrollbars
                            style={{ width: '100%', height: '66vh' }}
                            autoHide
                            renderThumbVertical={({ style, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...style,
                                        backgroundColor: '#4b8100',
                                        borderRadius: '1em',
                                        width: '.2em',
                                    }}
                                />
                            )}
                        >
                            <Box
                                width={'100%'}
                                maxHeight={500}
                                height={'100%'}
                            >

                                <VaultItem
                                    id={id}
                                ></VaultItem>

                            </Box>
                        </Scrollbars>

                    </Grid2>
                )}



                <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle id="dialog-title">
                        New Vault Item
                    </DialogTitle>
                    <DialogContent>
                        <Box display={'flex'} justifyContent={'center'} my={2} flexDirection={'column'}>
                            <Box display={'flex'} justifyContent={'center'} mb={2}>
                                <TextField
                                    variant='outlined'
                                    size="small"
                                    label='Vault Name'
                                    fullWidth
                                />
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="inherit">
                            Close
                        </Button>
                        <Button onClick={handleCreateVault} color="inherit">
                            Create Vault
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid2 >
        </>

    );
}

export default PasswordCase;
