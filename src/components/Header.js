import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import React, {useState} from "react"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import {Link} from "react-router-dom"
import "../style/Header.css"
import MenuIcon from "@mui/icons-material/Menu"

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  // handle menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/restaurant-app"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor: "black"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{mr: 2, display: {sm: "none"}}}
              onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>

            <Typography component={"div"} sx={{color: "goldenrod", flexGrow: 1}} variant="h6">
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Divider />
            <Box sx={{display: {xs: "none", sm: "block"}}}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/restaurant-app"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  )
}

export default Header
