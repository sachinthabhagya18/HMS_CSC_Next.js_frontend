import RoomTypeImages from "@/component/RoomTypeImages";
import BookingForm from "@/component/rooms/BookingForm";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

async function getData(uuid) {
  const res = await fetch(`http://127.0.0.1:8000/api/room-type/` + uuid, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

async function getRooms(uuid) {
  const res = await fetch(`http://127.0.0.1:8000/api/rooms/` + uuid + '/', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const uuid = params.slug
  const roomDetail = await getData(uuid);
  const rooms = await getRooms(uuid);
  console.log(rooms);
  return (
    <main>
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Room Image */}
          <div className="col-md-6">
            <RoomTypeImages images={roomDetail.room_type_imgs} />
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

            <h4 className="text-primary">LKR {roomDetail.per_day_charges} /Night</h4>
          </div>
        </div>
      </div>

      <BookingForm roomDetail={roomDetail} rooms={rooms} />
    </main>
  );
}
