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
        const filter = data.filter((cabins) => cabins.max_guests === 2)

        setFilteredData(filter)
    }

    function maxGuest4() {
        const filter = data.filter((cabins) => cabins.max_guests === 4)

        setFilteredData(filter)
    }



    return (
        < div className='px-auto flex justify-center bg-backgroundColor bg-cover bg-center h-full pt-24 pb-24' >
            <div className='w-2/3 f-full flex flex-col'>
                <h1 className='text-4xl font-bold mb-8'>Choisissez votre <span className='text-midGreen'> destination</span></h1>
                <div className='flex justify-center w-full mb-16'>
                    <ul className='flex gap-3 font-semibold'>
                        <li className='filters'><button type='button' onClick={displayAll}>Toute les cabanes </button> </li>
                        <li className='filters'><button type='button' onClick={walloniaFilter}>Région wallone</button></li>
                        <li className='filters'><button type='button' onClick={dutchFilter}>Région flamande</button></li>
                        <li className='filters'><button type='button' onClick={brusselsFilter}> Région bruxelloise</button></li>
                        <li className='filters'><button type='button' onClick={lessThan50}> -50€ la nuit</button></li>
                        <li className='filters'><button type='button' onClick={lessThan100}> -100€ la nuit</button></li>
                        <li className='filters'><button type='button' onClick={lessThan150}> -150€ la nuit</button></li>
                        <li className='filters'><button type='button' onClick={maxGuest2}> 2 pers.</button></li>
                        <li className='filters'><button type='button' onClick={maxGuest4}> 4 pers.</button></li>

                    </ul>
                </div>
                <div className='flex flex-wrap gap-2 gap-y-28 justify-between'>
                    {filteredData.map((cabin) =>
                        <CabinCard cabin={cabin} key={cabin.id} />
                    )}
                </div>

            </div>
        </ div>

    )
};

export default Destinations;