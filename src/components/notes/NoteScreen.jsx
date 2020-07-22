import React from 'react';
import { NotesAppBar } from './NotesAppBar';
import {useSelector, useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { useRef } from 'react';
import { activeNote } from '../../actions/notes';
export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active:note} = useSelector(state => state.notes);
    const [state, handleInputChange, reset] = useForm(note);
    const {body, title} = state;

    const activeId = useRef(note.id);
    
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(state.id,{...state} ) )
    }, [state, dispatch])

    return (
        <div className='notes__main-content'>
            <NotesAppBar/>
            <div className="notes__content">
                <input 
                    type="text" 
                    className="notes__title-input"
                    placeholder="algun titulo"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea  
                    className="notes__textarea"
                    placeholder="escribe algo"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>
                {
                    (note.url)
                    &&
                    (<div className="notes__image">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fp7HRiw3.jpg&f=1&nofb=1" alt="algo"/>
                    </div>)
                }

            </div>
        </div>
    )
}
