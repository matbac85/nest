import { useState } from "react"

const FormRegistration = ({handleClick, visible}) => {
        const [formData, setFormData] = useState({
                surname: "",
                firstName: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
        const [errors, setErrors] = useState({})

        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        };

        const validateForm = () => {
                const newErrors = {};

                if (!formData.surname) {
                        newErrors.surname = "Ce champ est obligatoire.";
                }
                if (!formData.firstName) {
                        newErrors.firstName = "Ce champ est obligatoire.";
                }
                if (!formData.email) {
                        newErrors.email = "Ce champ est obligatoire.";
                }
                if (!formData.password) {
                        newErrors.password = "Ce champ est obligatoire.";
                }
                if (!formData.confirmPassword) {
                        newErrors.confirmPassword = "Ce champ est obligatoire.";
                }

                if(formData.surname && !/^[a-zA-Z]+$/.test(formData.surname)){
                        newErrors.surname = "Ce champ ne peut contenir que des lettres"
                }

                if(formData.firstName && !/^[a-zA-Z]+$/.test(formData.firstName)){
                        newErrors.firstName = "Ce champ ne peut contenir que des lettres"
                }

                if (formData.confirmPassword !== formData.password) {
                        newErrors.confirmPassword = "Ce champ doit correspondre au champ Mot de passe.";
                      }
                return newErrors
        }


        const submitFormRegistration = (e) => {
                e.preventDefault();

                const newErrors = validateForm();

                if(Object.keys(newErrors).length > 0){
                        setErrors(newErrors);
                }else{
                        fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                        })
                }

                setFormData({
                        surname: "",
                        firstName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                      });
        }

        return (visible &&
        <form className="z-51 flex flex-col bg-formBackground absolute top-20 right-0 p-8 rounded-xl border-2 border-midGreen mr-20 w-full max-w-lg gap-4" onSubmit={submitFormRegistration}>
        
        <div className="flex flex-col gap-1">
                <label htmlFor="surname" className='px-2'>Nom<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <input id="surname" name="surname" value={formData.surname} type="text" onChange={handleChange} className="input focus:ring-transparent focus:outline-none w-full"/>
                {errors.surname && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.surname}</div>
                )}
        </div>
        
        <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className='px-2'>Prénom<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <input id="firstName" name="firstName" value={formData.firstName} type="text" onChange={handleChange} className="input focus:ring-transparent focus:outline-none w-full"/>
                {errors.firstName && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.firstName}</div>
                )}
        </div>
        
        <div className="flex flex-col gap-1">
                <label htmlFor="email" className='px-2'>E-mail<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="input focus:ring-transparent focus:outline-none w-full"/>
                {errors.email && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.email}</div>
                )}
        </div>
        
        <div className="flex flex-col gap-1">
                <label htmlFor="password" className='px-2'>Mot de passe<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className="input focus:ring-transparent focus:outline-none w-full"/>
                {errors.password && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.password}</div>
                )}
        </div>

        <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="confirmPassword" className='px-2'>Confimer votre mot de passe<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <input id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} type="password" onChange={handleChange} className="input focus:ring-transparent focus:outline-none w-full"/>
                {errors.confirmPassword && (
                <div className="text-red-500 text-sm ml-2 mt-1 w-full">{errors.confirmPassword}</div>
                )}
        </div>
        
        <button type="submit" className= 'cursor-pointer bg-midGreen text-white rounded-lg font-medium mb-3 py-3' >S'inscrire</button>
        <button type="button" onClick={handleClick} className='cursor-pointer text-midGreen font-medium underline text-sm'>Annuler</button>
        </form>
        )
}

export default FormRegistration;