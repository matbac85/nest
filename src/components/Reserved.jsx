import React from 'react';
import { NavLink } from 'react-router-dom';

const Reserved = ({ data, user, reservation }) => (
    <div className='flex flex-col items-center pt-16' >
        <h1 className='text-3xl  mb-4'>Félicitations {user.first_name} !</h1>
        <p className=' text-md mb-8'>Votre réservation pour {data.name} à bien été enregistrée.</p>
        <p className='mb-4'>Votre récaputilatif:</p>
        <section className="w-fit h-fit bg-white border-2 border-midGreen rounded-2xl shadow-lg shadow-darkGreen/50 p-5 mb-8">
            <div className="flex mb-7">
                <img src={data && data.images && data.images[0]} alt="" className="h-28 rounded-lg" />
                <div className="pl-3">
                    <h3 className="text-lg font-bold">{data.name}</h3>
                    <p>{data.region}</p>
                    <p>{data.commune}</p>
                </div>
            </div>
            <div className="flex justify-between pb-3">
                <p>Dates</p>
                <p>Du {reservation.start_date} au {reservation.end_date}</p>
            </div>
            <div className="flex justify-between pb-3">
                <p>Nombre de voyageurs</p>
                <p>{reservation.guests}</p>
            </div>
            <div className="flex justify-between pb-3">
                <p>Nombre de nuits</p>
                <p>{reservation.nights} nuits</p>
            </div>
            <div className="flex justify-between pt-5 pb-2 border-t-2 border-beige font-medium">
                <p>Prix total payé</p>
                <p>{reservation.price}€</p>
            </div>
        </section>

        <h1 className='text-2xl font-bold mt-4 '>L'équipe <span className="text-midGreen">Nest</span> vous souhaite un séjour mémorable !</h1>
        <h2 className="text-4xl font-bold pl-2">See you <span className='text-midGreen font-extrabold'>Nest</span> time !</h2>
        <NavLink to='/'>
            <button type='button' className="bg-midGreen h-fit py-1 px-6 rounded-lg text-white hover:bg-darkGreen mt-8">Retour à l'accueil</button>
        </NavLink>
    </div>
);

export default Reserved;