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
            <DashboardSlider />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 px-4 py-3">
          <h1 className="mb-4">Payment Logs</h1>

          {/* Payment Table Section */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Payment Date</th>
                      <th>Detail</th>
                      <th>Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Payment Row 1 */}
                    <tr>
                      <td rowSpan="2" className="align-middle">20/04/2024</td>
                      <td>2 Rooms</td>
                      <td rowSpan="2" className="align-middle">HMS-123</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex flex-column">
                          <span>20/04/2024 - 25/04/2024</span>
                          <span>2 Guest</span>
                        </div>
                      </td>
                    </tr>
                    {/* Amount Row */}
                    <tr className="border-top-0">
                      <td colSpan="2" className="border-top-0"></td>
                      <td className="fw-bold border-top-0">15,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}