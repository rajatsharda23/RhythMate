const SongDisplay = ({topSong}) => {

    // console.log('HUm', topSong)
    return (
      <div className="relative flex flex-col font-readex"> 

            <div className='flex flex-row items-center p-[3%] m-[4%] '>1.
                <div className="pl-3 h-[30%] w-[30%]">
                    <img src={topSong?.tracks_img[0][0].url} className="rounded-lg shadow-lg shadow-green-300" onClick={()=> window.open(topSong?.tracks_preview_url[0], "_blank")} style={{ cursor: 'pointer' }}/>
                </div>
                <div className="flex flex-col pl-[10%]" >
                    <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topSong?.tracks_urls[0], "_blank")} style={{ cursor: 'pointer' }}>{topSong?.tracks_name[0]}</div>
                </div>
            </div>

            <div className='flex flex-row items-center p-[3%] m-[4%] '>2.
                <div className="pl-3 h-[30%] w-[30%]">
                    <img src={topSong?.tracks_img[1][0].url} className="rounded-lg shadow-lg shadow-green-300" onClick={()=> window.open(topSong?.tracks_preview_url[1], "_blank")} style={{ cursor: 'pointer' }}/>
                </div>
                <div className="flex flex-col pl-[10%]" >
                    <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topSong?.tracks_urls[1], "_blank")} style={{ cursor: 'pointer' }}>{topSong?.tracks_name[1]}</div>
                </div>
            </div>

            <div className='flex flex-row items-center p-[3%] m-[4%] '>3.
                <div className="pl-3 h-[30%] w-[30%]">
                    <img src={topSong?.tracks_img[2][0].url} className="rounded-lg shadow-lg shadow-green-300" onClick={()=> window.open(topSong?.tracks_preview_url[2], "_blank")} style={{ cursor: 'pointer' }}/>
                </div>
                <div className="flex flex-col pl-[10%]" >
                    <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topSong?.tracks_urls[2], "_blank")} style={{ cursor: 'pointer' }}>{topSong?.tracks_name[2]}</div>
                </div>
            </div>

            <div className='flex flex-row items-center p-[3%] m-[4%] '>4.
                <div className="pl-3 h-[30%] w-[30%]">
                    <img src={topSong?.tracks_img[3][0].url} className="rounded-lg shadow-lg shadow-green-300" onClick={()=> window.open(topSong?.tracks_preview_url[3], "_blank")} style={{ cursor: 'pointer' }}/>
                </div>
                <div className="flex flex-col pl-[10%]" >
                    <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topSong?.tracks_urls[3], "_blank")} style={{ cursor: 'pointer' }}>{topSong?.tracks_name[3]}</div>
                </div>
            </div>

            <div className='flex flex-row items-center p-[3%] m-[4%] '>5.
                <div className="pl-3 h-[30%] w-[30%]">
                    <img src={topSong?.tracks_img[4][0].url} className="rounded-lg shadow-lg shadow-green-300" onClick={()=> window.open(topSong?.tracks_preview_url[4], "_blank")} style={{ cursor: 'pointer' }}/>
                </div>
                <div className="flex flex-col pl-[10%]" >
                    <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topSong?.tracks_urls[4], "_blank")} style={{ cursor: 'pointer' }}>{topSong?.tracks_name[4]}</div>
                </div>
            </div>

      </div>
    )
  }
  
  export default SongDisplay