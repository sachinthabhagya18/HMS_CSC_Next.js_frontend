import React from 'react';
import Image from 'next/image';
import { url } from 'inspector';
import styles from './AboutUs.module.css';


const About = () => {
  return (
    <main>

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="position-relative" style={{
          height: '50vh',
          backgroundImage: 'url("/images/background/3.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="d-flex flex-column justify-content-center align-items-center text-white text-center h-100">
            <h1 className="display-3 fw-bold mb-2">About Us</h1>
            <p className="h4">Home / About Us</p>
          </div>
        </section>

        {/* History Section */}

        <section className="py-5 px-3 px-lg-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="h3 text-muted">Welcome</h2>
                <h3 className="display-4 fw-bold mt-3 mb-4">History of Our Hotel</h3>
                <p className="lead text-muted">
                  For almost 30 years we have offered a refined experience of comfort,
                  blending tradition with modern amenities. From the moment you step in,
                  you'll feel at home in a place designed with elegance and care.
                </p>
              </div>

              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="text-center " style={{ backgroundColor: '#AB8965', color: 'white' }}>
                      <h4 className="display-3 fw-bold">105%</h4>
                      <p className="h5">Menu Selection</p>
                      <div className="mt-4">
                        <Image
                          src="/images/misc/8.webp"
                          alt="Menu Selection"
                          width={300}
                          height={150}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center  mt-5" style={{ backgroundColor: '#AB8965', color: 'white' }}>
                      <Image
                        src="/images/misc/7.webp"
                        alt="Rooms Available"
                        width={300}
                        height={150}
                        className="img-fluid"
                      />
                      <h4 className="display-3 fw-bold mt-4">120+</h4>
                      <p className="h5">Rooms Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Our Team Section */}
        <section className="py-5 px-3 px-lg-5" style={{
          background: 'linear-gradient(to bottom, #AB8965, white)'
        }}>
          <div className="container text-center mb-5">
            <h2 className="h2">Behind the Scene</h2>
            <h3 className="display-4 fw-bold mt-2">Our Team</h3>
          </div>
          <div className="container">
            <div className="row g-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="col-12 col-sm-6 col-md-3">
                  <div className={`shadow rounded p-3 text-center ${styles['team-card']}`} style={{ backgroundColor: '#FFF5ED' }}>
                    <Image
                      src={`/images/team/${item}.webp`}
                      alt="Team member"
                      width={400}
                      height={200}
                      className="img-fluid"
                    />
                    <h4 className="h5 fw-semibold mt-3">Jeffery Mixman</h4>
                    <p className="text-muted small">Senior Manager</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Room Facilities Section */}

        <section className="py-5 px-3 px-md-5 px-lg-24 bg-white">
          <div className="container">
            {/* Header Section */}
            <div className="text-start mb-5">
              <h2 className="display-4 fw-bold">Room Facilities</h2>
            </div>

            {/* Your Specific Code Block - Modified for Bootstrap */}
            <div className="row g-4 justify-content-center">
              {/* Left Facilities Column */}
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column gap-4">
                  {[
                    { name: 'Cable TV', icon: "/images/icons/tv.png" },
                    { name: 'Free Wifi', icon: "/images/icons/wifi.png" },
                    { name: 'Balcony', icon: '/images/icons/balcony.png' },
                  ].map((facility, index) => (
                    <div key={index} className="d-flex align-items-start gap-3">
                      <img
                        src={facility.icon}
                        alt={facility.name + ' icon'}
                        width={24}
                        height={24}
                        className="mt-1"
                      />
                      <div>
                        <h4 className="fs-5 fw-semibold">{facility.name}</h4>
                        <p className="text-muted small">Some description about {facility.name} facility.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Facilities Column */}
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column gap-4">
                  {[
                    { name: 'Work Desk', icon: "/images/icons/desk.png" },
                    { name: 'Safebox', icon: "/images/icons/safebox.png" },
                    { name: 'City View', icon: '/images/icons/city.png' },
                  ].map((facility, index) => (
                    <div key={index} className="d-flex align-items-start gap-3">
                      <img
                        src={facility.icon}
                        alt={facility.name + ' icon'}
                        width={24}
                        height={24}
                        className="mt-1"
                      />
                      <div>
                        <h4 className="fs-5 fw-semibold">{facility.name}</h4>
                        <p className="text-muted small">Some description about {facility.name} facility.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="row mt-5 g-4">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <Image
                  src="/images/misc/9.webp"
                  alt="Room"
                  width={400}
                  height={300}
                  className="rounded-lg w-80 h-auto"
                  priority
                />
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <Image
                  src="/images/misc/10.webp"
                  alt="Room"
                  width={400}
                  height={300}
                  className="rounded-lg w-80 h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;