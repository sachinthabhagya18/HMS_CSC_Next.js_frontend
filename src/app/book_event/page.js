import RoomTypeImages from "@/component/RoomTypeImages";
import Link from "next/link";
export default function page() {
  return (
    <main>
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Event Image */}
          <div className="col-md-6">
            <RoomTypeImages/>
          </div>

          {/* Event Details */}
          <div className="col-md-6">
            <h1 className="mb-3">Book Event</h1>
            
            {/* Event Type Selection */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title mb-3">Event Type</h3>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="eventType" id="birthdayParty" checked />
                  <label className="form-check-label" htmlFor="birthdayParty">
                    Birthday Party
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="eventType" id="birthdayParty" checked />
                  <label className="form-check-label" htmlFor="birthdayParty">
                    Bright To Be Party
                  </label>
                </div>
                {/* Add more event types here if needed */}
                
                <div className="mt-4">
                  <h4 className="fw-bold mb-3">Event Detail</h4>
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    placeholder="Enter your event details..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="card shadow-sm mt-4">
          <div className="card-header bg-light">
            <h3 className="mb-0">Booking Summary</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4 className="fw-bold mb-3">Total Guest</h4>
                <input 
                  type="number" 
                  className="form-control mb-3" 
                  placeholder="Enter number of guests"
                />
              </div>
              
              <div className="col-md-6">
                <h4 className="fw-bold mb-3">Event Date</h4>
                <input 
                  type="date" 
                  className="form-control mb-3" 
                  placeholder="yyyy-mm-dd"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <h4 className="fw-bold">Total Cost</h4>
                <h2 className="text-primary">Rs. 57,896</h2>
              </div>
            </div>

            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-primary btn-lg">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}