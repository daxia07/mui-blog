import React from "react"
import clsx from "clsx"
import _ from "lodash"
import { makeStyles, useTheme, fade } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import PropTypes from "prop-types"
import { capitalize } from "../utils/stringUtils"
import { CATEGORIES, PAGES, OTHERLINKS } from "../assets/constants"
import CodeIcon from "@material-ui/icons/Code"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import StorageIcon from "@material-ui/icons/Storage"
import RestaurantIcon from "@material-ui/icons/Restaurant"
import BusinessIcon from "@material-ui/icons/Business"
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff"
import InfoIcon from "@material-ui/icons/Info"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import DesktopMacIcon from "@material-ui/icons/DesktopMac"
import Link from "../components/Link"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import SearchBar from "../components/SearchBar"


const catIcons = [
  <CodeIcon/>, <AttachMoneyIcon/>, <StorageIcon/>, <RestaurantIcon/>,
  <BusinessIcon/>, <FlightTakeoffIcon/>,
]

const pageIcons = [
  <LibraryBooksIcon/>, <DesktopMacIcon/>, <InfoIcon/>,
]

const linkIcons = [
  <SubscriptionsIcon/>, <AccountCircleIcon/>,
]

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: `90%`,
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      width: `70%`,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}))

const AppTopBar = ({ siteTitle, main }) => {
  const title = siteTitle.replace("-", " ")
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            {capitalize(title)}
          </Typography>
          <SearchBar/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {_.zip(CATEGORIES, catIcons).map((ele, index) => (
            <ListItem button key={ele[0]}>
              <ListItemIcon>
                {ele[1]}
              </ListItemIcon>
              <Link to={`/category/${ele[0].toLowerCase()}/`} style={{ color: `black` }}>
                <ListItemText primary={ele[0]}/>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {_.zip(PAGES, pageIcons).map((ele, index) => (
            <ListItem button key={ele[0]}>
              <ListItemIcon>
                {ele[1]}
              </ListItemIcon>
              <Link to={`/${ele[0].toLowerCase()}/`} style={{ color: `black` }}>
                <ListItemText primary={ele[0]}/>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {_.zip(OTHERLINKS, linkIcons).map((ele, index) => (
            <ListItem button key={ele[0]}>
              <ListItemIcon>
                {ele[1]}
              </ListItemIcon>
              <Link to={`/${ele[0].toLowerCase()}/`} style={{ color: `black` }}>
                <ListItemText primary={ele[0]}/>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}/>
        {main}
      </main>
    </div>
  )
}

AppTopBar.propTypes = {
  siteTitle: PropTypes.string,
}

AppTopBar.defaultProps = {
  siteTitle: ``,
}

export default AppTopBar


