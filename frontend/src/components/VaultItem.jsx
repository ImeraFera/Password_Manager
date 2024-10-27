import React from 'react'
import { Box } from '@mui/material'
function VaultItem(props) {

    const { id } = props;
    return (
        <Box>{id}</Box>
    )
}

export default VaultItem