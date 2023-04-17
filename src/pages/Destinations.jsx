import React, { useState, useEffect } from 'react';
import CabinCard from '../components/CabinCard'


const Destinations = () => {

    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch('http://localhost:3000/cabins');
        const Data = await response.json();
        return Data;
    }
    console.log(data)

    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setData(result);
        }
        getData();
    }, []);

    return (
        < div className='px-auto flex justify-center bg-backgroundColor bg-cover bg-center h-full' >
            <div className='w-2/3 f-full flex flex-col'>
                <h1 className='text-4xl font-bold mb-8'>Choisissez votre <span className='text-midGreen'> destination</span></h1>
                <div className='flex justify-center w-full mb-16'>
                    <ul className='flex gap-3 font-semibold'>
                        <li className='filters'>Région wallone</li>
                        <li className='filters'>Région flamande</li>
                        <li className='filters'>Région bruxelloise</li>
                        <li className='filters'>-50€ la nuit</li>
                        <li className='filters'>-100€ la nuit</li>
                        <li className='filters'>-150€ la nuit</li>
                        <li className='filters'>2 pers.</li>
                        <li className='filters'>4 pers.</li>
                        <li className='filters'>6 pers.</li>
                        <li className='filters'>+6 pers.</li>
                    </ul>
                </div>
                <div className='flex flex-wrap gap-8 gap-y-28 justify-between'>
                    {data.map((cabin) =>
                        <CabinCard cabin={cabin} key={cabin.id} />
                    )}
                </div>
            </div>
        </ div>
    )
};

export default Destinations;