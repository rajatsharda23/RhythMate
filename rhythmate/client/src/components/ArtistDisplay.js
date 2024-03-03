const ArtistDisplay = (topArtist) => {

  return (
    <div className="relative flex flex-col font-readex">
        <div className='flex flex-row items-center p-[3%] m-[4%] '>1.
            <div className="pl-3 h-[30%] w-[30%]">
                <img src={topArtist?.artist_images[0]} className="rounded-lg shadow-lg shadow-green-300" />
            </div>
            <div className="flex flex-col pl-[10%]" >
                <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topArtist?.artist_urls[0], "_blank")} style={{ cursor: 'pointer' }}>{topArtist?.artist_name[0]}</div>
            </div>
        </div>

        <div className='flex flex-row items-center p-[3%] m-[4%]'>2.
            <div className="pl-3 h-[30%] w-[30%]">
                <img src={topArtist.artist_images[1]} className="rounded-lg shadow-lg shadow-green-300" />
            </div>
            <div className="flex flex-col pl-[10%]" >
                <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topArtist.artist_urls[1], "_blank")} style={{ cursor: 'pointer' }}>{topArtist.artist_name[1]}</div>
            </div>
        </div>

        <div className='flex flex-row items-center p-[3%] m-[4%]'>3.
            <div className="pl-3 h-[30%] w-[30%]">
                <img src={topArtist.artist_images[2]} className="rounded-lg shadow-lg shadow-green-300" />
            </div>
            <div className="flex flex-col pl-[10%]" >
                <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topArtist.artist_urls[2], "_blank")} style={{ cursor: 'pointer' }}>{topArtist.artist_name[2]}</div>
            </div>
        </div>

        <div className='flex flex-row items-center p-[3%] m-[4%]'>4.
            <div className="pl-3 h-[30%] w-[30%]">
                <img src={topArtist.artist_images[3]} className="rounded-lg shadow-lg shadow-green-300" />
            </div>
            <div className="flex flex-col pl-[10%]" >
                <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topArtist.artist_urls[3], "_blank")} style={{ cursor: 'pointer' }}>{topArtist.artist_name[3]}</div>
            </div>
        </div>

        <div className='flex flex-row items-center p-[3%] m-[4%]'>5.
            <div className="pl-3 h-[30%] w-[30%]">
                <img src={topArtist.artist_images[4]} className="rounded-lg shadow-lg shadow-green-300" />
            </div>
            <div className="flex flex-col pl-[10%]" >
                <div className="drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-green-300" onClick={()=> window.open(topArtist.artist_urls[4], "_blank")} style={{ cursor: 'pointer' }}>{topArtist.artist_name[4]}</div>
            </div>
        </div>

        

        
    </div>
  )
}

export default ArtistDisplay