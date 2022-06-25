import React from 'react'
import { Box, Divider, List, Switch } from '@mui/material'
import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material'
import { Home, Groups, Storefront, People } from '@mui/icons-material';
import { Settings, AccountCircle, Brightness6 } from '@mui/icons-material';



export default function SideBar({mode, setMode}) {

  const boxConfig = {
    flex: 1,
    sx: {display:{xs:'none',sm:'block'}}
  }

  const list = [
    {id: 1, icon: <Home/>, title: 'HomePages'},
    {id: 4, icon: <People/>, title: 'Friends'},
    {id: 2, icon: <Groups/>, title: 'Groups'},
    {id: 3, icon: <Storefront/>, title: 'MarketPlace'},
    {id: 5, icon: <Settings/>, title: 'Settings'},
    {id: 6, icon: <AccountCircle/>, title: 'Profile'}
  ]

  return (
    <Box {...boxConfig}>

      <List>
        {list.map(item=>
          <ListItem disablePadding key={item.id}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        )}
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Brightness6/>
            </ListItemIcon>
            <Switch onClick={()=>setMode(mode === 'light'? 'dark' : 'light')}/>
          </ListItemButton>
        </ListItem>
      </List>
      
    </Box>
  )
}