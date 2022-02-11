import React from 'react'
import { useState, useEffect } from 'react'
import Songs from './Component/Songs';

export default function App() {

  const [songs] = useState([
    {
      name: 'Song 1',
      artis: 'Artis 1',
      image_src: './images/CatEmVaoTamTu.jpg',
      song_src: './music/ISAAC  CẤT EM VÀO TÂM TƯ  LYRICS VIDEO.mp3',
    },
    {
      name: 'Song 2',
      artis: 'Artis 2',
      image_src: './images/ChiMuonBenEmLucNay.jpg',
      song_src: './music/Chỉ Muốn Bên Em Lúc Này Freak D Lofi Ver  Jiki X ft Huy Vạc.mp3',
    },
    {
      name: 'Song 3',
      artis: 'Artis 3',
      image_src: './images/MinhAnhNoiNay.jpg',
      song_src: './music/Mình Anh Nơi Này Lofi Ver  Nit x Sing x Freak D_320kbps.mp3',
    },
    {
      name: 'Song 4',
      artis: 'Artis 4',
      image_src: './images/NeuLucTruocEmDungToi.jpg',
      song_src: './music/NẾU LÚC TRƯỚC EM ĐỪNG TỚI  KHẢI ĐĂNG THÁI THỊNH_320kbps.mp3',
    },
    {
      name: 'Song 5',
      artis: 'Artis 5',
      image_src: './images/NoAiDoLoiXinLoi2.jpg',
      song_src: './music/Nợ Ai Đó Lời Xin lỗi 2 Lofi Ver  Bozitt x Freak D_320kbps.mp3',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
      setNextSongIndex(()=>{
        if(currentSongIndex + 1 > songs.length -1){
          return 0;
        }else{
          return currentSongIndex + 1;
        };
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);

  return (
    <div>
      <Songs currentSongIndex={currentSongIndex} nextSongIndex={nextSongIndex} songs={songs} setCurrentSongIndex={setCurrentSongIndex}/>
    </div>
  )
}
