'use client';
// import '../globals.css';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function BookingForm({ roomDetail, rooms }) {

    const roomList = rooms.results;
    const user = JSON.parse(localStorage.getItem('user'));

    // useEffect(() => {
    //     // This runs only in the browser


    //     if (user) {
    //         try {
    //             setUser(user);

    //         } catch (error) {
    //             console.error('Error parsing user data:', error);
    //         }
    //     }
    // }, []);

    const [TotalCost, setTotalCost] = useState(0);
    const [RoomSelected, setRoomSelected] = useState('');
    const [TotalGuests, setTotalGuests] = useState(1);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [detail, setDetail] = useState('');

    const [checkinDateNormal, setCheckinDateNormal] = useState('');
    const [checkoutDateNormal, setCheckoutDateNormal] = useState('');

    function CheckoutDateHandler(e) {
        const _date = e.target.value;
        var _dateObj = new Date(_date);
        setCheckOutDate(_dateObj);
        setCheckoutDateNormal(_date);
    }

    function CheckinDateHandler(e) {
        console.log(e.target.value);
        var _checkinDate = new Date(e.target.value);
        setCheckInDate(_checkinDate);
        setCheckinDateNormal(e.target.value);
    }

    function RoomHandler(e) {
        var _totalRooms = e.target.value;
        setRoomSelected(_totalRooms);
    }

    function GuestHandler(e) {
        var _totalGuest = e.target.value;
        setTotalGuests(_totalGuest);
    }

    function detailHandler(e) {
        setDetail(e.target.value);
    }

    useEffect(() => {
        const totalDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        // Fix typo: per_day_charges
        var _totalCost = totalDays * roomDetail.per_day_charges * TotalGuests;
        setTotalCost(isNaN(_totalCost) ? 0 : _totalCost);
    }, [checkoutDateNormal, checkinDateNormal, TotalGuests]);

    const resetButtonRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState('');

    async function handleForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            'room_no': RoomSelected,
            'user': user.token,
            'total_guest': TotalGuests,
            'checkin_date': checkinDateNormal,
            'checkout_date': checkoutDateNormal,
            'booking_amount': TotalCost,
            'booking_details': detail,

            // 'room_no': '1',
            // 'user': '1',
            // 'total_guest': '10',
            // 'checkin_date': '2025-10-01',
            // 'checkout_date': '2025-10-06',
            // 'booking_amount': '900',
            // 'booking_details': 'Testing',

        };

        const res = await fetch('http://127.0.0.1:8000/api/booking/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const resData = await res.json();

        if (res.ok) {
            setErrorMsg(false);
            resetButtonRef.current.click();
            location.href = '/checkout'
        } else {
            let errorStr = '';
            console.log("wada karanne na");
            for (const [key, values] of Object.entries(resData)) {
                if (Array.isArray(values)) {
                    errorStr += values.join(' ');
                } else {
                    errorStr += values;
                }
            }
            setErrorMsg(errorStr);
        }
    }
    let bookingUrl = '';
    if (typeof window !== 'undefined') {
        bookingUrl = window.location.pathname;
    }

    if (user != null) {
        return (
            <>
                {/* Booking Form */}
                <div className="mt-3 mb-3 container">
                    <div className="card shadow-lg">
                        {errorMsg && <div className='alert alert-danger'>{errorMsg}</div>}
                        <div className="card-header bg-dark">
                            <h5 className="mb-0 text-white">Booking Form</h5>
                        </div>
                        <form onSubmit={handleForm}>
                            <div className="card-body">
                                <p>
                                    <strong>Room Type:</strong> {roomDetail.title}
                                </p>
                                <p>
                                    <strong>Charges:</strong> {roomDetail.per_day_charges} LKR per night
                                </p>
                                <div className="mb-3">
                                    <label className="form-label">Select Room</label>
                                    <select onChange={RoomHandler} className="form-select" name="_room_no" value={RoomSelected}>
                                        <option value="">--Please choose an option--</option>
                                        {
                                            roomList.map((row, index) => (
                                                <option key={row.id} value={row.id}>{row.room_no}</option>)
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Total Guests</label>
                                    <input type="number" onChange={GuestHandler} name='_totalGuest' className="form-control" value={TotalGuests} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Check-In</label>
                                    <input type="date" onChange={CheckinDateHandler} className="form-control" value={checkinDateNormal} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Check-Out</label>
                                    <input type="date" onChange={CheckoutDateHandler} className="form-control" value={checkoutDateNormal} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Detail</label>
                                    <input type="text" name='booking_detail' className="form-control" onChange={detailHandler} value={detail} />
                                </div>
                                <p>
                                    <strong><b>Total Amount:</b> {TotalCost}</strong>
                                </p>
                                <div className='col-auto w-100'>
                                    <button type="submit" className="btn header-button w-100 mb-2">Confirm Booking</button>
                                    <input type="reset" ref={resetButtonRef} className="btn btn-dark w-100 mb-2" value="Reset" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="alert alert-warning mt-3">
                Please <Link href="/user/login">login</Link> to book this room.
            </div>
        )
    }

} 
