import React from 'react';
import { NavLink } from 'react-router-dom';
import LikeButton from './LikeButton';


const CabinCard = ({ cabin, user }) => {

    function image(cabinId, id){
        return `https://keqametpuctibucnebxe.supabase.co/storage/v1/object/public/images/cabins/${cabinId}/${cabinId}-${id}.webp`;
    }

    return <div className='card col-span-4 overflow-hidden hover:scale-105 duration-75 hover:cursor-pointer' >
        <NavLink to={`/cabin/${cabin.id}`}>
            <img src={image(cabin.id, 1)} alt="" className='h-80 w-full object-cover mb-4' />
            <div className='flex  justify-between p-4'>
                <div>
                    <h2 className='text-xl font-bold'>{cabin.name}</h2>
                    <p>{cabin.commune}</p>
                </div>
                <div className='text-midGreen flex items-center'>
                    <h2 className='mr-1 font-medium text-xl '> {cabin.rating}</h2> <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25" fill="#467971"><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg>
                </div>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <LikeButton cabin={cabin} user={user} />

                <h2 className='text-xl text-black font-bold bg-lightGreen py-2 px-6 rounded-xl'>{cabin.price_per_night}€/nuit</h2>
            </div>
            <div />
        </NavLink>
    </div>
};

export default CabinCard;