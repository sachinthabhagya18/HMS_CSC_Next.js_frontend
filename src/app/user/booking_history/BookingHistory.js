'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
export default function BookingHistory() {

    var user = localStorage.getItem('user');
    var userData = JSON.parse(user);
    var user_id = userData.user_id;

    const [BookingData, setBookingData] = useState([]);

    async function myBookings() {
        const res = await fetch(`http://127.0.0.1:8000/api/my-bookings/${user_id}/`);
        const data = await res.json();
        setBookingData(data.results);
    }

    useEffect(() => {

        myBookings();
    }, []);

    console.log("Booking Data: ", BookingData);

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Booking Date</th>
                        <th>Detail</th>
                        <th>Invoice</th>
                        <th className="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        BookingData.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.formatted_date}</td>
                                <td>
                                    <div className="d-flex flex-column">
                                        <span>Room No : {booking.room_no}</span>
                                        <span>{booking.checkin_date} - {booking.checkout_date}</span>
                                        <span>{booking.total_guest} Guest</span>
                                        <span>Booking Status : {booking.status}</span>
                                    </div>
                                </td>
                                <td>HMS Invoice #{booking.id}<br />
                                    {booking.booking_amount}</td>
                                <td className="text-end">
                                    <div className="d-flex justify-content-end gap-2">
                                        <button className="btn btn-sm btn-success">Approve</button>
                                        <button className="btn btn-sm btn-danger">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );

}