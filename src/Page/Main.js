import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from "./Dashboard";

import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import BarChartIcon from "@material-ui/icons/BarChart";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function Main({match, location, histroy}) {
    const classes = useStyles();
    const notify = () => toast("Wow so easy !");

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ToastContainer/>
            <CssBaseline/>
            <AppBar
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
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Cloud Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button key={'Dash Board'}>
                        <ListItemIcon>
                            <BarChartIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Dash Board'}/>
                    </ListItem>
                    <ListItem button key={'Add Portfolio'}>
                        <ListItemIcon>
                            <AddBoxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Add Portfolio'}/>
                    </ListItem>
                    <ListItem button key={'Notification'}>
                        <ListItemIcon>
                            <NotificationsActiveIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Notification'}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button key={'Exit'}>
                        <ListItemIcon>
                            <ExitToAppIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Exit'}/>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content} style={{marginTop: '60px'}}>
                <Router>

                    <Switch>
                        <Route path={`/dashboard`} exact component={Dashboard}/>
                    </Switch>

                </Router>
            </main>

        </div>
    )
}

