import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  FolderShared as FolderSharedIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  AccountCircle as AccountCircleIcon,
  PhonelinkSetup as PhonelinkSetupIcon,
  CardTravel as CardTravelIcon,
  Assignment as AssignmentIcon,
} from "@material-ui/icons";
import useStyles from "./styles";
import { Avatar, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

interface DrawerItemType {
  text: string;
  icon: React.ReactNode;
}

const drawerItems: Array<DrawerItemType> = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    text: "Reports",
    icon: <AssignmentIcon />,
  },
  {
    text: "Employees",
    icon: <AccountCircleIcon />,
  },
  {
    text: "Projects",
    icon: <FolderIcon />,
  },
  {
    text: "Customers",
    icon: <FolderSharedIcon />,
  },
  {
    text: "Products",
    icon: <CardTravelIcon />,
  },
  {
    text: "App Builder",
    icon: <PhonelinkSetupIcon />,
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
  },
  {
    text: "Log out",
    icon: <ExitToAppIcon />,
  },
];

export default function DrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerHeader = (
    <div className={classes.drawerHeader}>
      <Box>
        <Avatar
          className={classes.avatar}
          alt="Remy Sharp"
          src="data:image/jpeg;base64,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"
        />
        <Typography variant="h6">Kent C.Dodds</Typography>
        <Typography variant="body1">Software Engineer</Typography>
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Simple Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        // variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerClose}
      >
        {drawerHeader}
        <Divider />
        <List>
          {drawerItems.map((item, index) => (
            <Link
              className={classes.link}
              key={item.text}
              to={item.text.toLowerCase()}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
