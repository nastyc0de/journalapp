import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z1Wnq7gvZTonjxrqr5SQ-wHaHa%26pid%3DApi&f=1)'
                }}
            ></div>
                <div className="journal__entry-body">
                    <p className='journal__entry-title'>weqweqwe</p>
                    <p className='journal__entry-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>20</h4>
                </div>

            
        </div>
    )
}
