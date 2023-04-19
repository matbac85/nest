import React, { useState, useEffect } from 'react';
import CabinCard from '../components/CabinCard';

const Destinations = () => {

    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch('http://localhost:3000/cabins');
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

    function walloniaFilter(){
        const filteredData = data.filter((cabin)=> cabin.region==="Région wallone")
        setData(filteredData)
    }

    return (
        < div className='px-auto flex justify-center bg-backgroundColor bg-cover bg-center h-full mb-24' >
            <div className='w-2/3 f-full flex flex-col'>
                <h1 className='text-4xl font-bold mb-8'>Choisissez votre <span className='text-midGreen'> destination</span></h1>
                <div className='flex justify-center w-full mb-16'>
                    <ul className='flex gap-3 font-semibold'>
                        <li className='filters'>Toute les cabanes</li>
                        <li className='filters'><button type='button' onClick={walloniaFilter}>Région wallone</button></li>
                        <li className='filters'>Région flamande</li>
                        <li className='filters'>Région bruxelloise</li>
                        <li className='filters'>-50€ la nuit</li>
                        <li className='filters'>-100€ la nuit</li>
                        <li className='filters'>-150€ la nuit</li>
                        <li className='filters'>2 pers.</li>
                        <li className='filters'>4 pers.</li>
                        
                    </ul>
                </div>
                <div className='flex flex-wrap gap-6 gap-y-28 justify-between'>
                    {data.map((cabin) =>
                        <CabinCard cabin={cabin} key={cabin.id} />
                    )}
                </div>
            </div>
        </ div>

    )
};

export default Destinations;