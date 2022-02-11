import React from 'react'

export default function SongDetails({ currentSongs }) {
    return (
        <>
            <div>{currentSongs.name} - {currentSongs.artis}</div>
            <img src={currentSongs.image_src} alt='' />

        </>
    )
}
