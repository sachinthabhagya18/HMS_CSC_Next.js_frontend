import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="container service-card">
            <div className="icon-container">
                <img src={icon} alt={title} className="service-icon" />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
        </div>
    );
};

const ServicesGrid = () => {
    const services = [
        {
            title: "Restaurant",
            icon: "/images/icons/balcony.png",
            description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
        },
        {
            title: "Spa & Massage",
            icon: "/images/icons/bed.png",
            description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
        },
        {
            title: "Swimming Pool",
            icon: "/images/icons/shower.png",
            description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
        },
        {
            title: "Meeting Room",
            icon: "/images/icons/desk.png",
            description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
        },
        {
            title: "Fitness Center",
            icon: "/images/icons/city.png",
            description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
        },
        {
            title: "Laundry Service",
            icon: "/images/icons/guests.png",
            description: "Do dolore laboris commodo amet cillum qui voluptate velit occaecat adipisicing laboris est minim."
        }
    ];

    return (
        <div className="services-container">
            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;