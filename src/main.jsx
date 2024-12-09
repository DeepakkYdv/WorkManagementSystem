import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import RenderContextProvider, { RenderContext } from './context/RenderContexProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenderContextProvider>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
    </RenderContextProvider>
        
  </StrictMode>,
)
