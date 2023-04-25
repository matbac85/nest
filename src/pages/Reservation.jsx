import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { BancontactLogo, MastercardLogo, PayPalLogo, VisaLogo } from "../components/PaymentLogo";

const Reservation = () => {
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const today = new Date();
    const [minDate, setMinDate] = useState(today.toISOString().slice(0, 10));
    const [newDateStart, setNewDateStart] = useState();
    const [newDateEnd, setNewDateEnd] = useState();
    const [persNumber, setPersNumber] = useState();
    const [isDateStartChanged, setIsDateStartChanged] = useState(false);
    const [isDateEndChanged, setIsDateEndChanged] = useState(false);

    const urlCabinID = searchParams.get('id');
    const urlDateStart = searchParams.get('dateStart');
    const urlDateEnd = searchParams.get('dateEnd');

    async function fetchData() {
        const response = await fetch(`http://localhost:3000/cabins/`);
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

    const handleChangedDateStart = (e) => {
        const dateStart = e.target.value;
        setNewDateStart(dateStart);
        console.log(dateStart);

        const dateStartChanged = true;
        setIsDateStartChanged(dateStartChanged);
    }

    const handleChangedDateEnd = (e) => {
        const dateEnd = e.target.value;
        setNewDateEnd(dateEnd);
        console.log(dateEnd);

        const dateEndChanged = true;
        setIsDateEndChanged(dateEndChanged);
    }

    const handlePersNumber = (e) => {
        const nPers = e.target.value;
        setPersNumber(nPers);
        console.log(nPers);
    }

    const handlePayment = (e) => {
        const paymentMode = e.target.value;
        console.log(paymentMode);
    }

    return(
        <div className="bg-cover bg-center home-background bg-[url('/public/illus/reservation_bg.svg')] flex flex-col">
            <main className="w-2/3 flex flex-col mx-auto mt-14">
                <h1 className="text-4xl font-bold pb-8">Finalisez votre <span className="text-midGreen">réservation</span></h1>
                <div className="flex justify-between pt-8">
                    <form>
                        <h2 className="text-2xl font-bold pb-8">Détails et modes de paiement</h2>
                        <div>
                            <h3 className="text-lg font-bold pb-5">Votre séjour</h3>
                            <div className="flex items-start justify-between pb-5 pl-3 w-96">
                                <div className="flex gap-4 w-full">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="dateStart" className="font-medium pb-1 text-darkGreen">Début du séjour</label>
                                        {isDateStartChanged === true ? 
                                            <input type="date" name="dateStart" id="dateStart" min={minDate} className="rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" value={newDateStart} onChange={handleChangedDateStart} /> 
                                        : 
                                            <input type="date" name="dateStart" id="dateStart" min={minDate} className="rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" value={urlDateStart} onChange={handleChangedDateStart} />}
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="dateEnd" className="font-medium pb-1 text-darkGreen">Fin du séjour</label>
                                        {isDateEndChanged === true ? 
                                            <input type="date" name="dateEnd" id="dateEnd" min={minDate} className="rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" value={newDateEnd} onChange={handleChangedDateEnd}/>
                                        :
                                            <input type="date" name="dateEnd" id="dateEnd" min={minDate} className="rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" value={urlDateEnd} onChange={handleChangedDateEnd}/>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start justify-between pb-5 pl-3 w-96">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="person" className="font-medium pb-1 text-darkGreen">Voyageurs</label>
                                    <input type="number" name="person" id="person" min="1" max="4" placeholder="4 pers. max" className="rounded-lg border border-midGreen focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:placeholder:text-darkGreen" onChange={handlePersNumber} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold py-5">Payer avec</h3>
                            <div className="flex gap-2" onChange={handlePayment}>
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