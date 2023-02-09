import axios from "axios";

const headerConfig = {
    headers: {
        //Authorization: localStorage.getItem("token")
         authorization: `Bearer ${localStorage.getItem("token")}`
    }
}

export const AddNote = (addNoteObj) => {
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",addNoteObj, headerConfig)
    let response = axios.post("https://localhost:7102/api/Note/AddNewNotes",addNoteObj, headerConfig)
    return response
}

export const getNote = () => {
    // let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
     let response = axios.get("https://localhost:7102/api/Note/GetAllNotes",headerConfig)
    return response
}

export const archivedNotes = (archiveNoteObj) => {
    let responce = axios.put(`https://localhost:7102/api/Note/IsArchive?NoteId=${archiveNoteObj.NoteId}`, archiveNoteObj, headerConfig)
    //let responce = axios.put("https://localhost:7102/api/Note/IsArchive", archiveNoteObj, headerConfig)
    // let responce = axios.post("https://localhost:7102/api/Note/IsArchive", noteObj, headerConfig)
    console.log("Note added to archieve")
    return responce
}

export const updateColor = (updateNoteObj) => {
    let responce = axios.put(`https://localhost:7102/api/Note/updateColor?NoteId=${updateNoteObj.NoteId}&color=${updateNoteObj.color}`, updateNoteObj, headerConfig)
    return responce
}

export const trashNote = (trashNoteObj) => {
    //let responce = axios.delete(`https://localhost:7102/api/Note/DeleteNote?NoteId=${trashNoteObj.NoteId}`,trashNoteObj,headerConfig)
    //let responce = axios.delete("https://localhost:7102/api/Note/DeleteNote",trashNoteObj,headerConfig)
    let responce = axios.put(`https://localhost:7102/api/Note/IsTrash?NoteId=${trashNoteObj.NoteId}`,trashNoteObj, headerConfig)
    //let responce = axios.put("https://localhost:7102/api/Note/IsTrash".trashNoteObj, headerConfig)
    console.log("Note send to trash")
    return responce
}

export const updateNoteApi = (updateNoteObj) => {

    let responce = axios.put(`https://localhost:7102/api/Note/UpdateNotes?NoteId=${updateNoteObj.noteId}`,updateNoteObj, headerConfig)
    return responce
}