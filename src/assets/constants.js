import React from "react"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
// import StorageIcon from "@material-ui/icons/Storage"
import RestaurantIcon from "@material-ui/icons/Restaurant"
// import BusinessIcon from "@material-ui/icons/Business"
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff"
import InfoIcon from "@material-ui/icons/Info"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
// import DesktopMacIcon from "@material-ui/icons/DesktopMac"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CodeIcon from "@material-ui/icons/Code"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Link from "../components/Link"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import LogoutBtn from "../components/LogoutBtn"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import SettingsIcon from "@material-ui/icons/Settings"
import NoteIcon from "@material-ui/icons/Note"
import CommentIcon from "@material-ui/icons/Comment"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

export const CAT_BTNS = {
  "Development": { icon: <CodeIcon/> },
  "Investment": { icon: <AttachMoneyIcon/> },
  // "Data": <StorageIcon/>,
  "Cooking": { icon: <RestaurantIcon/> },
  // "Business": <BusinessIcon/>,
  "Travel": { icon: <FlightTakeoffIcon/> },
}

export const PAGES_BTNS = {
  "Portfolio": { icon: <LibraryBooksIcon/> },
  // "Playground": <DesktopMacIcon/>,
  "About": { icon: <InfoIcon/> },
}

export const OTHER_BTNS = {
  "Subscribe": { icon: <SubscriptionsIcon/> },
}

export const LOGIN_BTN = {
  "Account": { icon: <AccountCircleIcon/> },
}

export const LOGOUT_BTN = {
  "Logout": { icon: <LogoutBtn/> },
  "prefix": "/",
}

export const makeLinkItem = (name, prefix = "/") =>
  <Link to={`/${prefix}/${name.toLowerCase()}/`} style={{ color: `black` }}>
    <ListItemText primary={name}/>
  </Link>


export const ListRenderer = (items, icon = true) => (
  <List>
    {items.map((item, index) =>
      <ListItem button key={index}>
        {icon &&
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        }
        {item.comp}
      </ListItem>)
    }
  </List>
)

export const accountNav = [
  {
    name: "Home",
    icon: <HomeRoundedIcon/>,
    comp:
      <Link to={`/account/`} style={{ color: `black` }}>
        <ListItemText primary={"Home"}/>
      </Link>,
  },
  {
    name: "Posts",
    icon: <NoteIcon/>,
    comp: makeLinkItem("Posts", "account"),
  },
  {
    name: "Comments",
    icon: <CommentIcon/>,
    comp: makeLinkItem("Comments", "account"),
  },
  {
    name: "Profile",
    icon: <AssignmentIndIcon/>,
    comp: makeLinkItem("Profile", "account"),
  },
  {
    name: "Setting",
    icon: <SettingsIcon/>,
    comp: makeLinkItem("Setting", "account"),
  },
  {
    name: "Logout",
    icon: <ExitToAppIcon/>,
    comp: <LogoutBtn/>,
  },
]

const defaultItems = { ...CAT_BTNS, ...PAGES_BTNS }

Object.keys(defaultItems).forEach((key, index) => {
  defaultItems[key].name = key
  defaultItems[key].comp = makeLinkItem(key)
})

export const defaultNavItems = Object.values(defaultItems)
