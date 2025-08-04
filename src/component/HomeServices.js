import Link from "next/link";
export default function HomeServices() {
    return (
        <div className=" row grid text-center" >
            <h1 className="mb-3">Services</h1>
            <div className="col-4">
                <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Room Type</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <Link href="/room_type" className="btn btn-primary">View More</Link>
                </div>
            </div>
            <div className="col-4">
                <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Events</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="col-4">
                <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Online Booking</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>

                </div>
            </div>
        </div>
    );
}