import { Box, IconButton, Stack, Typography } from "@mui/material";
import { SearchBar, SideBar } from "..";
import Icon from "@mdi/react";
import { mdiMenu, mdiYoutube } from "@mdi/js";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

var anchor = "left";

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SideBar />
    </Box>
  );
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", sm: "block" } }}
            onClick={toggleDrawer(anchor, true)}
          >
            <Icon color={"white"} path={mdiMenu} size={1.5} />
          </IconButton>
        </React.Fragment>
        <Link to="./" style={{ display: "flex" }}>
          <Icon path={mdiYoutube} color={"red"} size={1.5} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            YouTube
          </Typography>
        </Link>

        <SearchBar />
      </Stack>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </>
  );
};

export default Navbar;
