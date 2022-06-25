import React from 'react'
import { AppBar, Toolbar, Typography, Box, Badge, Avatar } from '@mui/material'
import { styled } from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import SearchBar from './SearchBar';



export default function NavBar () {
  
  return (
    <AppBar position='static'>
      <StyledToolbar>

        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
          LAMA DEV
        </Typography>
        <Pets sx={{display:{xs:'block',sm:'none'}}}/>

        <SearchBar/>

        <IconsBox>
          <Badge badgeContent={4} color="error"><Mail/></Badge>
          <Badge badgeContent={4} color="error"><Notifications/></Badge>
          <Avatar sx={{width:'30px',height:'30px'}}/>
        </IconsBox>
        {/* for mobile */}
        <MobileIconsBox >
          <Typography variant='span'>Admin</Typography>
          <Avatar sx={{width:'30px',height:'30px'}}/>
        </MobileIconsBox>

      </StyledToolbar>
    </AppBar>
  )
}

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
const IconsBox = styled(Box)(({theme})=>({
  display: 'none',
  alignItems: 'center',
  gap: '25px',
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  }
}))
const MobileIconsBox = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]:{
    display: 'none'
  }
}))