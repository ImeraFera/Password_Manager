import React, { Children } from 'react'
import { Container } from '@mui/material'
function PageContainer({ children }) {
    return (
        <Container
            maxWidth='md'
        >
            {children}
        </Container>
    )
}

export default PageContainer