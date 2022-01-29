// react imports
import React, { FunctionComponent, useState } from 'react';
// MUI imports
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {
  IconButton, InputAdornment, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Collapse,
  ListItemButton
} from '@mui/material/';
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
// Icon imports
import Menu from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// Nav icons
import Input from '@mui/icons-material/Input';
import Cached from '@mui/icons-material/Cached';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BubbleChart from '@mui/icons-material/BubbleChart';
import Build from '@mui/icons-material/Build';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Summarize from '@mui/icons-material/Summarize';
import EventNote from '@mui/icons-material/EventNote';
import People from '@mui/icons-material/People';
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
// Custom import
import Body from '../body/body';

const headerIconColor: string = 'rgb(50,50,50)';
const searchBackgroundFocused: string = 'white';

// ======================================================= copy pastaed from MUI docs for the permanent sidebar
const drawerWidth: number = 240;
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
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
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
// ============================================================================================ end copy pasta

interface NavigationProps {
  openDrawer: () => void;
}

/**
 * The sidebar navigation comp
 * @param openDrawer opens the parent component drawer
 * @constructor
 */
const Navigation: FunctionComponent<NavigationProps> = ({openDrawer}) => {
  const [loadingOpen, setLoadingOpen] = useState<boolean>(false);
  const [moldingOpen, setMoldingOpen] = useState<boolean>(false);
  const [secondaryOpen, setSecondaryOpen] = useState<boolean>(false);
  const [foamingOpen, setFoamingOpen] = useState<boolean>(false);
  const [assemblyOpen, setAssemblyOpen] = useState<boolean>(false);
  const [shippingOpen, setShippingOpen] = useState<boolean>(false);
  const [reportingOpen, setReportingOpen] = useState<boolean>(false);
  const [schedulingOpen, setSchedulingOpen] = useState<boolean>(false);
  const [managementOpen, setManagementOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const toggleFunc = (toggle: (val: boolean) => void, val: boolean) => {
    // if toggling open, open the drawer as well
    if (!val) openDrawer();
    toggle(!val);
  }

  const navListProcessing: any = [
    {
      name: 'Arm Loading',
      icon: <Input />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setLoadingOpen, loadingOpen),
      isOpen: loadingOpen
    },
    {
      name: 'Molding',
      icon: <Cached />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setMoldingOpen, moldingOpen),
      isOpen: moldingOpen
    },
    {
      name: 'Secondary',
      icon: <EngineeringIcon />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setSecondaryOpen, secondaryOpen),
      isOpen: secondaryOpen
    },
    {
      name: 'Foaming',
      icon: <BubbleChart />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setFoamingOpen, foamingOpen),
      isOpen: foamingOpen
    },
    {
      name: 'Assembly',
      icon: <Build />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setAssemblyOpen, assemblyOpen),
      isOpen: assemblyOpen
    },
    {
      name: 'Shipping',
      icon: <LocalShipping />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setShippingOpen, shippingOpen),
      isOpen: shippingOpen
    },
  ];
  const navListManagement: any = [
    {
      name: 'Reporting',
      icon: <Summarize />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setReportingOpen, reportingOpen),
      isOpen: reportingOpen
    },
    {
      name: 'Scheduling',
      icon: <EventNote />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setSchedulingOpen, schedulingOpen),
      isOpen: schedulingOpen
    },
    {
      name: 'Management',
      icon: <People />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setManagementOpen, managementOpen),
      isOpen: managementOpen
    },
    {
      name: 'Services',
      icon: <AdminPanelSettings />,
      links: [1, 2, 3, 4],
      toggle: () => toggleFunc(setServicesOpen, servicesOpen),
      isOpen: servicesOpen
    }
  ]

  return (
    <List>
      {[navListProcessing, navListManagement].map((navList: any) => {
        return (
          <>
            {navList.map((nav: any) => (
              <>
                <ListItem button onClick={() => nav.toggle()} key={`${nav.name}-1`}>
                  <ListItemIcon>
                    {nav.icon}
                  </ListItemIcon>
                  <ListItemText primary={nav.name} />
                  {nav.isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={nav.isOpen} timeout='auto' unmountOnExit key={`${nav.name}-2`}>
                  <List component='div' disablePadding>
                    {nav.links.map((link: any) => (
                      <ListItem button key={link}>
                        <ListItemText primary={link} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ))}
          <Divider />
          </>
        )
      })}
    </List>
  );
}

interface TextFieldProps extends StandardTextFieldProps {
  focusColor?: string;
}
/**
 *
 * @constructor
 */
const SearchBar: FunctionComponent = () =>{
  const [focused, setFocused] = useState<boolean>(false);

  // Allow overRiding of focus color
  const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor"
  })<TextFieldProps>((p) => ({
    // input label when focused
    "& label.Mui-focused": {
      color: p.focusColor,
      // backgroundColor:
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: p.focusColor
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: p.focusColor
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor
      }
    }
  }));

  return (
    <>
      <CssTextField
        focusColor={headerIconColor}
        sx={{
          width: '30rem',
          backgroundColor: searchBackgroundFocused,
          borderRadius: '5px'
        }}
        size='small'
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton>
                <SearchIcon style={{color: 'rgb(50,50,50)'}} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </>
  );
}

/**
 * Header comp
 * @constructor
 */
const Header: FunctionComponent = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' open={drawerOpen}>
        <Toolbar style={{justifyContent: 'space-between'}}>
          <IconButton size='medium' edge='start' color='inherit' aria-label='menu' title='Display menu'
                      onClick={() => setDrawerOpen(true)}>
            <Menu style={{color: headerIconColor}} />
          </IconButton>
          <SearchBar />
          <IconButton size='medium' edge='start' color='inherit' aria-label='account' title='Display account menu'>
            <AccountCircleIcon style={{color: headerIconColor}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        variant='permanent'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerHeader>
          <IconButton onClick={() => setDrawerOpen(false)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Navigation openDrawer={() => setDrawerOpen(true)}/>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Body />
      </Box>
    </Box>
  );
}

export default Header;
