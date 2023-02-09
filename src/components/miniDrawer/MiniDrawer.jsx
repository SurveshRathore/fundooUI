import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { connect } from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop: 65,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 65,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 0.5px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});




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

function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const selectMenuOption = (menuName) => {
        props.listenToDrawer(menuName)
        props.dispatch({

            type: `${menuName}`
        })
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={props.drawerToggle}>

                {/* <Divider /> */}
                <List>

                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectMenuOption("Notes")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'

                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LightbulbOutlinedIcon />
                                {/* icons */}
                            </ListItemIcon>
                            <ListItemText primary="Notes" style={{ marginLeft: 30 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectMenuOption("Reminders")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                //justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <NotificationsNoneIcon />
                                {/* icons */}
                            </ListItemIcon>
                            <ListItemText primary="Reminders" style={{ marginLeft: 30 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectMenuOption("Edit")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                //justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <EditOutlinedIcon />
                                {/* icons */}
                            </ListItemIcon>
                            <ListItemText primary="Edit labels" style={{ marginLeft: 30 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectMenuOption("Archive")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                //justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <ArchiveOutlinedIcon />
                                {/* icons */}
                            </ListItemIcon>
                            <ListItemText primary="Archive" style={{ marginLeft: 30 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectMenuOption("Bin")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                //justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DeleteOutlineOutlinedIcon />
                                {/* icons */}
                            </ListItemIcon>
                            <ListItemText primary="Bin" style={{ marginLeft: 30 }} />
                        </ListItemButton>
                    </ListItem>

                </List>


            </Drawer>

        </Box>
    );
}



export default connect()(MiniDrawer) 