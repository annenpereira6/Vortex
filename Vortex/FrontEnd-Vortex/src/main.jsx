import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import VortexInicio from './componentes/vortexInicio/VortexInicio'


createRoot(document.getElementById('root')).render( 
    <StrictMode>
        <VortexInicio/>
    </StrictMode>
)