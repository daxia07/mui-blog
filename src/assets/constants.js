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

export const CAT_BTNS = {
  "Development": <CodeIcon/>,
  "Investment": <AttachMoneyIcon/>,
  // "Data": <StorageIcon/>,
  "Cooking": <RestaurantIcon/>,
  // "Business": <BusinessIcon/>,
  "Travel": <FlightTakeoffIcon/>,
  "prefix": "/",
}

export const PAGES_BTNS = {
  "Portfolio": <LibraryBooksIcon/>,
  // "Playground": <DesktopMacIcon/>,
  "About": <InfoIcon/>,
  "prefix": "/",
}

export const OTHER_BTNS = {
  "Subscribe": <SubscriptionsIcon/>,
  "prefix": "/",
}

export const LOGIN_BTN = {
  "Account": <AccountCircleIcon/>,
  "prefix": "/",

}

export const ListRenderer = (obj, icon = true) => (
  <List>
    {Object.keys(obj).map((key, index) => {
      if (key !== "prefix") {
        return (
          <ListItem button key={key}>
            {icon &&
            <ListItemIcon>
              {obj[key]}
            </ListItemIcon>
            }
            <Link to={`${obj.prefix}${key.toLowerCase()}/`} style={{ color: `black` }}>
              <ListItemText primary={key}/>
            </Link>
          </ListItem>)
      }
    })}
  </List>
)