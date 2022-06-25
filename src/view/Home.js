import React, { useState } from 'react'
import NavBar from '../share/NavBar'
import SideBar from '../share/SideBar'
import RightBar from '../share/RightBar'
import Feed from '../share/Feed'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'



export default function Home() {

  const [mode, setMode] = useState('light')

  const theme = createTheme({
    palette: {
      mode: mode
    }
  })

  const stackConfig = {
    direction: 'row',
    spacing: {sm:0, md:2},
    mt: '10px',
  }

  return (
    <ThemeProvider theme={theme}>  
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar/>
        <Stack {...stackConfig}>
          <SideBar mode={mode} setMode={setMode}/>
          <Feed/>
          <RightBar/>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}