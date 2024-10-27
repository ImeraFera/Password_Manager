import { createTheme } from "@mui/material";

const primaryColor = '#313131';
const secondaryColor = '#4b8100';

export const theme = createTheme({
    typography: {
        fontFamily: 'JetBrains Mono, Arial, sans-serif',
    },
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
    },
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#313131',
                    color: 'white',
                    borderRadius: '1em',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&.Mui-checked': {
                        color: secondaryColor,
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                            borderColor: secondaryColor,
                        },
                        '&:hover fieldset': {
                            borderColor: secondaryColor,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: secondaryColor,
                        },
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: 'white',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                },
                indicator: {
                    backgroundColor: secondaryColor,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontSize: '1em',
                    '&.Mui-selected': {
                        color: secondaryColor,
                    },
                    '&:hover': {
                        color: secondaryColor,

                    },
                },
            },
        },
    },
});
