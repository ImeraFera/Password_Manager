import { Grid2 } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

function AmISafe() {
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
        </>
    )
}

export default AmISafe