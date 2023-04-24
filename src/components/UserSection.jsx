import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { ArrowExpand } from "./Iconssvg";
import Favourite from "./Favourite";
import UserComment from "./UserComment";

const UserSections = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [isSectionFavouritesVisible, setIsSectionFavouritesVisible] = useState(false);
    const [isSectionCurrentBookingsVisible, setIsSectionCurrentBookingsVisible] = useState(false);
    const [isSectionPastBookingsVisible, setIsSectionPastBookingsVisible] = useState(false);
    const [isSectionCommentsVisible, setIsSectionCommentsVisible] = useState(false);

    const sectionFavouritesVisible = () => {
        setIsSectionFavouritesVisible(!isSectionFavouritesVisible)
    }

    const sectionCurrentBookingsVisible = () => {
        setIsSectionCurrentBookingsVisible(!isSectionCurrentBookingsVisible)
    }

    const sectionPastBookingsVisible = () => {
        setIsSectionPastBookingsVisible(!isSectionPastBookingsVisible)
    }

    const sectionCommentsVisible = () => {
        setIsSectionCommentsVisible(!isSectionCommentsVisible)
    }

return (
    <div className="w-9/12 flex flex-col gap-8">
        <div className="user-box">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Mes favoris</h2>
                <ArrowExpand toggleCallback={sectionFavouritesVisible} isExpanded={isSectionFavouritesVisible} setIsExpanded={setIsSectionFavouritesVisible}/>
            </div>
            {isSectionFavouritesVisible && <div className="flex gap-8 border-t-2 border-t-beige pt-6">
            {currentUser.favourites.length !== 0 ?
                        currentUser.favourites.map((favourite) =>
                            <Favourite favourite={favourite} key={favourite.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
            </div>}
        </div>
        <div className="user-box">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Mes réservations futures</h2>
                <ArrowExpand toggleCallback={sectionCurrentBookingsVisible}  isExpanded={isSectionCurrentBookingsVisible} setIsExpanded={setIsSectionCurrentBookingsVisible}/>
            </div>
            {isSectionCurrentBookingsVisible && <div className="flex gap-8 border-t-2 border-t-beige pt-6">
            {currentUser.past_bookings.length !== 0 ?
                        currentUser.past_bookings.map((pastBooking) =>
                            <Favourite favourite={pastBooking} key={pastBooking.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
            </div>}
        </div>
        <div className="user-box">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Mes réservations passées</h2>
                <ArrowExpand toggleCallback={sectionPastBookingsVisible} isExpanded={isSectionPastBookingsVisible} setIsExpanded={setIsSectionPastBookingsVisible}/>
            </div>
            {isSectionPastBookingsVisible && <div className="flex gap-8 border-t-2 border-t-beige pt-6">
            {currentUser.current_bookings.length !== 0 ?
                        currentUser.current_bookings.map((currentBooking) =>
                            <Favourite favourite={currentBooking} key={currentBooking.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
            </div>}
        </div>
        <div className="user-box">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Mes commentaires</h2>
                <ArrowExpand toggleCallback={sectionCommentsVisible} isExpanded={isSectionCommentsVisible} setIsExpanded={setIsSectionCommentsVisible}/>
            </div>
            {isSectionCommentsVisible && <div className="flex gap-8 border-t-2 border-t-beige pt-6">
            {currentUser.posted_comments.length !== 0 ?
                        currentUser.posted_comments.map((postedComment) =>
                            <UserComment postedComment={postedComment} key={postedComment.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
            </div>}
        </div>
    </div>
)}

export default UserSections