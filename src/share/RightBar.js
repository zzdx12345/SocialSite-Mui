import { Avatar, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import db from '../db/db.json'




export default function RightBar() {

  const [friendList, setFriendList] = useState([])

  useEffect(()=>{
    setFriendList(db.chatRecord)
  },[])

  const photoList = () => {
    const imageList = []
    for(let i=0; i<9; i++){
      imageList.push({img: `https://picsum.photos/300?random=${i}`})
    }
    return imageList
  }

  return (
    <StyledBox sx={{display:{xs:'none',sm:'block'}}}>
      <Box>
        <Typography variant='h6'>Photos</Typography>
        <ImageList sx={{ height: '30vh' }} cols={3} >
          {photoList().map(item=> 
            <ImageListItem key={item.img}>
              <img src={item.img} alt=''/>
            </ImageListItem>
          )}
        </ImageList>
      </Box>

      {friendList && friendList.map(item=>
        <List key={item.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={item.avatar}/>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.detail}/>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      )}
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  flex: 2;
  padding: 10px;
`