import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { ArrowExpand } from "./Iconssvg";
import Favourite from "./Favourite";
import { useState } from "react";

const UserSections = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const sectionVisible = () => {
        setIsSectionVisible(!isSectionVisible)
    }

return (
    <div className="w-9/12 flex flex-col gap-8">
        <div className="user-box">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Mes favoris</h2>
                <ArrowExpand toggleCallback={sectionVisible}/>
            </div>
            {isSectionVisible && <div className="flex gap-8 border-t-2 border-t-beige pt-6">
            {currentUser.favourites.length !== 0 ?
                        currentUser.favourites.map((favourite) =>
                            <Favourite favourite={favourite} key={favourite.cabin_id} />
                        ) : <div className=' col-span-12 text-center'><h1 className='text-4xl'>Cette section est vide</h1></div>
                    }
            </div>}
        </div>
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes réservations futures</h2>
            <ArrowExpand />
        </div>
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes réservations passées</h2>
            <ArrowExpand />
        </div>
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes commentaires</h2>
            <ArrowExpand />
        </div>
    </div>
)}

export default UserSections