'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Header() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Check for user data
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (e) {
                console.error("Error parsing user data:", e);
            }
        }
        setLoading(false);

        // Handle scroll effect
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return <div className="navbar-placeholder" style={{ height: '80px' }}></div>;
    }

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <header className={`fixed-top ${scrolled ? 'bg-glass' : ''}`}>
                {/* Hero image placeholder - replace with your actual image
                <div className="hero-background" style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100vh',
                    zIndex: -1,
                    opacity: scrolled ? 0 : 0.8
                }}></div> */}

                <nav className={`navbar navbar-expand-lg ${scrolled ? 'bg-glass scrolled' : 'bg-transparent'}`}>
                    <div className="container">
                        <Link className="navbar-brand fs-3 fw-bold" href="/" style={{ 
                            fontFamily: "'Playfair Display', serif",
                            color: '#AB8965',
                            letterSpacing: '1px'
                        }}>
                            HMS
                        </Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{ color: '#AB8965' }}></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'Gallery', href: '/gallery' },
                                    { name: 'Rooms', href: '/room_type' },
                                    { name: 'About Us', href: '/about_us' },
                                    { name: 'Contact Us', href: '/contact_us' }
                                ].map((item) => (
                                    <li className="nav-item mx-2" key={item.name}>
                                        <Link className="nav-link position-relative" href={item.href} style={{
                                            color: '#f8f9fa',
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {item.name}
                                            <span className="nav-link-underline" style={{
                                                position: 'absolute',
                                                bottom: '-2px',
                                                left: '0',
                                                width: '0',
                                                height: '2px',
                                                backgroundColor: '#AB8965',
                                                transition: 'width 0.3s ease'
                                            }}></span>
                                        </Link>
                                    </li>
                                ))}
                                
                                {  !user?.mobile && (
                                    <li className="nav-item ms-3">
                                        <Link className="btn btn-outline-light btn-sm px-3 py-2 rounded-0" href="/user/signup" style={{
                                            borderColor: '#AB8965',
                                            color: '#AB8965',
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: 500,
                                            transition: 'all 0.3s ease'
                                        }}>
                                            Sign Up
                                        </Link>
                                    </li>
                                )}
                                
                                {user?.mobile && (
                                    <>
                                        <li className="nav-item ms-3">
                                            <Link className="btn btn-outline-danger btn-sm px-3 py-2 rounded-0" href="/user/logout" style={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 500,
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Log Out
                                            </Link>
                                        </li>
                                        <li className="nav-item ms-3">
                                            <Link className="btn btn-primary btn-sm px-3 py-2 rounded-0" href="/book_event" style={{
                                                backgroundColor: '#AB8965',
                                                borderColor: '#AB8965',
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 500,
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Book Events
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <style jsx global>{`
                .bg-glass {
                    background: rgba(0, 0, 0, 0.7) !important;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover .nav-link-underline {
                    width: 100% !important;
                }
                
                .nav-link:hover {
                    color: #AB8965 !important;
                }
                
                .btn-outline-light:hover {
                    background-color: #AB8965 !important;
                    color: #fff !important;
                    border-color: #AB8965 !important;
                }
                
                .navbar {
                    padding: 15px 0;
                    transition: all 0.3s ease;
                }
                
                .scrolled {
                    padding: 10px 0 !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </>
    );
}