import Link from "next/link";
import styles from "./HomeServices.module.css"; // Import the CSS module

export default function HomeServices() {
    return (

        <div className="text-center">
            <h1 className="mb-5 mt-5">Services</h1>
            <div className={styles.servicesContainer}>
                {/* Room Type Card */}
                <div className={styles.serviceCard}>
                    <img src="https://placehold.co/600x400" className={styles.cardImage} alt="Room Types" />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>Room Types</h5>
                        <p className={styles.cardText}>Discover our variety of rooms, from cozy singles to luxurious suites, all designed for your comfort.</p>
                        <Link href="/room_type" className="btn btn-primary">More</Link>
                    </div>
                </div>

                {/* Events Card */}
                <div className={styles.serviceCard}>
                    <img src="https://placehold.co/600x400" className={styles.cardImage} alt="Events" />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>Events</h5>
                        <p className={styles.cardText}>Host your next memorable event with us. We offer versatile spaces perfect for any occasion.</p>
                        <a href="#" className="btn btn-primary">More</a>
                    </div>
                </div>

                {/* Online Booking Card */}
                <div className={styles.serviceCard}>
                    <img src="https://placehold.co/600x400" className={styles.cardImage} alt="Online Booking" />
                    <div className={styles.cardBody}>
                        <h5 className={styles.cardTitle}>Online Booking</h5>
                        <p className={styles.cardText}>Book your stay effortlessly with our simple and secure online reservation system.</p>
                        <a href="#" className="btn btn-primary">More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}