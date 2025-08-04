import BarChart from '@/component/user/BarChart';
import DashboardSlider from '@/component/user/DashboardSidebar';
import Link from 'next/link';
export default function page() {
  return (
  <div className="container-fluid">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3 col-lg-2 bg-light sidebar">
          <div className="sidebar-sticky pt-3">
           <DashboardSlider/>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 px-4 py-3">
          <h1 className="mb-4">Total Bookings</h1>
          
          <div className="row">
            {/* Total Bookings Card */}
            <div className="col-md-6 mb-4">
              <div className="card border-primary">
                <div className="card-body text-center">
                  <h2 className="card-title display-4">123</h2>
                  <p className="card-text text-muted">Total Bookings</p>
                </div>
              </div>
            </div>

            {/* Total Payments Card */}
            <div className="col-md-6 mb-4">
              <div className="card border-success">
                <div className="card-body text-center">
                  <h2 className="card-title display-4">25,000</h2>
                  <p className="card-text text-muted">Total Payments</p>
                </div>
              </div>
            </div>
          </div>

           <div className="row">
            <div className="col-md-12 mb-4">
              <BarChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
