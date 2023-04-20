import React, { useState } from 'react';

const Carroussel = ({ images }) => {

    const [index, setIndex] = useState(0)

    function nextImg() {
        setIndex(index + 1)
        if (index > images.length - 2) {
            setIndex(0)
        }
        console.log(index)
    }

    function prevImg() {
        setIndex(index - 1)
        if (index < 1) {
            setIndex(4)
        }
        console.log(index)
    }
    return (


        <div id='modal ' className="flex justify-between w-full h-screen rounded-3xl overflow-hidden" style={{ height: "65vh" }}>
            <button type='button' aria-label='précedente' className='w-1/16 h-full px-8' onClick={prevImg}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" fill='#467971' /></svg></button>
            <img src={images[index]} alt="" className=' object-cover rounded-3xl' />
            <button type="button" aria-label='Suivante' className=' w-3/16 h-full px-8 ' onClick={nextImg}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" fill='#467971' /></svg></button>
        </div>

    )
};

export default Carroussel;