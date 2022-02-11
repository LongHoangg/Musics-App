import React, { useState } from 'react'

export default function SongControl({ isPlaying, setIsPlaying, nextSongClick, prevSongClick }) {
    const handleNextSong = ()=>{
        nextSongClick();
    }
    
    const handlePrevSong = ()=>{
        prevSongClick();
    }

    const [btn, setBtn] = useState('Play');

    const handlePlaySong = ()=>{
        setIsPlaying(!isPlaying);
        if(isPlaying === false){ 
            setBtn('Play')
        }else{
            setBtn('Pause')
        }
    }

    return (
        <div>
            <button onClick={handlePrevSong}>Previous</button>
            <button onClick={handlePlaySong}>{btn}</button>
            <button onClick={handleNextSong}>Next</button>
        </div>
    )
}
