import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";

function UploadBox() {

    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);

        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const droppedFile = event.dataTransfer.files[0];

            console.log(droppedFile)
            setFile(droppedFile);
            event.dataTransfer.clearData();
        }
    };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            console.log(selectedFile)
            setFile(selectedFile);
        }
    };

    const handleFileRemove = () => {
        setFile(null);
    };
    return (
        <Box
            className={`upload-container ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <Box
                display={'flex'}
                width={'100%'}
            >
                <Typography
                    variant='body2'
                    textAlign={'left'}
                >
                    Upload Backup
                </Typography>
            </Box>
            <Box className="header">

                {(file ? (
                    <Box
                        display={'flex'}
                        width={'100%'}
                        justifyContent={'center'}
                    >
                        <svg viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="white" strokeWidth="1"></path> <path d="M8 12H16" stroke="white" strokeWidth="1" strokeLinecap="round"></path> <path d="M8 8H16" stroke="white" strokeWidth="1" strokeLinecap="round"></path> <path d="M8 16H13" stroke="white" strokeWidth="1" strokeLinecap="round"></path> </g></svg>
                    </Box>


                ) : (
                    <Box
                        display={'flex'}
                        width={'100%'}
                        justifyContent={'center'}
                    >
                        <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
                            stroke="#ff0000">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <path d="M12 16V22M12 16L14 18M12 16L10 18" stroke="#ffffff" strokeWidth="1" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path
                                    d="M22 13.3529C22 15.6958 20.5562 17.7055 18.5 18.5604M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.6611 3.26124 18.2664 5 18.8061M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C19.0446 8.31916 19.8345 8.83436 20.4633 9.5"
                                    stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
                            </g>
                        </svg>
                    </Box>

                ))}

            </Box>
            <Typography
                variant='body2'
            >
                {file ? file.name : ''}
            </Typography>
            <Box className="footer">

                <Box
                    minWidth={'20%'}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <IconButton
                        onClick={handleFileRemove}

                    >
                        <FaTrashAlt
                            color='white'
                        ></FaTrashAlt>
                    </IconButton>
                </Box>

                <Box
                    display={'flex'}
                    width={'100%'}
                >
                    <Button
                        variant='contained'
                        color='secondary'
                        fullWidth
                        onClick={() => document.getElementById('file').click()}
                    >
                        Select File
                    </Button>
                </Box>

                <Box
                    minWidth={'20%'}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <IconButton>
                        <FaFileUpload
                            color='white'
                        ></FaFileUpload>
                    </IconButton>
                </Box>

            </Box>

            <Box>
                <input id="file" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
            </Box>


        </Box>

    )
}

export default UploadBox