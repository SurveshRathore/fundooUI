import { Button, Paper } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import './TakeNoteTwo.css'
import React from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { InputBase } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { useState } from "react";
import { AddNote } from "../../services/dataService";
import ColorPopper from "../colorPopper/ColorPopper";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    takeNoteTwo: {
        display: 'flex',
        height: '25vh',
        width: '45vw',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid gray',
        borderRadius: '4px',
        marginLeft: '30%',
        
    },

    mainContent:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80%',
        width: '95%',
    },

    titlebox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '15%',
        width: '100%',
        
    },

    textbox: {
        display: 'flex',
        height: '70%',
        width: '100%',
        alignItems: 'center',

    },

    icons: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textboxIcon: {
        width: '65%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    closeBtn: {
        width: '30%',
        height: '100%',
        position: 'relative',
        left: '9.5%',
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        titlebox: {
            marginTop: '0px',
            height: '20%'
        },
        textbox: {
            height: '65% !important',
            width: '100%',
        },
        takeNoteTwo: {
            width: '78vw',
            height: '27vh',
            position: 'relative',
            top: '-13px',

        },

        icons: {
            display: 'flex',
            flexDirection: 'row-wrap',
            marginTop: '10px',
            
        },

        textboxIcon: {
            width: '65%',
            justifyContent: 'flex-start'
        },

        
    },
    '@media only screen and (min-width: 480px) and (max-width: 768px)': {
        takeNoteTwo: {
            height: '20vh',
            width: '70vw',
            position: 'relative',
            top: "25px"

        },
    },
    '@media only screen and (min-width: 789px) and (max-width: 1024px)': {
        takeNoteTwo: {
            height: '20vh',
            width: '60vw',
            position: 'relative',
            top: "30px",

        },
    }

})

function TakeNoteTwo(props) {

    const classes = useStyles();

    const [data, setData] = useState({ noteTitle: '', noteDesciption: '', noteColor: '', noteIsArchive: false, noteIsPin: false, noteIsTrash: false, noteImage: '' })
    //const[data, setData] = useState( {title: '', description: '', color:'', isArchived:false, isPined:false,isDeleted:false})

    const getTitle = (e) => {
        setData(prevState => ({
            ...prevState,
            noteTitle: e.target.value
        }))

    }

    const getDescription = (e) => {
        setData(prevState => ({
            ...prevState,
            noteDesciption: e.target.value
        }))
    }

    const submitData = () => {

        AddNote(data)
            .then((response) => {
                console.log(response)
                props.autoRefresh()
            }).catch((error) => {
                console.log(error)
            })
        props.listenToNoteTwo()
    }

    const listenToColor = (color) => {
        setData(prevState => ({
            ...prevState,
            noteColor: color
        }))
    }

    const archivedNote = () => {
        setData(prevState => ({
            ...prevState,
            noteIsArchive: true
        }))
        console.log("Note is added to Archived")
    }

    const pinnedNote = () => {
        setData(prevState => ({
            ...prevState,
            isPined: true
        }))
        console.log("Note is pinned")
    }

    return (
        <Paper elevation={4} className={classes.takeNoteTwo} style={{ backgroundColor: data.noteColor }}>
            <div className={classes.mainContent}>
                <div className={classes.titlebox}>
                    <InputBase id='textField' onChange={getTitle} type="text" placeholder='Title' />
                    <PushPinOutlinedIcon onClick={pinnedNote} />
                    {/* <TextField id="outlined-basic" placeholder="Title" size="small" fullWidth /> */}

                </div>

                <div className={classes.textbox}>
                    <InputBase id='textField' onChange={getDescription} type="text" placeholder='Take a note...' />
                    {/* <TextField id="outlined-basic"  variant="standard" placeholder="Take a note..." size="small" fullWidth /> */}
                </div>
                <div className={classes.icons}>
                <div className={classes.textboxIcon}>
                    <AddAlertOutlinedIcon />
                    <PersonAddAlt1OutlinedIcon />
                    {/* <ColorLensOutlinedIcon /> */}
                    <ColorPopper action="create" listenToColor={listenToColor} />
                    <ImageOutlinedIcon />
                    <ArchiveOutlinedIcon onClick={archivedNote} />
                    <MoreVertOutlinedIcon />
                    <UndoOutlinedIcon />
                    <RedoOutlinedIcon />
                </div>
                <div className={classes.closeBtn}>
                <Button variant="text" size="small" style={{ textTransform: "none", fontSize: "14px", color: "black", fontWeight: "600", fontFamily: '"Google Sans",Roboto,Arial,sans-serif', marginRight: "45px" }} onClick={submitData}>Close</Button>
                    {/* <Button variant="text"  onClick={submitData}>Close</Button> */}
                </div>
                </div>
            </div>
        </Paper>
    )


}

export default TakeNoteTwo