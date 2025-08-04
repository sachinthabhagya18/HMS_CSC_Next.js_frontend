import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  // Sample image URLs from placeholder services
  const images = {
    hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    team1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    team2: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    team3: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    team4: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  };

  const teamMembers = [
    { id: 1, name: "Sarah Johnson", position: "General Manager", image: images.team1 },
    { id: 2, name: "Michael Chen", position: "Head Chef", image: images.team2 },
    { id: 3, name: "Emma Rodriguez", position: "Guest Relations", image: images.team3 },
    { id: 4, name: "David Kim", position: "Operations Manager", image: images.team4 }
  ];

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Main Content */}
        <div className="col-md-12 col-lg-12 px-5 py-5">
          {/* Hero Section */}
          <div className="row align-items-center mb-5 py-5 bg-light rounded-3">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">Our Story</h1>
              <p className="lead">
                Founded in 2010, we've been providing exceptional hospitality services with a personal touch that makes all the difference.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={images.hero}
                alt="Luxury hotel lobby"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
                priority
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4">Our Mission</h2>
                  <p className="text-center fs-5">
                    "To create unforgettable experiences by combining luxurious comfort with genuine hospitality, 
                    making every guest feel valued and every stay memorable."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center mb-5">Meet Our Team</h2>
              <div className="row g-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="col-md-6 col-lg-3">
                    <div className="card h-100 border-0 shadow-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="card-img-top"
                        style={{ objectFit: 'cover', height: '250px' }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{member.name}</h5>
                        <p className="card-text text-muted">{member.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center mb-4">Our Core Values</h2>
              <div className="row g-4">
                {[
                  { icon: '👑', title: 'Excellence', desc: 'We strive for perfection in every detail' },
                  { icon: '❤️', title: 'Hospitality', desc: 'Genuine care for our guests is our priority' },
                  { icon: '🌱', title: 'Sustainability', desc: 'Committed to eco-friendly practices' },
                  { icon: '🤝', title: 'Integrity', desc: 'Honest and transparent in all dealings' }
                ].map((value, index) => (
                  <div key={index} className="col-md-6 col-lg-3">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <div className="display-4 mb-3">{value.icon}</div>
                        <h5>{value.title}</h5>
                        <p className="text-muted">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="row">
            <div className="col-12">
              <div className="card bg-primary text-white">
                <div className="card-body p-5 text-center">
                  <h2 className="mb-4">Ready to Experience Our Hospitality?</h2>
                  <Link href="/booking" className="btn btn-light btn-lg px-5">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}