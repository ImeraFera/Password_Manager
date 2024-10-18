import { Box, Typography } from '@mui/material'
import React from 'react'

function Log(props) {
    const { type, content, date } = props;
    const typeColor = type === 'Warning'
        ? 'orange'
        : type === 'Error'
            ? 'red'
            : type === 'Info'
                ? 'cyan'
                : '';

    return (
        <Box
            display={'flex'}
        >
            <Typography variant="body2">
                <Typography
                    component="b"
                    variant="body2"
                    color={typeColor}
                    fontWeight="bold"
                >
                    {type}:
                </Typography>{' '}
                {content} -{' '}
                <Typography
                    component="span"
                    variant="body2"
                    color="lightgray"
                >
                    {date}
                </Typography>
            </Typography>
        </Box>
    );
}

export default Log;
