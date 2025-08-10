'use client'; // This directive marks the component as a Client Component in Next.js

import { useState } from 'react';

export default function RoomBookingUI() {
    // State variables to manage form inputs
    const [roomType, setRoomType] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    // Dummy room types for the dropdown
    const roomTypes = [
        { value: '', label: 'Select Room Type' },
        { value: 'standard', label: 'Standard Room' },
        { value: 'deluxe', label: 'Deluxe Room' },
        { value: 'suite', label: 'Executive Suite' },
        { value: 'family', label: 'Family Room' },
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // In a real application, you would send this data to your backend
        console.log({
            roomType,
            checkInDate,
            checkOutDate,
            adults,
            children,
        });
        // You might want to show a success message or navigate to a confirmation page
        alert('Booking details submitted! (Check console for data)'); // Using alert for demonstration, replace with a custom modal in production
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="card shadow-lg bg-dark border-0 rounded-4 overflow-hidden">
                        <div className="card-header text-white text-center py-4">
                            <h2 className="mb-0 fw-bold">Book Your Stay</h2>
                            <p className="lead mb-0">Find the perfect room for your next getaway.</p>
                        </div>
                        <div className="card-body p-4 p-md-5">
                            <form onSubmit={handleSubmit}>
                                {/* Room Type Selection */}
                                <div className="mb-4">
                                    <label htmlFor="roomType" className="form-label fw-semibold">
                                        Room Type
                                    </label>
                                    <select
                                        className="form-select form-select-lg rounded-3"
                                        id="roomType"
                                        value={roomType}
                                        onChange={(e) => setRoomType(e.target.value)}
                                        required
                                    >
                                        {roomTypes.map((type) => (
                                            <option key={type.value} value={type.value} disabled={type.value === ''}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Check-in and Check-out Dates */}
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="checkInDate" className="form-label fw-semibold">
                                            Check-in Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control form-control-lg rounded-3"
                                            id="checkInDate"
                                            value={checkInDate}
                                            onChange={(e) => setCheckInDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <label htmlFor="checkOutDate" className="form-label fw-semibold">
                                            Check-out Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control form-control-lg rounded-3"
                                            id="checkOutDate"
                                            value={checkOutDate}
                                            onChange={(e) => setCheckOutDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Number of Guests */}
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <label htmlFor="adults" className="form-label fw-semibold">
                                            Adults
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg rounded-3"
                                            id="adults"
                                            value={adults}
                                            onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))} // Ensure at least 1 adult
                                            min="1"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <label htmlFor="children" className="form-label fw-semibold">
                                            Children
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg rounded-3"
                                            id="children"
                                            value={children}
                                            onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))} // Ensure at least 0 children
                                            min="0"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark btn-lg rounded-pill fw-bold" style={{ backgroundColor: '#AB8965' }}>
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
