import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import paperPlus from "../../../assets/sideNav/Paper Plus.png";
import Coins from "../../../assets/sideNav/Coins.png";
import Category from "../../../assets/sideNav/Category.png";
import "./SideNavBar.css";
import { Grid } from "@mui/material";
import { flexbox } from "@mui/system";
const drawerWidth = 300;

const navItem = [
  {
    name: "Dashboard",
    logo: Category,
  },
  {
    name: "Montages",
    logo: paperPlus,
  },
  {
    name: "Credits",
    logo: Coins,
  },
];

function SideNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar title =" React Test"/> */}
      <div className="SideNavBar-header">
        <h1>React Test</h1>
      </div>
      <hr />
      <List
        sx={{
          border: "1px solid pink",
        }}
      >
        {navItem.map((text, i) => (
          <ListItem
            key={i}
            disablePadding
            sx={{
              border: "1px solid pink",
              width: "133px",
              height: "24px",
              display: " flex",
              flexDirection: "row",
              justifyContent: " center",
              alignItems: "center",
              margin: "48px 135px 49px 32px",
              gap: "16px",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={text.logo} alt="" />
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <div className='SideNavBar-container'>

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            oura_Study
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          // open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "18.75rem",
              color: "white",
              background:
                "linear-gradient(180deg, #04273A 0%, rgba(3, 23, 35, 0.96) 100%)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            // display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "18.75rem",
              color: "white",
              background:
                "linear-gradient(180deg, #04273A 0%, rgba(3, 23, 35, 0.96) 100%)",
            },
          }}
          open
        >
          <Grid container overflow="hidden">
            <Grid item>{drawer}</Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                display: "flex",
                flexDirection: " column",
                justifyContent: "center",
                alignItems: " center",
                padding: "40px",
                gap: "8px",
                width: "15.5rem",
                height: "145px",
                background: "#02354F",
                boxShadow: "0px 3px 20px 4px rgba(0, 0, 0, 0.04)",
                borderRadius: " 4px",
                // margin: " 60%  auto 10% auto",
                position: "absolute",
                left: "1.5rem",
                bottom: "6%",
              }}
            >
              <h1>1,650</h1>
              <Typography>Total Credits Available</Typography>
            </Grid>
          </Grid>
        </Drawer>
      </Box>
    </Box>
    // </div>
  );
}

SideNavBar.propTypes = {
  window: PropTypes.func,
};

export default SideNavBar;
