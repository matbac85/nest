import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Search, User, ArrowExpand } from './Iconssvg';
import FormLogin from './FormLogin';
import FormRegistration from './FormRegistration';
import AuthContext from '../contexts/AuthContext';

const Header = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(false);

  const handleLoginIconClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
    setIsRegistrationFormVisible(false);
  };

  const handleRegistrationIconClick = () => {
    setIsRegistrationFormVisible(!isRegistrationFormVisible);
    setIsLoginFormVisible(false);
  };

  const loggedInIcon = (user) => `${user.first_name[0]}${user.name[0]}`.toUpperCase()
  

  return (
        <header className="z-1 h-24 flex flex-row justify-between items-center bg-white px-20 border-b-2 border-beige absolu">
          <div className="h-4/5 w-auto">
            <img src="../public/logo/logo-nest.svg" alt="Logo" className="h-full w-auto text-slate-100"/>
          </div>
          <nav className='flex flex-row justify-between'>
                <ul className="flex flex-row items-center gap-x-20">
                
                <li className="text-midGreen text-xl font-light"><NavLink className={({isActive}) => (isActive ? 'active' : 'underline-nav')} to="/">Accueil</NavLink></li>
                
                <li className="text-midGreen text-xl font-light"><NavLink className={({isActive}) => (isActive ? 'active' : 'underline-nav')} to="/destinations">Destinations</NavLink></li>
                
                <li className="text-midGreen text-xl font-light"><NavLink className={({isActive}) => (isActive ? 'active' : 'underline-nav')} to="/proposez">Proposez votre cabane</NavLink></li>
                
                <li className="flex flex-row items-center text-midGreen border-midGreen border-2 rounded-3xl pr-1"><input type="text" placeholder="Recherche" className="focus:ring-0 border-0 px-4 m-0 rounded-3xl bg-transparent"/><Search /></li>
                
                <li className= "text-midGreen border-midGreen border-2 rounded-3xl py-0.5 px-1.5 relative" >
                  <button className="flex items-center justify-center" type='button' onClick={handleLoginIconClick}>
                  {currentUser
                    ? <div className='border-midGreen border-2 rounded-full w-8 h-8 flex items-center justify-center'>{loggedInIcon(currentUser)}</div>
                    : <User />
                  }
                    <ArrowExpand loginVisible={isLoginFormVisible} registrationVisible={isRegistrationFormVisible}/>
                  </button>
                </li>

              </ul>
          </nav>
          <FormLogin handleClick={handleRegistrationIconClick} visible={isLoginFormVisible} setVisible={setIsLoginFormVisible}/>
          <FormRegistration handleClick={handleRegistrationIconClick} visible={isRegistrationFormVisible}/>
        </header>
  )
}
export default Header;