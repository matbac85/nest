import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserInfo from "../components/UserInfo"
import UserSections from "../components/UserSection"
import AuthContext from "../contexts/AuthContext";

const User = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
            if(!currentUser){
                navigate('/')
            }
    })
    
        return (currentUser && <div className="bg-cover bg-top home-background bg-[url('/public/illus/user_profile_bg.svg')] flex justify-center items-start pt-24">
        <div className="flex w-9/12 gap-6">
            <UserInfo />
            <UserSections />
        </div>
    </div>
    )
}

export default User 