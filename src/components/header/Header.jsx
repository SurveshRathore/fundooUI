import React from "react";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

//import './Header.css';
import { connect } from "react-redux";
import { makeStyles } from '@mui/styles';
import { InputBase } from "@mui/material";

const useStyles = makeStyles({
    headerBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '9vh',
        width: '100vw',
        border: '1px solid gray',
        position: 'fixed',
    },

    leftIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '90%',
        width: '18%',
    },

    menuIcon: {
        display: 'flex',
        alignItems: 'center',
        height: '80%',
        width: '20%',
        marginLeft: 10,
    },

    keepIcon: {
        display: 'flex',
        height: '80%',
        width: '25%',
    },

    keepText: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '24px',
        height: '80%',
        width: '40%',
    },

    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px',
        height: '75%',
        width: '52%',
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '15px',
        backgroundColor: 'lightgray',
    },

    textarea: {
        border: 'none',
        outline: 'none',
        height: '85%',
        width: '70%',
        paddingLeft: 10,
    },

    rightIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: '95%',
        width: '28%',
    },

    refreshIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        height: '90%',
        width: '10%',
    },

    listViewIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        height: '90%',
        width: '15%',
    },

    settingIcon:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '24px',
        height: '90%',
        width: '18%',
    },
    googleAppIcon:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        height: '90%',
        width: '13%',
    },

    userIcon:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        height: '90%',
        width: '18%',
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        searchBar: {
            display: 'none',   
        },

        leftIcon: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '90%',
            width: '40%',
        },
        rightIcon: {
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            height: '95%',
            width: '60%',
        },

        // menuIcon:{
        //     marginLeft:0,
        // }

    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        searchBar: {
            display: 'none',   
        },

        leftIcon: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '90%',
            width: '40%',
        },
        rightIcon: {
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            height: '95%',
            width: '60%',
        },
    },

})

function Header(props) {

    const classes = useStyles();

    const openDrawer = () => {
        props.listenToHeader()
    }

    return (
        <div className={classes.headerBlock}>
            <div className={classes.leftIcon}>
                <div className={classes.menuIcon}> <MenuSharpIcon onClick={openDrawer} /> </div>
                <div className={classes.keepIcon}><img src='./keepLogo.png' alt="keepLogo" /></div>
                <div className={classes.keepText}><span>{props.label}</span></div>
            </div>

            <div className={classes.searchBar}>
                <SearchOutlinedIcon />
                <InputBase className={classes.textarea} type="text" placeholder="Search"/>
            </div>

            <div className={classes.rightIcon}>
                <div className={classes.refreshIcon}> <RefreshOutlinedIcon /></div>
                <div className={classes.listViewIcon}> <ViewAgendaOutlinedIcon /></div>
                <div className={classes.settingIcon}><SettingsOutlinedIcon /></div>
                <div className={classes.googleAppIcon}> <AppsOutlinedIcon /></div>
                <div className={classes.userIcon}><AccountCircleOutlinedIcon /></div>
            </div>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        label: state.drawerReducer.label
    }
}

export default connect(mapStateToProps)(Header)