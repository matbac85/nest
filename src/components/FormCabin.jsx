import { Add } from "./Iconssvg";

const FormCabin = () => (
    <div className="min-w-fit">
        <h1 className="text-4xl font-bold mb-8 pt-8 pl-2">Ajoutez votre cabane sur <span className='text-midGreen'>Nest</span></h1>
        <form className="bg-formBackground p-8 rounded-xl border-2 border-midGreen mr-20">
            <label htmlFor="nomCAbane" className="block px-2 mb-1">Nom de la cabane<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
            <input id="nomCabane" type="text" className="w-full input focus:ring-transparent focus:outline-none mb-6"/>
            <div className="flex gap-4">
                <div className="w-full">
                    <label htmlFor="localite" className="block px-2 mb-1">Localité<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="localite" type="text" className="w-full input focus:ring-transparent focus:outline-none mb-6"/>
                </div>
                <div className="w-full">
                    <label htmlFor="region" className="block px-2 mb-1">Région<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="region" type="text" className="w-full input focus:ring-transparent focus:outline-none mb-6"/>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-full">
                    <label htmlFor="nombreVoyageurs" className="block px-2 mb-1">Nombre de voyageurs<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="nombreVoyageurs" type="text" className="w-full input focus:ring-transparent focus:outline-none mb-6"/>
                </div>
                <div className="w-full">
                    <label htmlFor="prix" className="block px-2 mb-1">Prix par nuit<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="prix" type="text" className="w-full input focus:ring-transparent focus:outline-none mb-6"/>
                </div>
            </div>
            <label htmlFor="" className="block px-2 mb-1">Description<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
            <textarea name="" id="" cols="30" rows="5" className="block w-full input focus:ring-transparent focus:outline-none mb-6" />
            <label htmlFor="" className="px-2 mb-1">Vos photos<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
            <div className="flex input p-8 mt-1 mb-6 gap-2">
                <div className="picture-upload"><Add /></div>
                <div className="picture-upload"/>
                <div className="picture-upload"/>
                <div className="picture-upload"/>
                <div className="picture-upload"/>
                <div className="picture-upload"/>
            </div>
            <div className="text-right">
            <button type="submit" className='hover:bg-darkGreen cursor-pointer bg-midGreen text-white rounded-lg font-medium mb-3 py-3 px-8'>Soumettre</button>
            </div>
        </form>
    </div>
);

export default FormCabin;