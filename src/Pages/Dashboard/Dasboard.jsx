import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MiniDrawer from "../../components/miniDrawer/MiniDrawer";
import TakeNoteOne from "../../components/takeNoteOne/TakeNoteOne";
import TakeNoteThree from "../../components/takeNoteThree/TakeNoteThree";
import TakeNoteTwo from "../../components/takeNoteTwo/TakeNoteTwo";
import { getNote } from "../../services/dataService";

const useStyles = makeStyles({
    displayNoteList: {
        display: 'flex',
        width: '80vw',
        height: 'auto',
        position: 'relative',
        top: '60px',
        left: '16%',
        flexWrap: 'wrap',
        marginLeft: '20px'
    },
    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        displayNoteList: {
            display: 'flex',
            flexDirection: 'column',
            width: '95%'
        }
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        displayNoteList: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%'
        }
    },
    '@media only screen and (min-width: 769px) and (max-width: 1024px)': {
        displayNoteList: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%'
        }
    }

})
function Dasboard() {
    const classes = useStyles();

    const [drawerToggle, setDrawerToggle] = useState(false)
    const [noteOption, setNoteOption] = useState("Notes")
    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])

    const listenToNoteOne = () => {
        setToggle(true)
    }

    const listenToNoteTwo = () => {
        setToggle(false)
    }

    const listenToDrawer = (options) => {
        setNoteOption(options)
    }

    const getAllNote = () => {
        getNote()
            .then((response) => {
                let filterNote = []
                if (noteOption === 'Notes') {
                    filterNote = response.data.data.filter((note) => {
                        if (note.noteIsArchive === false && note.noteIsTrash === false) {
                            return note
                        }
                    })
                }
                else if (noteOption === 'Archive') {
                    filterNote = response.data.data.filter((note) => {
                        if (note.noteIsArchive === true && note.noteIsTrash === false) {
                            return note
                        }
                    })

                }
                else if (noteOption === 'Bin') {
                    filterNote = response.data.data.filter((note) => {
                        if (note.noteIsArchive === false && note.noteIsTrash === true) {
                            return note
                        }
                    })

                }
                console.log(response)
                //setNoteList(response.data.data)
                setNoteList(filterNote)
            }).catch((error) => {
                console.log(error)
            })
    }



    useEffect(() => {
        getAllNote()
        // getNote()
        // .then((response)=>{
        //     console.log(response)
        //     setNoteList(response.data.data)
        // }).catch((error)=>{
        //     console.log(error)
        // })
    }, [noteOption])

    const autoRefresh = () => {
        getAllNote()
    }

    return (
        <div >
            <Header listenToHeader={listenToHeader} />
            <MiniDrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} />
            <div>
                {
                    toggle ? <TakeNoteTwo autoRefresh={autoRefresh} listenToNoteTwo={listenToNoteTwo} /> : <TakeNoteOne listenToNoteOne={listenToNoteOne} />
                }
                <div className={classes.displayNoteList}>
                    {
                        noteList.map((note) => (<TakeNoteThree note={note} autoRefresh={autoRefresh} />))
                    }
                </div>
                {/* <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap:'wrap',
                    width: '70vw',
                    // border: '1px solid gray',
                    position: 'relative',
                    left: '250px'

                }}>
                    {
                        noteList.map((note)=>(<TakeNoteThree note={note} autoRefresh={autoRefresh}/>))
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Dasboard