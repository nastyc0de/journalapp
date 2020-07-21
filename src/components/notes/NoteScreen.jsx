import React from 'react';
import { NotesAppBar } from './NotesAppBar';
import {useSelector} from 'react-redux';
import { useForm } from '../../hooks/useForm';
export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes);
    const [state, handleInputChange] = useForm(note);

    const {body, title} = state;
    return (
        <div className='notes__main-content'>
            <NotesAppBar/>
            <div className="notes__content">
                <input 
                    type="text" 
                    className="notes__title-input"
                    placeholder="algun titulo"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea  
                    name="" 
                    className="notes__textarea"
                    placeholder="escribe algo"
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
