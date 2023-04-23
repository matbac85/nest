import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const UserInfo = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const loggedInIcon = (user) => `${user.first_name[0]}${user.name[0]}`.toUpperCase()

    return (
        <div className="w-3/12 flex flex-col items-center justify-start">
            <p className="w-24 h-24 bg-lightGreen rounded-full flex justify-center items-center text-3xl text-bold mb-4">
                {loggedInIcon(currentUser)}
            </p>
            <p className="text-lg font-bold mb-2">{currentUser.first_name} {currentUser.name}</p>
            <p className="text-lg">{currentUser.email}</p>
            <p className="text-lg">Membre depuis juillet 2010</p>
        </div>
    )
}

export default UserInfo