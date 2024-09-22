import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cssbaseline from "@mui/material/Cssbaseline"
import {HelmetProvider} from "react-helmet-async"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Cssbaseline/>
    <App />
    </HelmetProvider>
  </StrictMode>
)
