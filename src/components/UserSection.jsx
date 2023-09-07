import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { ArrowExpand } from "./Iconssvg";
import Favourite from "./Favourite";
import UserComment from "./UserComment";
import {supabase} from '../helpers.js'

const UserSections = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [likes, setLikes] = useState([]);
    const [currentBookings, setCurrentBookings] = useState([]);
    const [pastBookings, setPastBookings] = useState([]);
    const [comments, setComments] = useState([]);


    const [isSectionFavouritesVisible, setIsSectionFavouritesVisible] = useState(false);
    const [isSectionCurrentBookingsVisible, setIsSectionCurrentBookingsVisible] = useState(false);
    const [isSectionPastBookingsVisible, setIsSectionPastBookingsVisible] = useState(false);
    const [isSectionCommentsVisible, setIsSectionCommentsVisible] = useState(false);

    useEffect(async () => {
        const reloadUser = async () => {
        let response = await supabase.from('likes').select("cabin_id");
        setLikes(response.data);

        response = await supabase.from('comments').select("*").eq("user_id", currentUser.id)
        setComments(response.data)

        response = await supabase.from('bookings').select("cabin_id").lt("start_date", new Date().toLocaleDateString());
        console.log(response)
        setPastBookings(response.data);

        response = await supabase.from('bookings').select("cabin_id").gt("start_date", new Date().toLocaleDateString());
        setCurrentBookings(response.data);

        }
        reloadUser();
    }, [])

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
                    <ArrowExpand toggleCallback={sectionFavouritesVisible} isExpanded={isSectionFavouritesVisible} setIsExpanded={setIsSectionFavouritesVisible} />
                </div>
                {isSectionFavouritesVisible && <div className="flex flex-wrap gap-6 border-t-2 border-t-beige pt-6">
                    {likes.length !== 0 ?
                        likes.map((like) =>
                            <Favourite favourite={like} key={like.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
                </div>}
            </div>
            <div className="user-box">
                <div className="flex justify-between">
                    <h2 className="font-bold text-lg">Mes réservations futures</h2>
                    <ArrowExpand toggleCallback={sectionPastBookingsVisible} isExpanded={isSectionPastBookingsVisible} setIsExpanded={setIsSectionPastBookingsVisible} />
                </div>
                {isSectionPastBookingsVisible && <div className="flex flex-wrap gap-6 border-t-2 border-t-beige pt-6">
                    {currentBookings.length !== 0 ?
                        currentBookings.map((currentBooking) =>
                            <Favourite favourite={currentBooking} key={currentBooking.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
                </div>}
            </div>
            <div className="user-box">
                <div className="flex justify-between">
                    <h2 className="font-bold text-lg">Mes réservations passée</h2>
                    <ArrowExpand toggleCallback={sectionCurrentBookingsVisible} isExpanded={isSectionCurrentBookingsVisible} setIsExpanded={setIsSectionCurrentBookingsVisible} />
                </div>
                {isSectionCurrentBookingsVisible && <div className="flex flex-wrap gap-6 border-t-2 border-t-beige pt-6">
                    {pastBookings.length !== 0 ?
                        pastBookings.map((pastBooking) =>
                            <Favourite favourite={pastBooking} key={pastBooking.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
                </div>}
            </div>
            <div className="user-box">
                <div className="flex justify-between">
                    <h2 className="font-bold text-lg">Mes commentaires</h2>
                    <ArrowExpand toggleCallback={sectionCommentsVisible} isExpanded={isSectionCommentsVisible} setIsExpanded={setIsSectionCommentsVisible} />
                </div>
                {isSectionCommentsVisible && <div className="grid grid-cols-2 gap-8 border-t-2 border-t-beige pt-6">
                    {comments.length !== 0 ?
                        comments.map((postedComment) =>
                            <UserComment postedComment={postedComment} key={postedComment.cabin_id} />
                        ) : <p>Cette section est vide</p>
                    }
                </div>}
            </div>
        </div>
    )
}

export default UserSections