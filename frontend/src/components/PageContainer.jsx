import React, { Children } from 'react'
import { Box, Container } from '@mui/material'
function PageContainer({ children }) {
    return (

        <Container
            maxWidth='md'
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            {children}
        </Container>
    )
}

export default PageContainer