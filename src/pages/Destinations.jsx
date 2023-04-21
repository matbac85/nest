import React, { useState, useEffect } from 'react';
import CabinCard from '../components/CabinCard';

const Destinations = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])

    async function fetchData() {
        const response = await fetch('http://localhost:3000/cabins');
        const Data = await response.json();
        return Data;
    }


    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setData(result);
            setFilteredData(result)
        }
        getData();
    }, []);

    function displayAll() {
        setFilteredData(data)
    }

    function walloniaFilter() {
        const filter = data.filter((cabins) => cabins.region === "Région wallonne")

        setFilteredData(filter)
    }

    function dutchFilter() {
        const filter = data.filter((cabins) => cabins.region === "Région flamande")

        setFilteredData(filter)
    }

    function brusselsFilter() {
        const filter = data.filter((cabins) => cabins.region === "Région de Bruxelles-Capitale")

        setFilteredData(filter)
    }

    function lessThan50() {
        const filter = data.filter((cabins) => cabins.price_per_night < 50)

        setFilteredData(filter)
    }

    function lessThan100() {
        const filter = data.filter((cabins) => cabins.price_per_night < 100)

        setFilteredData(filter)
    }

    function lessThan150() {
        const filter = data.filter((cabins) => cabins.price_per_night < 150)

        setFilteredData(filter)
    }

    function maxGuest2() {
        const filter = data.filter((cabins) => cabins.max_guests >= 2)

        setFilteredData(filter)
    }

    function maxGuest4() {
        const filter = data.filter((cabins) => cabins.max_guests >= 4)

        setFilteredData(filter)
    }



    return (
        < div className='px-auto flex justify-center bg-backgroundColor bg-cover bg-center min-h-screen pt-24 pb-24' >
            <div className='w-2/3 f-full flex flex-col'>
                <h1 className='text-4xl font-bold mb-8'>Choisissez votre <span className='text-midGreen'> destination</span></h1>
                <div className='flex justify-center w-full mb-16'>
                    <ul className='flex gap-3 font-semibold'>
                        <button type='button' className='filters' onClick={displayAll}>Toutes les cabanes </button>
                        <button type='button' className='filters' onClick={walloniaFilter}>Région wallone</button>
                        <button type='button' className='filters' onClick={dutchFilter}>Région flamande</button>
                        <button type='button' className='filters' onClick={brusselsFilter}> Région bruxelloise</button>
                        <button type='button' className='filters' onClick={lessThan50}> -50€ la nuit</button>
                        <button type='button' className='filters' onClick={lessThan100}> -100€ la nuit</button>
                        <button type='button' className='filters' onClick={lessThan150}> -150€ la nuit</button>
                        <button type='button' className='filters' onClick={maxGuest2}> 2 pers.</button>
                        <button type='button' className='filters' onClick={maxGuest4}> 4 pers.</button>

                    </ul>
                </div>
                <div className='grid grid-cols-12 gap-x-24 gap-y-24 justify-between'>
                    {filteredData.length !== 0 ?
                        filteredData.map((cabin) =>
                            <CabinCard cabin={cabin} key={cabin.id} />
                        ) : <div className=' col-span-12 text-center'><h1 className='text-4xl'>Il n'y a pas de cabanes correspondant à ces critères</h1></div>
                    }

                </div>

            </div>
        </ div >

    )
};

export default Destinations;