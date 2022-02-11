import React from 'react'
import SongControl from './SongControl'
import SongDetails from './SongDetails'
import { useState, useRef, useEffect } from 'react'

export default function Songs({ nextSongIndex, currentSongIndex, songs, setCurrentSongIndex }) {

  const audioEl = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  })

  const nextSongClick = () => {
    setCurrentSongIndex(() => {
      let temp = currentSongIndex;
      temp++;

      if (temp > songs.length - 1) {
        return temp = 0;
      }
      return temp;
    })
  }

  const prevSongClick = () =>{
    setCurrentSongIndex(()=>{
      let temp = currentSongIndex;
      temp--;
      
      if(temp < 0){
        return temp = 4;
      }
      return temp
    })
  }

return (
  <>
    <audio ref={audioEl} src={songs[currentSongIndex].song_src}></audio>
    <h2>Playing now:</h2>
    <SongDetails currentSongs={songs[currentSongIndex]} />
    <SongControl isPlaying={isPlaying} nextSongClick={nextSongClick} setIsPlaying={setIsPlaying}  prevSongClick={prevSongClick}    />
    <p><strong>Next Song: </strong>{songs[nextSongIndex].name} - {songs[nextSongIndex].artis}</p>

  </>
)

}