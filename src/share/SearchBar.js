import React, { useEffect, useState } from 'react'
import { Avatar, InputBase, ListItemAvatar, Divider, Box } from '@mui/material'
import { ListItemText, List, ListItem, styled } from '@mui/material'
import db from '../db/db.json'



export default function SearchBar() {

  const [dataList, setDataList] = useState([])
  const [input, setinput] = useState('')

  useEffect(()=>{
    setDataList(db.feedList)
  },[])

  const handleSearch = () => dataList.filter( item => (
    item.name.toLowerCase().includes(input.toLowerCase()) || 
    item.title.toLowerCase().includes(input.toLowerCase())
  ))
  

  return (
    <SearchBox bgcolor={'background.default'} color={'text.primary'}>
      <InputBase value={input} placeholder='search...'  
        onChange={(e)=>setinput(e.target.value)}
      />

      {input && 
        <PopupBox bgcolor={'background.default'}>
          {handleSearch().map(item=>
              <List key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={item.avatar}/>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} secondary={item.title}/>
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>  
          )}
        </PopupBox>
      }
    </SearchBox>
  )
}

const SearchBox = styled(Box)`
  padding: 0 10px;
  border-radius: 8px;
  width: 40%;
  position: relative;
    .MuiInputBase-root{
      width: 100%;
    }
`
const PopupBox = styled(Box)`
  width: 100%;
  left: 0;
  right: 0;
  border-radius: 8px;
  position: absolute;
`
