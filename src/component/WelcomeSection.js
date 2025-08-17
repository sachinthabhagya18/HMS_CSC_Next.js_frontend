'use client'; // Required for Next.js if using App Router

export default function WelcomeSection() {
    return (
        <section className="container position-relative py-5 bg-light overflow-hidden">
            <div className="container position-relative">
                <div className="row g-4 align-items-center">
                    {/* Left Image - Parallax */}
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="position-relative wow fadeInUp" data-wow-delay="0.3s"
                            style={{
                                height: "400px",
                                overflow: "hidden",
                                borderRadius: "1rem",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                            }}>
                            <div className="parallax-image"
                                style={{
                                    backgroundImage: "url('/images/misc/2.webp')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "100%",
                                    transform: "scale(1.05)",
                                    willChange: "transform"
                                }}></div>
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="col-lg-4 text-center px-4">
                        <div className="wow fadeIn">
                            <div className="text-primary mb-2 fs-6 fw-bold letter-spacing-1">WELCOME TO ALMARIS</div>
                            <h2 className="wow fadeInUp mb-4 display-5 fw-bold" style={{ lineHeight: "1.3" }}>
                                Exceptional Hospitality & Unmatched Relaxation
                            </h2>

                            <div className="text-center wow fadeInUp" data-wow-delay="0.5s">
                                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                                    <h4 className="fw-bold mb-0 text-dark">4.9</h4>
                                    <div className="fs-5">
                                        <span className="d-flex text-warning">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="bi bi-star-fill"></i>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                <span className="d-block fs-6 text-muted">Based on 25,000+ guest reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image - Parallax */}
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="position-relative wow fadeInUp" data-wow-delay="0.3s"
                            style={{
                                height: "400px",
                                overflow: "hidden",
                                borderRadius: "1rem",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                            }}>
                            <div className="parallax-image"
                                style={{
                                    backgroundImage: "url('/images/misc/3.webp')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "100%",
                                    transform: "scale(1.05)",
                                    willChange: "transform"
                                }}></div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                {/* <div className="row g-4">
                    {[
                        {
                            title: "Gourmet Restaurant",
                            icon: "/images/svg/restaurant-svgrepo-com.svg",
                            description: "Experience world-class dining with our award-winning chefs and carefully curated menus."
                        },
                        // ... other features
                    ].map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                            <div className="position-relative p-4 bg-white rounded-3 h-100 transition-all hover-shadow">
                                <div className="position-absolute top-0 start-0 translate-middle-y ms-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: "60px", height: "60px" }}>
                                        <img
                                            src={feature.icon}
                                            className="w-50"
                                            alt={feature.title}
                                            style={{ filter: "brightness(0) saturate(100%) invert(44%) sepia(55%) saturate(2036%) hue-rotate(194deg) brightness(93%) contrast(101%)" }}
                                        />
                                    </div>
                                </div>
                                <div className="ps-5 mt-3">
                                    <h4 className="fs-5 fw-bold mb-3">{feature.title}</h4>
                                    <p className="mb-0 text-muted">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* Add this to your global CSS */}
            <style jsx>{`
                @media (min-width: 992px) {
                    .parallax-image {
                        transition: transform 0.3s ease-out;
                    }
                    
                    .parallax-image:hover {
                        transform: scale(1.1);
                    }
                    
                    section:hover .parallax-image {
                        transform: translateY(calc(var(--scroll-y) * 0.2)) scale(1.05);
                    }
                }
            `}</style>
        </section>
    );
}