import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type){
        
        case types.noteActive:
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.noteAddNew:
            return{
                ...state,
                notes:[
                    action.payload,
                    ...state.notes
                ]
            }
        case types.noteLoad:
            return{
                ...state,
                notes:[...action.payload]
            }
        case types.noteUpdate:
            return{
                ...state,
                notes:state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }
        case types.noteDelete:
            return{
                ...state,
                active: null,
                notes:state.notes.filter(
                    note => note.id !== action.payload)
                }
        case types.noteLogoutClean:
            return{
                ...state,
                active: null,
                notes: []
            }
        default:
            return state;
    }
}
