import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const UserInfo = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const loggedInIcon = (user) => `${user.user_metadata.first_name[0]}${user.user_metadata.last_name[0]}`.toUpperCase()
    return (
        currentUser && <div className="w-3/12 flex flex-col items-center justify-start">
            <p className="w-24 h-24 bg-lightGreen rounded-full flex justify-center items-center text-3xl text-bold mb-4">
                {loggedInIcon(currentUser)}
            </p>
            <p className="text-lg font-bold mb-2">{currentUser.user_metadata.first_name} {currentUser.user_metadata.last_name}</p>
            <p className="text-lg">{currentUser.email}</p>
            <p className="text-lg">membre depuis le {new Date(currentUser.created_at).toLocaleDateString()}</p>
        </div>
    )
}

export default UserInfo