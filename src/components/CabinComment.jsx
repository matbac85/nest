import React, { useState, useEffect } from 'react';

const CabinComment = ({ comment }) => {

    const [data, setData] = useState([]);


    async function fetchData() {
        const response = await fetch(`http://localhost:3000/users/${comment.commenter_id}`);
        const Data = await response.json();
        return Data;
    }


    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setData(result);
        }
        getData();
    }, []);



    return (

        <div className='w-[45%]'>
            <div className='flex flex-col'>

                <div className='flex justify-between mb-4'>
                    <div className='flex gap-3'>
                        <div>
                            {data && data.first_name && data.name &&
                                < p className="w-12 h-12 bg-lightGreen rounded-full flex justify-center items-center text-xl text-bold mb-4">{data.first_name[0]}{data.name[0]}</p>
                            }
                        </div>
                        <div >
                            <h2 className='font-bold'>{data.first_name} {data.name}</h2>
                            <p className='text-sm'>{comment.time_stamp}</p>
                        </div>
                    </div>
                    <div className='text-midGreen flex items-center'>
                        <h2 className='mr-1 font-medium text-md '> {comment.rating}</h2> <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25" fill="#467971"><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg>
                    </div>
                </div>

                <p>{comment.comment}</p>
            </div>
        </div >
    )
};

export default CabinComment;