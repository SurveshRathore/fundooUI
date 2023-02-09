import React from "react";
import { InputBase, Paper } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
//import './TakeNoteOne.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    addNote: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45vw',
        height: '6vh',
        marginLeft: '35%',
        border: '1px solid gray',
        borderRadius: '10px'
    },

    textField: {
        border: 'none',
        outline: 'none',
        paddingLeft: '10px',
        width: '75%',
    },

    imgBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        width: '20%',
        alignItems: 'center',
        paddingRight: '10px'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        addNote: {
            display: 'flex',
            width: '80%',
            marginLeft: '20%'
        },

        imgBlock:{
            width: '30%',
            paddingRight: '10px'
        }

    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        addNote: {
            display: 'flex',
            width: '78%',
            marginLeft: '18%'
        },

    },
    '@media only screen and (min-width: 768px) and (max-width: 1024px)': {
        addNote: {
            display: 'flex',
            width: '70%',
            marginLeft: '18%'
        },

    }
})

function TakeNoteOne(props) {

    const classes = useStyles();

    const openTakeNoteTwo = () => {
        props.listenToNoteOne()
    }
    return (
        <Paper elevation={3} className={classes.addNote}>
            <InputBase className={classes.textField} onClick={openTakeNoteTwo} type="text" placeholder='Take a note...' />
            <div className={classes.imgBlock}>
                <CheckBoxOutlinedIcon />
                <BrushIcon />
                <ImageOutlinedIcon />
            </div>

            {/* <TextField id="outlined-basic" placeholder="Take a note..." size="small" fullWidth 
            InputProps={{
                endAdornment:<InputAdornment position='end'>
                    <CheckBoxOutlinedIcon />
                    <BrushIcon />
                 <ImageIcon/>
                </InputAdornment>,                
            }} 
            />  */}
        </Paper>
    )


}

export default TakeNoteOne