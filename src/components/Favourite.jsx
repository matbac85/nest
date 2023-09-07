import { useEffect, useState } from "react";
import { FilledHeart } from "./Iconssvg";
import {supabase, image} from '../helpers.js'

const Favourite = ({favourite}) => {
    const [cabin, setCabin] = useState(null)

    async function fetchCabin() {
        let { data: cabin, error } = await supabase.from('cabins').select().eq("id", favourite.cabin_id)
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
    <div className="w-40">
        <img src={image(cabin.id, 1)} alt="jjj" className="rounded-lg h-32"/>
        <div className="flex justify-between pt-2">
        <h2 className="font-medium">{cabin.name}</h2>
        <FilledHeart/>
        </div>
    </div>
    )
}
export default Favourite;