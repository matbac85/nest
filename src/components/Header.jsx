import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Search, User, ArrowExpand } from './Iconssvg';
import FormLogin from './FormLogin';
import FormRegistration from './FormRegistration';
import AuthContext from '../contexts/AuthContext';
import FormLogOut from './FormLogOut';

const Header = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(false);
  const [isFormLogOutVisible, setIsFormLogOutVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoginIconClick = () => {
    if (currentUser) {
      setIsFormLogOutVisible(!isFormLogOutVisible);
    } else {
      setIsLoginFormVisible(!isLoginFormVisible);
    }
    setIsRegistrationFormVisible(false);
  };

  const handleRegistrationIconClick = () => {
    setIsRegistrationFormVisible(!isRegistrationFormVisible);
    setIsLoginFormVisible(false);
  };

  const loggedInIcon = (user) =>
    `${user.user_metadata.first_name[0]}${user.user_metadata.last_name[0]}`;

  return (
    <header className="flex flex-row items-center justify-between h-24 px-20 bg-white border-b-2 z-1 border-beige absolu">
      <div className="w-auto h-4/5">
        <img
          src="/nest/logo/logo-nest.svg"
          alt="Logo"
          className="w-auto h-full text-slate-100"
        />
      </div>
      <nav className="flex flex-row justify-between">
        <ul className="flex flex-row items-center gap-x-20">
          <li className="text-xl font-light text-midGreen">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'underline-nav')}
              to="/">
              Accueil
            </NavLink>
          </li>

          <li className="text-xl font-light text-midGreen">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'underline-nav')}
              to="/destinations">
              Destinations
            </NavLink>
          </li>

          <li className="text-xl font-light text-midGreen">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'underline-nav')}
              to="/proposez">
              Proposez votre cabane
            </NavLink>
          </li>

          <li className="flex flex-row items-center pr-1 border-2 text-midGreen border-midGreen rounded-3xl">
            <input
              type="text"
              placeholder="Recherche"
              className="px-4 m-0 bg-transparent border-0 focus:ring-0 rounded-3xl"
            />
            <Search />
          </li>

          <li className="text-midGreen border-midGreen border-2 rounded-3xl py-0.5 px-1.5 relative">
            <button
              className="flex items-center justify-center"
              type="button"
              onClick={handleLoginIconClick}>
              {currentUser ? (
                <div className="flex items-center justify-center w-8 h-8 text-white border-2 rounded-full border-midGreen bg-lightGreen">
                  {loggedInIcon(currentUser)}
                </div>
              ) : (
                <User />
              )}
              <ArrowExpand
                toggleCallback={handleLoginIconClick}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
              />
            </button>
          </li>
        </ul>
      </nav>
      {currentUser ? (
        <FormLogOut
          setVisible={setIsFormLogOutVisible}
          visible={isFormLogOutVisible}
          setIsExpanded={setIsExpanded}
        />
      ) : (
        <FormLogin
          handleClick={handleRegistrationIconClick}
          visible={isLoginFormVisible}
          setVisible={setIsLoginFormVisible}
          setIsExpanded={setIsExpanded}
        />
      )}
      <FormRegistration
        handleClick={handleRegistrationIconClick}
        visible={isRegistrationFormVisible}
        setIsExpanded={setIsExpanded}
      />
    </header>
  );
};
export default Header;
