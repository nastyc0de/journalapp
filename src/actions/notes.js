import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { types } from "../components/types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;
        
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));
    }
}

export const activeNote = (id, note) =>({
    type: types.noteActive,
    payload:{
        id,
        ...note
    }
});

export const addNewNote = (id, note) => ({
    type: types.noteAddNew,
    payload: {
        id, ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async(dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNote(notes));
    }
}

export const setNote = ( notes) =>({
    type:types.noteLoad,
    payload:notes
});
// react-journal

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;

        if (!note.url) {
            delete note.url;
        }

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, note));
        Swal.fire('Saved', note.title,'success');
    }
}
export const refreshNote = (id, note) => ({
    type: types.noteUpdate,
    payload: {
        id, 
        note:{
            id,
            ...note
        }
    }
});

export const startUploading = (file) => {
    return async(dispatch, getState) => {
        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Subiendo la imagen....',
            text:'Espere....',
            allowOutsideClick: false,
            onBeforeOpen: () =>{
                Swal.showLoading();
            }
        })
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        
        dispatch(startSaveNote(activeNote));
        Swal.close();

    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) =>({
    type: types.noteDelete,
    payload: id
})

export const noteLogout = () => ({
    type: types.noteLogoutClean
})    