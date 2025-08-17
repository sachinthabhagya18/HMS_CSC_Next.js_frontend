'use client';
import DashboardSlider from '@/component/user/DashboardSidebar';
import BookingHistory from './BookingHistory';

export default function page() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3 col-lg-2 bg-light sidebar">
          <div className="sidebar-sticky pt-3">
            <DashboardSlider />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 px-4 py-3">
          <h1 className="mb-4">Total Bookings</h1>

          {/* Booking Table Section */}
          <div className="card mb-4">
            <div className="card-body">
              <BookingHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}