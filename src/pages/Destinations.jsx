import React from 'react';

const Destinations = () => (

    <div className='px-auto flex flex-col bg-[url("../../public/illus/destinations_bg.svg")] bg-cover bg-center h-screen'>
        <h1 className='text-4xl mb-8'>Choisissez votre destination</h1>
        <div className='flex justify-between '>
            <ul className='flex gap-2 text-sm font-semibold'>
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
    </div>

);

export default Destinations;