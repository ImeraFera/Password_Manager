import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function VaultListItem(props) {

    const navigation = useNavigate();

    const { name, type, id } = props

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
                <svg viewBox="0 0 24 24"
                    width={32}
                    height={32}
                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.3212 10.6852L4 19L6 21M7 16L9 18M20 7.5C20 9.98528 17.9853 12 15.5 12C13.0147 12 11 9.98528 11 7.5C11 5.01472 13.0147 3 15.5 3C17.9853 3 20 5.01472 20 7.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
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
        </Box>
    )
}

export default VaultListItem