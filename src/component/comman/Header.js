'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Header() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (e) {
                console.error("Error parsing user data:", e);
            }
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="navbar-placeholder" style={{ height: '70px' }}></div>;
    }
    // Conflicting
    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm sticky-top"
            style={{ backgroundColor: '#AB8965' }}
            data-bs-theme="dark"
        >
            <div className="container">
                {/* Logo and Brand */}
                <Link className="navbar-brand d-flex align-items-center fs-4" href="/">
                    <img
                        src="/logo.jpg" // Put your logo inside the public folder
                        alt="Logo"
                        width="40"
                        height="40"
                        className="me-2 rounded-circle"
                    />
                    <span className="fw-bold">HMS</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {['Home', 'Gallery', 'Rooms', 'About Us', 'Contact Us'].map((label, idx) => (
                            <li className="nav-item mx-2" key={idx}>
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    href={label === 'Home' ? '/' : `/${label.toLowerCase().replace(" ", "_")}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}

                        {!user?.mobile && (
                            <li className="nav-item mx-2">
                                <Link className="btn btn-outline-light btn-sm" href="/user/signup">
                                    Sign Up
                                </Link>
                            </li>
                        )}

                        {user?.mobile && (
                            <>
                                <li className="nav-item mx-2">
                                    <Link className="btn btn-outline-danger btn-sm" href="/user/logout">
                                        Log Out
                                    </Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="btn btn-light btn-sm" href="/book_event">
                                        Book Events
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
