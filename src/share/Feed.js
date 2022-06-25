import React, { useEffect, useState } from 'react'
import { Box, Card, CardHeader, CardMedia, CardContent, styled } from '@mui/material'
import { CardActions, IconButton, Avatar, Typography, Checkbox } from '@mui/material'
import { Favorite, FavoriteBorder, Share, MoreVert } from '@mui/icons-material'
import db from '../db/db.json'



export default function Feed() {
  
  const [list,setList] = useState([])
  
  useEffect(()=>{
    setList(db.feedList)
  },[])
  
  const cardSetting = item => ({
      header: {
        avatar: <Avatar src={item.avatar}/>,
        action: <IconButton><MoreVert/></IconButton>,
        title: item.name,
        subheader: item.subheader
      },
      media: {
        component: "img",
        height: "300px",
        image: item.image,
        alt: item.alt
      }
  })
  
  
  return (
    <StyledBox>
      {list && list.map(item=>{
        let info = cardSetting(item)
        return(
          <Card key={item.id}>
            <CardHeader {...info.header}/>
            <CardMedia {...info.media}/>

            <CardContent>
              <Typography variant="body2" color="gray">{item.desc}</Typography>
            </CardContent>

            <CardActions>
              <IconButton >
                <Checkbox icon={<FavoriteBorder/>} 
                  checkedIcon={<Favorite sx={{color:'red'}}/>}
                />
              </IconButton>
              <IconButton><Share/></IconButton>
            </CardActions>
          </Card>  
        )
      })}
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  flex: 4;
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`