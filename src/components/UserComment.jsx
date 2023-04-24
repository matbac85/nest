import { useEffect, useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { FilledHeart, QuoteComment } from "./Iconssvg";

const UserComment = ({postedComment}) => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [cabin, setCabin] = useState(null)

    async function fetchCabin() {
        const response = await fetch(`http://localhost:3000/cabins/${postedComment.cabin_id}`);
        const Data = await response.json();
        return Data;
    }

    useEffect(() => {
        async function getCabin() {
            const result = await fetchCabin();
            setCabin(result);
        }
        getCabin();
    }, []);

    return(cabin &&
    <div className="w-full">
        <div className="flex justify-between pt-2 gap-4">
        <img src={cabin.images[0]} alt="jjj" className="rounded-lg w-24"/>
        <p className="font-medium">{cabin.name}</p>
        <p className="font-light flex gap-1"><QuoteComment />{postedComment.comment}<QuoteComment /></p>
        </div>
    </div>
    )
}
export default UserComment;