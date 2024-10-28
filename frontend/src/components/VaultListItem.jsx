import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { iconMap, } from '../utils/data';

function VaultListItem(props) {

    const navigation = useNavigate();

    const { name, type, id, } = props

    return (
        <Box
            display={'flex'}
            width={'100%'}
            alignItems={'center'}
            bgcolor={'#313131'}
            height={75}
            borderRadius={1}
            borderColor={'gray'}
            sx={{
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#414141',
                },
                '&:active': {
                    backgroundColor: '#212121',
                },
                transition: 'background-color 0.3s ease-in-out',
                '&:focus': {
                    outline: 'none',
                },
                '&:focus-visible': {
                    outline: '2px dotted #000',
                },
            }}
            onClick={() => navigation("/password-case/" + id)}
        >
            <Box
                display={'flex'}
                ml={2}
            >
                {(iconMap.get(type))}
            </Box >

            <Box
                ml={2}
            >
                <Typography
                    variant='body1'
                >
                    {name}
                </Typography>
                <Typography
                    variant='caption'
                >
                    {type}
                </Typography>
            </Box>
        </Box >
    )
}

export default VaultListItem