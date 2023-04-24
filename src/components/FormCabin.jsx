import { useState } from "react";
import { Add } from "./Iconssvg";


const FormCabin = () => {
    const [formData, setFormData] = useState({
        cabinName: "",
        city: "",
        area: "",
        guestsNb: "",
        price: "",
        description:"",
      });
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const validateRequiredField = (fieldValue) => {
        if (!fieldValue) {
          return `Ce champ est obligatoire.`;
        }
        return "";
    }

    const validateText = (fieldValue) => {
        if (fieldValue && !/^[a-zA-Z]+$/.test(fieldValue)) {
          return `Ce champ ne peut contenir que des lettres.`;
        }
        return "";
    }

    const validateNumber = (fieldValue) => {
        if(fieldValue && !/^\d+$/.test(fieldValue)){
            return `Ce champ ne peut contenir que des chiffres.`;            
        }
        return "";
    }

    const validateForm = () => {
        const newErrors = {};

        newErrors.cabinName = validateRequiredField(formData.cabinName)
        newErrors.city = validateRequiredField(formData.city);
        newErrors.area = validateRequiredField(formData.area);
        newErrors.guestsNb = validateRequiredField(formData.guestsNb);
        newErrors.price = validateRequiredField(formData.price);
        newErrors.description = validateRequiredField(formData.description);
        newErrors.cabinName += validateText(formData.cabinName)
        newErrors.city += validateText(formData.city);
        newErrors.area += validateText(formData.area);
        newErrors.guestsNb += validateNumber(formData.guestsNb);
        newErrors.price += validateNumber(formData.price);

        return newErrors
    }


const submitFormCabin = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if(Object.values(newErrors).filter((value) => value !== "").length > 0){
                setErrors(newErrors);
        }else{
                fetch('http://localhost:3000/cabins', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                })
        }

        setFormData({
                cabinName: "",
                city: "",
                area: "",
                guestsNb: "",
                price: "",
                description:"",
              });
}

    return(
    <div className="pt-16">
        <h1 className="text-4xl font-bold mb-4 pl-2">Ajoutez votre cabane sur <span className='text-midGreen font-extrabold'>Nest</span></h1>
        <form className="bg-formBackground p-8 rounded-xl border-2 border-midGreen flex flex-col gap-4" onSubmit={submitFormCabin}>
            
            <div>
                <label htmlFor="cabinName" className="px-2 mb-1">Nom de la cabane<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <input id="cabinName" name="cabinName" value={formData.cabinName} type="text" className="w-full input focus:ring-transparent focus:outline-none" onChange={handleChange}/>
                {errors.cabinName && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.cabinName}</div>
                )}
            </div>
            
            <div className="flex gap-4">
                <div className="w-full">
                    <label htmlFor="city" className="px-2 mb-1">Localité<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="city" name="city" value={formData.city} type="text" className="w-full input focus:ring-transparent focus:outline-none" onChange={handleChange}/>
                    {errors.city && (
                    <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.city}</div>
                    )}
                </div>
                <div className="w-full">
                    <label htmlFor="area" className="px-2 mb-1">Région<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="area" name="area" value={formData.area} type="text" className="w-full input focus:ring-transparent focus:outline-none" onChange={handleChange}/>
                    {errors.area && (
                    <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.area}</div>
                    )}
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-full">
                    <label htmlFor="guestsNb" className="px-2 mb-1">Nombre de voyageurs<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="guestsNb" name="guestsNb" value={formData.guestsNb} type="text" className="w-full input focus:ring-transparent focus:outline-none" onChange={handleChange}/>
                    {errors.guestsNb && (
                    <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.guestsNb}</div>
                    )}
                </div>
                <div className="w-full">
                    <label htmlFor="price" name="city" value={formData.city} className="px-2 mb-1">Prix par nuit<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                    <input id="price" name="price" value={formData.price} type="text" className="w-full input focus:ring-transparent focus:outline-none" onChange={handleChange}/>
                    {errors.price && (
                    <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.price}</div>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="description" className="px-2 mb-1">Description<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <textarea id="description" name="description" value={formData.description} cols="30" rows="3" className="w-full input focus:ring-transparent focus:outline-none" onChange={handleChange}/>
                {errors.description && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.description}</div>
                )}
            </div>
            <div>
                <label className="px-2 mb-1">Vos photos<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <div className="flex justify-between input p-4 mt-1">
                    <div className="picture-upload flex justify-center items-center cursor-pointer hover:bg-slate-300"><Add /></div>
                    <div className="picture-upload"/>
                    <div className="picture-upload"/>
                    <div className="picture-upload"/>
                    <div className="picture-upload"/>
                    <div className="picture-upload"/>
                </div>
            </div>
            <div className="text-right">
            <button type="submit" className='hover:bg-darkGreen cursor-pointer bg-midGreen text-white rounded-lg font-medium py-3 px-8'>Soumettre</button>
            </div>
        </form>
    </div>
);}

export default FormCabin;