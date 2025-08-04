import RoomTypeImages from "@/component/RoomTypeImages";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

async function getData(uuid) {
    const res = await fetch(`http://127.0.0.1:8000/api/room-type/`+uuid, {cache: 'no-store'});    
    const data = await res.json();
    return data;
}
export default async function page({params}) {
  const uuid = params.slug
  const roomDetail = await getData(uuid);
  return (
    <main>
      
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Room Image */}
          <div className="col-md-6">
            <RoomTypeImages images={roomDetail.room_type_imgs}/>
          </div>

          {/* Room Details */}
          <div className="col-md-6">
            <h2 className="mb-3">{roomDetail.title}</h2>
            <p className="text-muted">
              Spacious deluxe room designed for comfort and relaxation.
            </p>

            <ul className="list-group mb-3">
              <li className="list-group-item">
                <p>
                    {roomDetail.details['airconditioning'] == "yes" && <span>Air-conditioning: ✅</span>}
                    {!roomDetail.details.airconditioning && <span>Air-conditioning: ⛔</span>}
                  </p>
              </li>
              <li className="list-group-item">
                  <p>
                    {roomDetail.details?.wifi === "yes" ? (
                      <span>WiFi: ✅</span>
                    ) : (
                      <span>WiFi: ⛔</span>
                    )}
                  </p>
              </li>
              <li className="list-group-item">
                <p>
                    {roomDetail.details?.tv === "yes" ? (
                      <span>TV: ✅</span>
                    ) : (
                      <span>TV: ⛔</span>
                    )}
                  </p>
              </li>
              <li className="list-group-item">
                <p>
                    {roomDetail.details?.bathroom === "yes" ? (
                      <span>Bathroom: ✅</span>
                    ) : (
                      <span>Bathroom: ⛔</span>
                    )}
                  </p>
              </li>
              <li className="list-group-item">
                <p>
                    {roomDetail.details?.safe === "yes" ? (
                      <span>Safe: ✅</span>
                    ) : (
                      <span>Safe: ⛔</span>
                    )}
                  </p>
              </li>
            </ul>

            <h4 className="text-primary">LKR 12,000 / night</h4>
          </div>
        </div>

        {/* Booking Form */}
         <div className="card shadow-sm">
      <div className="card-header bg-light">
        <h5 className="mb-0">Booking Form</h5>
      </div>
      <div className="card-body">
        <p>
          <strong>Room Type:</strong> {roomDetail.title}
        </p>
        <p>
          <strong>Charges:</strong> 1500/Night
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label">Total Guest</label>
            <input type="number" className="form-control" placeholder="Enter number of guests" />
          </div>

          <div className="mb-3">
            <label className="form-label">Check-In</label>
            <input type="date" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Check-Out</label>
            <input type="date" className="form-control" />
          </div>

          <Link href='/checkout' className="btn btn-primary w-100" style={{ backgroundColor: '#660066', borderColor: '#660066' }}>
            Confirm Booking
          </Link>
        </form>
      </div>
    </div>
      </div>
    </main>
  );
}
