import { useState } from "react"

const FormRegistration = ({handleClick}) => {
        const [formData, setFormData] = useState({
                surname: "",
                firstName: "",
                email: "",
                password: "",
                confirmPassword: "",
              });

        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        };

        const submitFormRegistration = (e) => {
                e.preventDefault();
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                setFormData({
                        surname: "",
                        firstName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                      });
        }

        return (
        <form className="z-51 flex flex-col bg-formBackground absolute top-20 right-0 p-8 rounded-xl border-2 border-midGreen mr-20 w-full max-w-lg" onSubmit={submitFormRegistration}>
        
        <label htmlFor="surname" className='px-2 mb-1'>Nom<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="surname" name="surname" value={formData.surname} type="text" onChange={handleChange} className="input focus:ring-transparent focus:outline-none mb-6"/>
        
        <label htmlFor="firstName" className='px-2 mb-1'>Prénom<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="firstName" name="firstName" value={formData.firstName} type="text" onChange={handleChange} className="input focus:ring-transparent focus:outline-none mb-6" required/>
        
        <label htmlFor="email" className='px-2 mb-1'>E-mail<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="input focus:ring-transparent focus:outline-none mb-6" required/>
        
        <label htmlFor="password" className='px-2 mb-1'>Mot de passe<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className="input focus:ring-transparent focus:outline-none mb-6" required/>
        
        <label htmlFor="confirmPassword" className='px-2 mb-1'>Confimer votre mot de passe<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} type="password" onChange={handleChange} className="input focus:ring-transparent focus:outline-none mb-6" required/>
        
        
        <button type="submit" className= 'bg-darkGreen cursor-pointer bg-midGreen text-white rounded-lg font-medium mb-3 py-3' >S'inscrire</button>
        <button type="button" onClick={handleClick} className='cursor-pointer text-midGreen font-medium underline text-sm'>Annuler</button>
        </form>
        )
}

export default FormRegistration;