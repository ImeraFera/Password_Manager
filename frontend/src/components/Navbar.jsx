import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (

        <>
            <Box
                m={0}
                p={0}
                mb={2}
                display={'flex'}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            P4ssw0rd_M4n4g3r
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar