import React, { useContext } from "react";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { LocalBar } from "@mui/icons-material";
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import CoffeeIcon from '@mui/icons-material/Coffee';
import PunchIcon from "../assets/Icons/PunchIcon";
import ShakerIcon from "../assets/Icons/ShakerIcon";
import UserContext from "../hooks/Context/UserContext";
import DrinkContext from "../hooks/Context/DrinkContext";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {logout} = useContext(UserContext);
  
  const {fetchAlcoholic} = useContext(DrinkContext);
  const {fetchNonAlcoholic} = useContext(DrinkContext);
  const {fetchBeer} = useContext(DrinkContext);
  const {fetchCoffee} = useContext(DrinkContext);
  const {fetchPunch} = useContext(DrinkContext);
  const {fetchShaker} = useContext(DrinkContext);

  const handleDrawerToggle = () => {
    if (open) {
      setOpen(false);
    } else {
    setOpen(true);
  }
  };
  const handleLogout = () => {
    logout();
  };

  const handleHome = () => {
    fetchAlcoholic();
  };

  const handleAlcoholic = () => {
    fetchAlcoholic();
  };

  const handleNonAlcoholic = () => {
    fetchNonAlcoholic();
  };

  const handleBeer = () => {
    fetchBeer();
  };

  const handleCoffee = () => {
    fetchCoffee();
  };

  const handlePunch = () => {
    fetchPunch();
  };

  const handleShaker = () => {
    fetchShaker();
  };
  return (
    <Box sx={{ display: 'flex' }}>
      

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            { open==true ?   <ChevronLeftIcon/> : <MenuIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key="home" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event)=>handleHome()} sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <HomeIcon color="info"/>
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider/>
        <List>
        <ListItem key="cocktail" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event) => handleAlcoholic() } sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <LocalBar />
              </ListItemIcon>
              <ListItemText primary="Cocktail" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        <ListItem key="softdrink" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event)=> handleNonAlcoholic()} sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <LocalDrinkIcon />
              </ListItemIcon>
              <ListItemText primary="Softdrink" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="beer" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event)=> handleBeer()} sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <SportsBarIcon />
              </ListItemIcon>
              <ListItemText primary="Beers" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="coffee" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event)=> handleCoffee()} sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <CoffeeIcon />
              </ListItemIcon>
              <ListItemText primary="Coffee" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="punch" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event)=> handlePunch()} sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <PunchIcon className="ml-[-4px]" />
              </ListItemIcon>
              <ListItemText primary="Punchs" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem key="shaker" disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={(event)=>handleShaker()} sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <ShakerIcon className="ml-[-4px]"/>
              </ListItemIcon>
              <ListItemText primary="Shaker" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        
    <Divider />
        <div style={{ position: 'absolute', bottom: 10 ,width:"100%"}}>
        <Divider />
        <List>
          <ListItem key="Logout" disablePadding >
            <ListItemButton onClick={(event)=>handleLogout()}  sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
              <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
                <LogoutIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
  </div>
      </Drawer>
      </Box>);
    }