
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const FormLogOut = ({visible, setVisible, setIsExpanded}) => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const navigate = useNavigate()
    
    const logOut = async () => {
        setIsExpanded(false)      
        localStorage.clear()
        setCurrentUser(null)
        setVisible(false)
        const { error } = await supabase.auth.signOut()

    }

    const navigateAccount = () => {
        setVisible(false)
        setIsExpanded(false)
        navigate("/utilisateur")
    }

return(visible && <div className='z-50 flex flex-col bg-formBackground w-72 absolute top-20 right-0 p-8 rounded-xl border-2 border-midGreen mr-20 gap-4'>
    <button type="button" className='hover:bg-darkGreen cursor-pointer bg-midGreen text-white rounded-lg font-medium py-3 mb-3 text-center w-full' onClick={navigateAccount}>Compte</button>
    <button type="button" className='hover:bg-darkGreen cursor-pointer bg-midGreen text-white rounded-lg font-medium py-3 text-center w-full' onClick={logOut}>Se déconnecter</button>
</div>)
}
export default FormLogOut