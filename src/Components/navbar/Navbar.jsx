import { AppBar, Box, IconButton, Typography} from "@mui/material";
import {  SearchBar, SideBar,} from "..";
import Icon from '@mdi/react';
import { mdiMenu, mdiYoutube } from '@mdi/js';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';

var anchor='left';

const Navbar = () => {

  const [state, setState] = React.useState({
    
    left: false,
   
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <SideBar/>

    </Box>)
  return (
    <Box  sx={{flexGrow:1 }}>
       <AppBar   position='sticky'  >
       <Toolbar mx={2} sx={{ backgroundColor:'#000', color:'white', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',cursor:'pointer'}}>
       <React.Fragment key={anchor}>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display:{xs:'block',sm:"block"} }}  onClick={toggleDrawer(anchor, true)} 
            
          >
       <Icon path={mdiMenu} size={1.5}/>
       </IconButton>
       </React.Fragment>

        <Icon path={mdiYoutube} color={'red'} size={1.5} />
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >YouTube
          </Typography>
        
        
           <SearchBar/>
           </Toolbar>
       </AppBar>
       <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
    </Box>
  );
};

export default Navbar;
