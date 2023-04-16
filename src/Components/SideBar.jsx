import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ico}from '../utils/constants'
import Icon from '@mdi/react';
import { mdiMenu, mdiYoutube } from '@mdi/js';
import { IconButton, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const SideBar = () => {
 
 
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
           <ListItemButton >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }} 
           
          >
       <Icon path={mdiMenu} size={1.5}/>
       </IconButton>
       

        <Icon path={mdiYoutube} color={'red'} size={1.5} />
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >YouTube
          </Typography>
          </ListItemButton>
        </ListSubheader>
      }
    > 
    
    <div style={{marginTop:"20px"}}>
       {ico.map((icons)=>(
        <Link to='./'>
      <ListItemButton >
        <ListItemIcon>
        {icons.icn}
        </ListItemIcon>
        <ListItemText primary={icons.name} />
        
      </ListItemButton>
      </Link>
        ))}
        </div>

      
    </List>
  )
}

export default SideBar