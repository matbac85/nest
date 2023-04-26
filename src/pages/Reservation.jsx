import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from 'react-router-dom';
import { differenceInDays, format } from "date-fns";
import AuthContext from "../contexts/AuthContext";
import { BancontactLogo, MastercardLogo, PayPalLogo, VisaLogo } from "../components/PaymentLogo";
import Reserved from "../components/Reserved";


const Reservation = () => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const today = new Date();
    const [minDate, setMinDate] = useState(today.toISOString().slice(0, 10));
    const [newDateStart, setNewDateStart] = useState();
    const [newDateEnd, setNewDateEnd] = useState();
    const [persNumber, setPersNumber] = useState(0);
    const [isDateStartChanged, setIsDateStartChanged] = useState(false);
    const [isDateEndChanged, setIsDateEndChanged] = useState(false);
    const [daysNumber, setDaysNumber] = useState(0);
    const [total, setTotal] = useState()
    const [isDisabled, setIsDisabled] = useState(false)
    const [payment, setPayment] = useState('')
    const [isReserved, setIsReserved] = useState(false)
    const [reservationsInfos, setReservationInfos] = useState()

    const urlCabinID = searchParams.get('id');
    const urlDateStart = searchParams.get('dateStart');
    const urlDateEnd = searchParams.get('dateEnd');





    async function fetchData() {
        const response = await fetch(`http://localhost:3000/cabins/${urlCabinID}`);
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



    useEffect(() => {
        function dateSpace(dateStart, dateEnd) {
            const space = differenceInDays(new Date(dateEnd), new Date(dateStart));
            setDaysNumber(space)
            const totalPrice = space * data.price_per_night

            setTotal(totalPrice)

        }
        dateSpace(urlDateStart, urlDateEnd)
        if (isDateStartChanged && !isDateEndChanged) {

            dateSpace(newDateStart, urlDateEnd)
        } else if (!isDateStartChanged && isDateEndChanged) {

            dateSpace(urlDateStart, newDateEnd)
        } else if (isDateStartChanged && isDateEndChanged) {
            dateSpace(newDateStart, newDateEnd)
        }


    }, [data, newDateStart, newDateEnd]);



    const handleChangedDateStart = (e) => {
        const dateStart = e.target.value;
        setNewDateStart(dateStart);


        const dateStartChanged = true;
        setIsDateStartChanged(dateStartChanged);
    }

    const handleChangedDateEnd = (e) => {
        const dateEnd = e.target.value;
        setNewDateEnd(dateEnd);


        const dateEndChanged = true;
        setIsDateEndChanged(dateEndChanged);
    }

    const handlePersNumber = (e) => {
        const nPers = e.target.value;
        setPersNumber(nPers);

    }

    const handlePayment = (e) => {
        const paymentMode = e.target.value;
        setPayment(paymentMode)

    }

    async function handleSubmit() {
        if (payment === '' || persNumber === 0) {
            setIsDisabled(true)
        } else {
            const reservationsData = {
                bookings: [
                    ...data.bookings,
                    {
                        booker_id: currentUser.id,
                        start_date: `${isDateStartChanged ? newDateStart : urlDateStart}`,
                        end_date: `${isDateEndChanged ? newDateEnd : urlDateEnd}`,
                        guests: persNumber
                    }
                ]
            }
            await fetch(`http://localhost:3000/cabins/${data.id}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reservationsData)
            });
            const userReservation = {
                current_bookings: [
                    ...currentUser.current_bookings,
                    {
                        cabin_id: data.id,
                        start_date: `${isDateStartChanged ? newDateStart : urlDateStart}`,
                        end_date: `${isDateEndChanged ? newDateEnd : urlDateEnd}`,
                        guests: persNumber
                    }
                ]
            }
            await fetch(`http://localhost:3000/users/${currentUser.id}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userReservation)
            });
            const globalInfos = {
                start_date: `${isDateStartChanged ? newDateStart : urlDateStart}`,
                end_date: `${isDateEndChanged ? newDateEnd : urlDateEnd}`,
                guests: persNumber,
                price: total,
                nights: daysNumber,
                paymentLogo: payment

            }
            setReservationInfos(globalInfos)
            setIsReserved(true)
        }
    }

    return (
        <div className="bg-cover bg-center home-background bg-[url('/public/illus/reservation_bg.svg')] flex flex-col">
            {!isReserved ?
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
                                                <input type="date" name="dateEnd" id="dateEnd" min={minDate} className="rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" value={newDateEnd} onChange={handleChangedDateEnd} />
                                                :
                                                <input type="date" name="dateEnd" id="dateEnd" min={minDate} className="rounded-lg border border-midGreen text-[#757575] focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:text-darkGreen" value={urlDateEnd} onChange={handleChangedDateEnd} />}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between pb-5 pl-3 w-96">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="person" className="font-medium pb-1 text-darkGreen">Voyageurs</label>
                                        <input type="number" name="person" id="person" min="1" max="4" placeholder="4 pers. max" value={persNumber} className="rounded-lg border border-midGreen focus:font-semibold focus:border focus:border-darkGreen focus:ring-0 focus:placeholder:text-darkGreen" onChange={handlePersNumber} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold py-5">Payer avec</h3>
                                <div className="flex gap-2" onChange={handlePayment}>
                                    <div className="flex border border-darkGreen rounded-lg items-center bg-white w-28 px-2 h-12 overflow-hidden">
                                        <input type="radio" id="visa" name="payment" value="visa" />
                                        <label htmlFor="visa" className="pl-2"><VisaLogo /></label>
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
                                {isDisabled && <p className="text-red-500">Veuillez remplir tous les champs ci-dessus.</p>}
                            </div>
                            <button type="button" className="bg-midGreen h-fit py-1 px-6 rounded-lg text-white hover:bg-darkGreen mt-14" onClick={handleSubmit}>Payer</button>


                        </form>
                        <section className="w-fit h-fit bg-white border-2 border-midGreen rounded-2xl shadow-lg shadow-darkGreen/50 p-5">
                            <div className="flex mb-7">
                                <img src={data && data.images && data.images[0]} alt="" className="h-28 rounded-lg" />
                                <div className="pl-3">
                                    <h3 className="text-lg font-bold">{data.name}</h3>
                                    <p>{data.region}</p>
                                    <p>{data.commune}</p>
                                </div>
                            </div>
                            <div className="flex justify-between pb-3">
                                <p>Dates</p>

                                <p>Du {isDateStartChanged === true ? format(new Date(newDateStart), "dd-MM-yyyy") : format(new Date(urlDateStart), "dd-MM-yyyy")} au {isDateEndChanged === true ? format(new Date(newDateEnd), "dd-MM-yyyy") : format(new Date(urlDateEnd), "dd-MM-yyyy")}</p>

                            </div>
                            <div className="flex justify-between pb-3">
                                <p>Voyageurs</p>
                                <p>{persNumber}</p>
                            </div>
                            <div className="flex justify-between pb-3">
                                <p>Prix</p>
                                <p>{data.price_per_night}€ x {daysNumber} nuits</p>
                            </div>
                            <div className="flex justify-between pt-5 pb-2 border-t-2 border-beige font-medium">
                                <p>Prix total</p>
                                <p>{!isNaN(total) ? total : ""}€</p>
                            </div>
                        </section>
                    </div>
                </main> : <Reserved data={data} user={currentUser} reservation={reservationsInfos} />}
        </div>
    )
}

export default Reservation;