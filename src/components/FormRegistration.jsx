const FormRegistration = () => (
        <form className="z-51 flex flex-col bg-formBackground absolute top-20 right-0 p-8 rounded-xl border-2 border-midGreen mr-20 w-full max-w-lg">
        <label htmlFor="sirname" className='px-2 mb-1'>Nom<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="sirname" type="text" className="input focus:ring-transparent focus:outline-none mb-6" required/>
        <label htmlFor="firstname" className='px-2 mb-1'>Prénom<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="firstname" type="text" className="input focus:ring-transparent focus:outline-none mb-6" required/>
        <label htmlFor="email" className='px-2 mb-1'>E-mail<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="email" type="email" className="input focus:ring-transparent focus:outline-none mb-6" required/>
        <label htmlFor="password" className='px-2 mb-1'>Mot de passe<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input type="password" className="input focus:ring-transparent focus:outline-none mb-6" required/>
        <label htmlFor="confirmPassword" className='px-2 mb-1'>Confimer votre mot de passe<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
        <input id="confirmPassword" type="password" className="input focus:ring-transparent focus:outline-none mb-6" required/>
        <button type="submit" className='hover:bg-darkGreen cursor-pointer bg-midGreen text-white rounded-lg font-medium mb-3 py-3'>S'inscrire</button>
        </form>
)

export default FormRegistration;