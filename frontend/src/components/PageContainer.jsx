import React from 'react'
import { Box, Container, Grid2 } from '@mui/material'
import Navbar from './Navbar'
function PageContainer({ children }) {
    return (

        <Container
            maxWidth='md'
            sx={{
                height: '85vh',
                mx: 2,
            }}
            className='container'
        >


            {children}
        </Container>
    )
}

export default PageContainer