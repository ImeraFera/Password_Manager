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
                    fontSize: '2em',
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
