import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserInfo from "../components/UserInfo"
import UserSections from "../components/UserSection"
import AuthContext from "../contexts/AuthContext";
import {supabase} from '../helpers.js'

const User = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate()

    useEffect(async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setCurrentUser(user)
            if(!user){
                navigate('/')
            }
    })
    
    return (
    <div className="bg-cover bg-top home-background bg-[url('/public/illus/user_profile_bg.svg')] flex justify-center items-start">
        <div className="flex w-9/12 gap-6 pt-24">
            <UserInfo />
            <UserSections />
        </div>
    </div>
    )
}

export default User 