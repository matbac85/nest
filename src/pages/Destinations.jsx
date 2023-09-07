import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import CabinCard from '../components/CabinCard';
import AuthContext from "../contexts/AuthContext";
import {supabase} from '../helpers.js'

const Destinations = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [searchParams] = useSearchParams();
    const [activeIndex, setActiveIndex] = useState(1)
    const [currentUser, setCurrentUser] = useContext(AuthContext);

    

    async function fetchData() {
        //const response = await fetch('http://localhost:3000/cabins');
        //const Data = await response.json();

        let { data: cabins, error } = await supabase.from('cabins').select()
        console.log(cabins)
        return cabins
      //  return Data;
    }

    function locationFilter(cabins, location) {
        if ((location !== null) && (location !== "undefined")) {
            const filter = cabins.filter((cabin) => cabin.region.toLowerCase() === location);

            setFilteredData(filter)
            return filter
        }
        return cabins
    }




    function guestsFilter(cabins, maxGuests) {
        if ((maxGuests !== null) && (maxGuests !== "undefined")) {
            const filter = cabins.filter((cabin) => cabin.max_guests >= parseInt(maxGuests, 10));

            setFilteredData(filter)
            return filter
        }
        return cabins
    }

    useEffect(() => {
        async function getData() {
            let result = await fetchData();
            setData(result);
            setFilteredData(result)
        //    result = locationFilter(result, searchParams.get('location'));
        //    result = guestsFilter(result, searchParams.get('maxGuests'));
        }
        getData();
      }, [currentUser]);

    function displayAll() {
        setFilteredData(data)
        setActiveIndex(1)
    }

    function walloniaFilter() {
        const filter = data.filter((cabins) => cabins.region === "Région wallonne")
        setActiveIndex(2)
        setFilteredData(filter)
    }

    function dutchFilter() {
        const filter = data.filter((cabins) => cabins.region === "Région flamande")
        setActiveIndex(3)
        setFilteredData(filter)
    }

    function brusselsFilter() {
        const filter = data.filter((cabins) => cabins.region === "Région de Bruxelles-Capitale")
        setActiveIndex(4)
        setFilteredData(filter)
    }

    function lessThan50() {
        const filter = data.filter((cabins) => cabins.price_per_night < 50)
        setActiveIndex(5)
        setFilteredData(filter)
    }

    function lessThan100() {
        const filter = data.filter((cabins) => cabins.price_per_night < 100)
        setActiveIndex(6)
        setFilteredData(filter)
    }

    function lessThan150() {
        const filter = data.filter((cabins) => cabins.price_per_night < 150)
        setActiveIndex(7)
        setFilteredData(filter)
    }

    function maxGuest2() {
        const filter = data.filter((cabins) => cabins.max_guests >= 2)
        setActiveIndex(8)
        setFilteredData(filter)
    }

    function maxGuest4() {
        const filter = data.filter((cabins) => cabins.max_guests >= 4)
        setActiveIndex(9)
        setFilteredData(filter)
    }



    return (
        < div className='px-auto flex justify-center bg-backgroundColor bg-cover bg-center min-h-screen pt-24 pb-24' >
            <div className='w-2/3 f-full flex flex-col'>
                <h1 className='text-4xl font-bold mb-8'>Choisissez votre <span className='text-midGreen'> destination</span></h1>
                <div className='flex justify-center w-full mb-16'>
                    <ul className='flex gap-3 font-semibold'>
                        <button type='button' className={activeIndex !== 1 ? 'filters' : 'activeFilter'} onClick={displayAll}>Toutes les cabanes </button>
                        <button type='button' className={activeIndex !== 2 ? 'filters' : 'activeFilter'} onClick={walloniaFilter}>Région wallone</button>
                        <button type='button' className={activeIndex !== 3 ? 'filters' : 'activeFilter'} onClick={dutchFilter}>Région flamande</button>
                        <button type='button' className={activeIndex !== 4 ? 'filters' : 'activeFilter'} onClick={brusselsFilter}> Région bruxelloise</button>
                        <button type='button' className={activeIndex !== 5 ? 'filters' : 'activeFilter'} onClick={lessThan50}> -50€ la nuit</button>
                        <button type='button' className={activeIndex !== 6 ? 'filters' : 'activeFilter'} onClick={lessThan100}> -100€ la nuit</button>
                        <button type='button' className={activeIndex !== 7 ? 'filters' : 'activeFilter'} onClick={lessThan150}> -150€ la nuit</button>
                        <button type='button' className={activeIndex !== 8 ? 'filters' : 'activeFilter'} onClick={maxGuest2}> 2 pers.</button>
                        <button type='button' className={activeIndex !== 9 ? 'filters' : 'activeFilter'} onClick={maxGuest4}> 4 pers.</button>

                    </ul>
                </div>
                <div className='grid grid-cols-12 gap-x-24 gap-y-24 justify-between'>
                    {filteredData && filteredData.length !== 0 ?
                        filteredData.map((cabin) =>
                            <CabinCard cabin={cabin} key={cabin.id} user={currentUser} />
                        ) : <div className=' col-span-12 text-center'><h1 className='text-4xl'>Il n'y a pas de cabanes correspondant à ces critères</h1></div>
                    }

                </div>

            </div>
        </ div >

    )
};

export default Destinations;