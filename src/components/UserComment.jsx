import { useEffect, useState } from "react";
import { QuoteComment } from "./Iconssvg";
import {supabase, image} from '../helpers.js'

const UserComment = ({postedComment}) => {
    const [cabin, setCabin] = useState(null)

    async function fetchCabin() {
        let { data: cabin, error } = await supabase.from('cabins').select().eq("id", postedComment.cabin_id)
        return cabin[0];
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
        <img src={image(cabin.id, 1)} alt="jjj" className="rounded-lg w-24"/>
        <p className="font-medium">{cabin.name}</p>
        <p className="font-light flex gap-1"><QuoteComment />{postedComment.text}<QuoteComment /></p>
        </div>
    </div>
    )
}
export default UserComment;