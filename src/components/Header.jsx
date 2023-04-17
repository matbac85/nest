import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, User } from './Iconssvg';

const Header = () => 
  (
    <header className="h-24 flex flex-row justify-between items-center bg-white px-20 border-b-2 border-beige sticky">
      <div className="h-4/5 w-auto">
        <img src="../public/logo/logo-nest.svg" alt="Logo" className="h-full w-auto text-slate-100"/>
      </div>
      <div className='flex flex-row justify-between'>
        <nav>
            <ul className="flex flex-row items-center gap-x-20">
            <li className="text-midGreen text-xl font-light"><NavLink to="/">Accueil</NavLink></li>
            <li className="text-midGreen text-xl font-light"><NavLink to="/destinations">Destinations</NavLink></li>
            <li className="text-midGreen text-xl font-light"><NavLink to="/proposez">Proposez votre cabane</NavLink></li>
            <li className="flex flex-row items-center text-midGreen border-midGreen border-2 rounded-3xl pr-1"><input type="text" placeholder="Recherche" className="px-4 m-0 rounded-3xl border-0 bg-transparent"/><Search /></li>
            <li className= "text-midGreen border-midGreen border-2 rounded-3xl py-0.5 pl-8 pr-1.5"><User /></li>
            </ul>
        </nav>
      </div>
    </header>
  )

export default Header;