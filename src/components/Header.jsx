import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowExpand, Search, User } from './Iconssvg';

const Header = () => 
  (
    <>
      <header className="h-24 flex flex-row justify-between items-center bg-white px-20 border-b-2 border-beige sticky">
        <div className="h-4/5 w-auto">
          <img src="../public/logo/logo-nest.svg" alt="Logo" className="h-full w-auto text-slate-100"/>
        </div>
        <nav className='flex flex-row justify-between'>
              <ul className="flex flex-row items-center gap-x-20">
              <li className="text-midGreen text-xl font-light"><NavLink className="underline-nav"to="/">Accueil</NavLink></li>
              <li className="text-midGreen text-xl font-light"><NavLink className="underline-nav" to="/destinations">Destinations</NavLink></li>
              <li className="text-midGreen text-xl font-light"><NavLink className="underline-nav" to="/proposez">Proposez votre cabane</NavLink></li>
              <li className="flex flex-row items-center text-midGreen border-midGreen border-2 rounded-3xl pr-1"><input type="text" placeholder="Recherche" className="focus:ring-0 border-0 px-4 m-0 rounded-3xl bg-transparent"/><Search /></li>
              <li className= "flex text-midGreen border-midGreen border-2 rounded-3xl py-0.5 px-1.5"><User /> <ArrowExpand /></li>
              </ul>
        </nav>
      </header>
      <div className='z-10'>
        <label htmlFor="">E-mail</label>
        <input type="text" className='focus:ring-0 border-0 px-4 m-0 rounded-l bg-transparent'/>
        <label htmlFor="">Mot de passe</label>
        <input type="text" className='focus:ring-0 border-0 px-4 m-0 rounded-l bg-transparent'/>
      </div>
    </>
  )

export default Header;