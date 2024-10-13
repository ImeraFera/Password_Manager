import React from 'react'
import './css/App.css'
import PageContainer from './components/PageContainer'
import Starting from './pages/Starting'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <>
      <PageContainer>
        <MainRoutes></MainRoutes>
      </PageContainer>
    </>
  )
}

export default App