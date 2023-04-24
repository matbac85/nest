import React from "react";
import { BancontactLogo, MastercardLogo, PayPalLogo, VisaLogo } from "../components/PaymentLogo";

const Reservation = () => {
    const bidule = "";

    return(
        <div className="bg-cover bg-center home-background bg-[url('/public/illus/reservation_bg.svg')] flex flex-col">
            <main className="w-2/3 flex flex-col mx-auto mt-14">
                <h1 className="text-4xl font-bold pb-8">Finalisez votre <span className="text-midGreen">réservation</span></h1>
                <h2 className="text-2xl font-bold py-8">Détails et modes de paiement</h2>
                <div className="flex justify-between">
                    <form>
                        <section>
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
                        </section>
                        <section>
                            <h3 className="text-lg font-medium py-5">Payer avec</h3>
                            <div className="flex gap-2">
                                <div className="flex flex-row-reverse border border-darkGreen rounded-lg items-center bg-white w-28 justify-end px-2 h-12 overflow-hidden">
                                    <label htmlFor="" className="pl-2"><VisaLogo /></label>
                                    <input type="radio" />
                                </div>
                                <div className="flex flex-row-reverse border border-darkGreen rounded-lg items-center bg-white w-28 justify-end px-2 h-12 overflow-hidden">
                                    <label htmlFor="" className="pl-2"><MastercardLogo /></label>
                                    <input type="radio" />
                                </div>
                                <div className="flex flex-row-reverse border border-darkGreen rounded-lg items-center bg-white w-28 justify-end px-2 h-12 overflow-hidden">
                                    <label htmlFor="" className="pl-2"><BancontactLogo /></label>
                                    <input type="radio" />
                                </div>
                                <div className="flex flex-row-reverse border border-darkGreen rounded-lg items-center bg-white w-28 justify-end px-2 h-12 overflow-hidden">
                                    <label htmlFor="" className="pl-2"><PayPalLogo /></label>
                                    <input type="radio" />
                                </div>
                            </div>
                        </section>
                        <button type="submit" className="bg-midGreen h-fit py-1 px-6 rounded-lg text-white hover:bg-darkGreen mt-14">Payer</button>
                    </form>
                    <section className="w-96 h-fit bg-white border-2 border-midGreen rounded-2xl shadow-lg shadow-darkGreen/50">
                        <div>
                            <img src="" alt="" />
                            <h3>Nom de cabane</h3>
                            <p>Région, ville</p>
                            <div>
                                <p>Rating</p>
                            </div>
                        </div>
                        <div>
                            <p>Dates</p>
                            <p>Dates choisies</p>
                        </div>
                        <div>
                            <p>Voyageurs</p>
                            <p>X</p>
                        </div>
                        <div>
                            <p>Prix</p>
                            <p>€ x nuits</p>
                        </div>
                        <div>
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