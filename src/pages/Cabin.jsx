
import { useParams } from 'react-router-dom';
import React, { useState, useEffect} from 'react';

const Cabin = () => {

    const {id} = useParams();
    const [data, setData] = useState([]);
    
    async function fetchData() {
        const response = await fetch(`http://localhost:3000/cabins/${id}`);
        const Data = await response.json();
        return Data;
    }


    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setData(result);
        }
        getData();
    }, []);
    

    return(
            <div className="home-background bg-cover bg-center bg-[url('./public/illus/home_bg.svg')]" >
                {data &&
                <div>
                    <div>
                        <p>{data.name}</p>
                    </div>
                    
                </div>}
            </div>
    )
};

export default Cabin;