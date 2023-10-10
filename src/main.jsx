import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Box
 sx={{
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
    p: 1,
    m: 1,
    bgcolor:green[100],
    borderRadius: 1,
    width:'100%',
    margin:'auto',
    height: 'auto',

 }}
 
 >

<App/>

 </Box>

 
    
</>
)
