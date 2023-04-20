import React, { useRef, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState();
    const [maxGuests, setMaxGuests] = useState();
    const [isSelectedToggle, setIsSelectedToggle] = useState(false);
    const regionChoice = useRef();

    const handleResearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/cabins');
            const data = await response.json();

            const infoSearch = {
                regionSearch: location,
                guestsSearch: maxGuests,
            }

            if (infoSearch.regionSearch && infoSearch.guestsSearch) {
                const filterLocation = data.filter(loc => loc.region.toLowerCase() === infoSearch.regionSearch);
                const filterLocAndGuests = filterLocation.filter(nGuests => nGuests.max_guests >= infoSearch.guestsSearch);
            } else if (infoSearch.regionSearch) {
                const filterLocation = data.filter(loc => loc.region.toLowerCase() === infoSearch.regionSearch);
            } else if (infoSearch.guestsSearch) {
                const filterGuests = data.filter(nGuests => nGuests.max_guests >= infoSearch.guestsSearch);
            } else {
                console.log("qued");
            }

            setData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const toggleSelected = () => {
        setIsSelectedToggle(!isSelectedToggle);
    }

    const handleLocation = (e) => {
        regionChoice.current.innerText = e.target.innerText;
        let location = e.target.innerText.toLowerCase();
        setLocation(location);

        toggleSelected()

        return location;
    }

    const handleGuests = (e) => {
        let maxGuests = e.target.value;
        setMaxGuests(maxGuests);

        return maxGuests
    }

return (
    <div className="bg-cover bg-center home-background bg-[url('/public/illus/home_bg.svg')]">
        <main className="flex flex-col items-center justify-center h-3/4">
            <h1 className="text-4xl text-center w-[550px] font-semibold mb-9">
                    Vivez une <span className="text-midGreen font-bold">expérience unique</span> en réservant votre cabane dans les arbres dès maintenant !</h1>
            <form className="flex bg-white/75 p-7 gap-6 rounded-2xl border-2 border-midGreen items-end shadow-lg shadow-darkGreen/50">
                <div className="flex flex-col">
                    <label htmlFor="where" className="text-darkGreen pb-1 pl-1">Où ?</label>
                    <div className="relative">
                        <button type="button" name="where" id="where" className="w-[270px] rounded-lg border border-midGreen bg-white py-2 px-3 text-[#757575] flex justify-between focus:text-darkGreen focus:font-medium" onClick={toggleSelected}><span ref={regionChoice}>Choisissez une région</span>
                            {!isSelectedToggle ?
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"/></svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" className="rotate-180"><path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"/></svg>
                            }
                        </button>
                        {isSelectedToggle &&
                            <div className="absolute top-[50px] bg-white w-[270px] rounded-lg py-1 px-2 border border-midGreen">
                                <p value="wallonie" className="my-1 py-1 px-2 hover:bg-midGreen hover:rounded-lg hover:text-white border-b border-midGreen/50" onClick={handleLocation}>Région Wallonne</p>
                                <p value="flandres" className="my-1 py-1 px-2 hover:bg-midGreen hover:rounded-lg hover:text-white border-b border-midGreen/50" onClick={handleLocation}>Région Flamande</p>
                                <p value="bruxelles_capitale" className="my-1 py-1 px-2 hover:bg-midGreen hover:rounded-lg hover:text-white" onClick={handleLocation}>Région de Bruxelles-Capitale</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dateStart" className="text-darkGreen pb-1 pl-1">Date de début</label>
                    <input type="date" name="dateStart" id="dateStart" className="w-[160px] rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dateEnd" className="text-darkGreen pb-1 pl-1">Date de fin</label>
                    <input type="date" name="dateEnd" id="dateEnd" className="w-[160px] rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="person" className="text-darkGreen pb-1 pl-1">Combien de personne ?</label>
                    <input type="number" name="person" id="person" min="1" max="4" placeholder="4 pers. max" className="rounded-lg w-[200px] border border-midGreen focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:placeholder:text-darkGreen" onChange={handleGuests} />
                </div>
                <button className="bg-midGreen h-fit py-2 px-3 rounded-lg text-white border border-midGreen" onClick={handleResearch}>Rechercher</button>
                </form>
            </main>
        </div>
    );
};

export default Home;