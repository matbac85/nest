import React from "react";
import { BancontactLogo, MastercardLogo, PayPalLogo, VisaLogo } from "../components/PaymentLogo";

const Reservation = () => {
    const bidule = "";

    return(
        <div className="bg-cover bg-center home-background bg-[url('/public/illus/reservation_bg.svg')] flex flex-col">
            <main className="w-2/3 flex flex-col mx-auto mt-14">
                <h1 className="text-4xl font-bold pb-8">Finalisez votre <span className="text-midGreen">réservation</span></h1>
                <div className="flex justify-between pt-8">
                    <form>
                        <h2 className="text-2xl font-bold pb-8">Détails et modes de paiement</h2>
                        <div>
                            <h3 className="text-lg font-medium pb-5">Votre séjour</h3>
                            <div className="flex items-start justify-between pb-5 pl-3">
                                <div>
                                    <p className="font-bold">Dates</p>
                                    <p>La date choisie</p>
                                </div>
                                <button type="button" className="text-darkGreen border-b border-darkGreen hover:font-medium hover:italic">Modifier</button>
                            </div>
                            <div className="flex items-start justify-between pb-5 pl-3">
                                <div>
                                    <p className="font-bold">Voyageurs</p>
                                    <p>Nombre de personne</p>
                                </div>
                                <button type="button" className="text-darkGreen border-b border-darkGreen hover:font-medium hover:italic">Modifier</button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium py-5">Payer avec</h3>
                            <div className="flex gap-2">
                                <div className="flex border border-darkGreen rounded-lg items-center bg-white w-28 px-2 h-12 overflow-hidden">
                                    <input type="radio" id="visa" name="payment" value="visa" />
                                    <label htmlFor="visa"className="pl-2"><VisaLogo /></label>
                                </div>
                                <div className="flex border border-darkGreen rounded-lg items-center bg-white w-28 px-2 h-12 overflow-hidden">
                                    <input type="radio" id="mastercard" name="payment" value="mastercard" />
                                    <label htmlFor="mastercard" className="pl-2"><MastercardLogo /></label>
                                </div>
                                <div className="flex border border-darkGreen rounded-lg items-center bg-white w-28 px-2 h-12 overflow-hidden">
                                    <input type="radio" id="bancontact" name="payment" value="bancontact" />
                                    <label htmlFor="bancontact" className="pl-2"><BancontactLogo /></label>
                                </div>
                                <div className="flex border border-darkGreen rounded-lg items-center bg-white w-28 px-2 h-12 overflow-hidden">
                                    <input type="radio" id="paypal" name="payment" value="paypal" />
                                    <label htmlFor="paypal" className="pl-2"><PayPalLogo /></label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-midGreen h-fit py-1 px-6 rounded-lg text-white hover:bg-darkGreen mt-14">Payer</button>
                    </form>
                    <section className="w-96 h-fit bg-white border-2 border-midGreen rounded-2xl shadow-lg shadow-darkGreen/50 p-5">
                        <div className="flex mb-7">
                            <img src="../../public/img/cabins/01/01-1.webp" alt="" className="h-28 rounded-lg" />
                            <div className="pl-3">
                                <h3 className="text-lg font-bold">Nom de cabane</h3>
                                <p>Région, ville</p>
                                <div>
                                    <p>Rating</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between pb-3">
                            <p>Dates</p>
                            <p>Dates choisies</p>
                        </div>
                        <div className="flex justify-between pb-3">
                            <p>Voyageurs</p>
                            <p>X</p>
                        </div>
                        <div className="flex justify-between pb-3">
                            <p>Prix</p>
                            <p>€ x nuits</p>
                        </div>
                        <div className="flex justify-between pt-5 pb-2 border-t-2 border-beige font-medium">
                            <p>Prix total</p>
                            <p>€</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Reservation;