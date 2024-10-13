import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme.jsx'
import { BrowserRouter, Route, Link } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </ThemeProvider>,
)
