import React from 'react';


const CabinCard = ({ cabin }) => (
    <div className='card  overflow-hidden w-1/4'>
        <img src={cabin.images[0]} alt="" className='h-80  object-cover mb-4' />
        <div className='flex items-center justify-between p-4'>
            <div>
                <h2 className='text-xl font-bold'>{cabin.name}</h2>
                <p>{cabin.commune}</p>
            </div>
            <div className='text-midGreen'>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25" fill="#467971"><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg>
            </div>
        </div>
        <div className='p-4 flex justify-between items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" fill="#467971"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z" /></svg>

            <h2 className='text-xl text-black font-bold bg-lightGreen py-2 px-6 rounded-xl'>{cabin.price_per_night}€/nuit</h2>
        </div>
        <div />
    </div>
);

export default CabinCard;