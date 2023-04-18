import React from 'react';

const Home = () => (
    <>
        <div className="home-background bg-cover bg-center bg-[url('./public/illus/home_bg.svg')]">
            <main className="flex flex-col items-center justify-center h-3/4">
                <h1 className="text-4xl text-center w-[550px] font-semibold">
                    Vivez une <span className="text-midGreen font-bold">expérience unique</span> en réservant votre cabane dans les arbres dès maintenant !</h1>
                <form className="flex bg-white/75 p-7 gap-6 rounded-2xl mt-5 border-2 border-midGreen items-end">
                    <div className="flex flex-col">
                        <label htmlFor="where" className="text-darkGreen pb-1 pl-2">Où ?</label>
                        <input type="text" name="where" id="where" placeholder="région ou commune" className="rounded-lg w-[250px] border border-midGreen" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="when" className="text-darkGreen pb-1 pl-2">Quand ?</label>
                        <input type="date" name="when" id="when" className="rounded-lg w-[250px] border border-midGreen" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="person" className="text-darkGreen pb-1 pl-2">Combien de personne ?</label>
                        <input type="number" name="person" id="person" placeholder="0" className="rounded-lg w-[250px] border border-midGreen" />
                    </div>
                    <button className="bg-midGreen h-fit py-2 px-3 rounded-lg text-white border border-midGreen">Rechercher</button>
                </form>
            </main>
        </div>
    </>
);

export default Home;