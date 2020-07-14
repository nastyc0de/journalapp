import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar/>
            <div className="notes__content">
                <input 
                    type="text" 
                    className="notes__title-input"
                    placeholder="algun titulo"
                />
                <textarea  
                    name="" 
                    className="notes__textarea"
                    placeholder="escribe algo"
                >
                </textarea>
                <div className="notes__image">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fp7HRiw3.jpg&f=1&nofb=1" alt="algo"/>
                </div>


            </div>
        </div>
    )
}
