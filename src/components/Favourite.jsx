import { useEffect, useState } from "react";
import { FilledHeart } from "./Iconssvg";

const Favourite = ({favourite}) => {
    const [cabin, setCabin] = useState(null)

    async function fetchCabin() {
        const response = await fetch(`http://localhost:3000/cabins/${favourite.cabin_id}`);
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
    <div className="w-44">
        <img src={cabin.images[0]} alt="jjj" className="rounded-lg"/>
        <div className="flex justify-between pt-2">
        <h2 className="font-medium">{cabin.name}</h2>
        <FilledHeart/>
        </div>
    </div>
    )
}
export default Favourite;