import { Box, CardActionArea } from '@mui/material'
import React from 'react'

import { useNavigate } from 'react-router-dom'

function HomeCard(props) {

    const { icon, link, } = props


    const navigation = useNavigate();

    const handleClick = () => {
        return navigation(link)
    }

    return (
        <Box
            className='home-card'
            onClick={handleClick}
        >
            {icon}

        </Box>)
}

export default HomeCard