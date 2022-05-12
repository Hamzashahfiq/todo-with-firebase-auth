import React, { useState, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from "react-router-dom";
import MoreIcon from '@mui/icons-material/MoreVert';
import { SideBarData } from '../../constant/SideBarData';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogButton from '../logButton/LogButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import {Logout} from '../../store/action/AuthAction'
import CircularLoading from '../circularLoading/CircularLoading';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// code for boostap tooltip
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function Navbar() {
  const [width, height] = useWindowSize()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
   
    const doLogout = () => {
      console.log('abc')
      dispatch(Logout(setIsLoading))
    } 

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenu = () => {
    setIsMobileMenu(true)
  };
  const handleMobileMenucls = () => {
    setIsMobileMenu(false)
  };


  //  for icon indexing
  const tasks = useSelector((store) => store.InputDataReducer.tasks)
  const [taskLength, setTaskLength] = useState(0)
  const [importantLength, setImportantLength] = useState(0)
  const [completedLength, setCompletedLength] = useState(0)

  // Use effect for index
  useEffect(() => {
    let task = tasks.filter((item) => {
      return item.completed === false
    })

    setTaskLength(task.length)

    let importantTask = tasks.filter((item) => {
      return item.important === true && item.completed === false
    })

    setImportantLength(importantTask.length)

    let completedTask = tasks.filter((item) => {
      return item.completed === true
    })

    setCompletedLength(completedTask.length)


  })
  useEffect(() => {
    if (width > 900) {
      handleMobileMenucls();
    }
  })

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     // anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={false}
  //     onClose={handleMobileMenucls}
  //     sx={{ zIndex: '1800' }}
  //   >
  //     {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
  //   </Menu>
  // );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenu}
      onClose={handleMobileMenucls}
      sx={{ zIndex: '1800' }}
    >

      {SideBarData.map((item, index) => {
        return (
          item.name === 'All Tasks' &&
          <Link to={item.link} key={index} style={{ color: 'black', textDecoration: 'none' }} >
            <MenuItem>
              <IconButton size="large" aria-label="All Tasks" color="inherit">
                <Badge key={index} badgeContent={tasks.length} color="error">
                  {item.icon}
                </Badge>  </IconButton>
              <p>All Tasks</p>
            </MenuItem></Link>)
      })}

      {SideBarData.map((item, index) => {
        return (
          item.name === 'Task' &&
          <Link to={item.link} key={index} style={{ color: 'black', textDecoration: 'none' }} ><MenuItem>
            <IconButton size="large" aria-label="Tasks" color="inherit">
              <Badge key={index} badgeContent={taskLength} color="error">
                {item.icon}</Badge></IconButton>
            <p>Task</p>
          </MenuItem></Link>
        )
      })}

      {SideBarData.map((item, index) => {
        return (
          item.name === 'Completed' &&
          <Link to={item.link} key={index} style={{ color: 'black', textDecoration: 'none' }} ><MenuItem>
            <IconButton
              size="large"
              aria-label="Completed"
              color="inherit"
            >
              <Badge key={index} badgeContent={completedLength} color="error">
                {item.icon}
              </Badge> </IconButton>
            <p>Completed</p>
          </MenuItem></Link>
        )
      })}


      {SideBarData.map((item, index) => {
        return (
          item.name === 'Important' &&
          <Link to={item.link} key={index} style={{ color: 'black', textDecoration: 'none' }} ><MenuItem>
            <IconButton
              size="large"
              aria-label="Important"
              color="inherit"
            >
              <Badge key={index} badgeContent={importantLength} color="error">
                {item.icon}
              </Badge> </IconButton>
            <p>Important</p>
          </MenuItem></Link>
        )
      })}


      {/* onClick={()=> #} for lougout */}
      <MenuItem onClick={isLoading ? null : doLogout} >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        {isLoading?<CircularLoading />  :<LockOutlinedIcon />}
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ zIndex: '1500' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            To Do 
            <button onClick={doLogout}>abncb</button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Search sx={{ minWidth: '40%', backgroundColor: 'rgb(244 246 255 / 60%)' }}>
              <SearchIconWrapper >
                <SearchIcon color="secondary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            {SideBarData.map((item, index) => {
              return (
                item.name === 'All Tasks' &&
                <Link to={item.link} key={index} style={{ color: 'white' }} ><BootstrapTooltip title="All Tasks"><IconButton size="large" aria-label="All Tasks" color="inherit">
                  <Badge badgeContent={tasks.length} color="error">
                    {item.icon}
                  </Badge>
                </IconButton></BootstrapTooltip></Link>)
            })}



            {SideBarData.map((item, index) => {
              return (
                item.name === 'Task' &&
                <Link to={item.link} key={index} style={{ color: 'white' }}><BootstrapTooltip title="Tasks"><IconButton size="large" aria-label="tasks" color="inherit">
                  <Badge badgeContent={taskLength} color="error">
                    {item.icon}
                  </Badge>
                </IconButton></BootstrapTooltip></Link>)
            })}


            {SideBarData.map((item, index) => {
              return (
                item.name === 'Completed' &&
                <Link to={item.link} key={index} style={{ color: 'white' }} ><BootstrapTooltip title="Completed"><IconButton
                  size="large"
                  aria-label="Completed"
                  color="inherit"
                >
                  <Badge key={index} badgeContent={completedLength} color="error">
                    {item.icon}
                  </Badge>
                </IconButton></BootstrapTooltip></Link>)
            })}


            {SideBarData.map((item, index) => {
              return (
                item.name === 'Important' &&
                <Link to={item.link} key={index} style={{ color: 'white' }} ><BootstrapTooltip title="Important"><IconButton
                  size="large"
                  aria-label="Important"
                  color="inherit"
                >
                  <Badge key={index} badgeContent={importantLength} color="error">
                    {item.icon}
                  </Badge>
                </IconButton></BootstrapTooltip></Link>)
            })}


            {/* <IconButton
              // size="medium"
              // aria-label="account of current user"
              // aria-controls={menuId}
              // aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              // color="inherit"
            >
              <LockOutlinedIcon /> <Box component="span">Log Out</Box>
            </IconButton> */}
            <LogButton isLoading= {isLoading} customStyle={{ textTransform: 'capitalize', ml: 2 }} onPress={doLogout} buttonIcon={<LockOutlinedIcon />} lable='Logout' />

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
