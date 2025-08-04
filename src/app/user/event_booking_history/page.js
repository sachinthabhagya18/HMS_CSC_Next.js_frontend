import DashboardSlider from '@/component/user/DashboardSidebar';
import Link from 'next/link';

export default function page() {
  // Sample event bookings data
  const bookings = [
    {
      id: 1,
      date: '20/05/2024',
      eventType: 'Birthday Party',
      guestCount: '50 guest',
      invoice: 'HMS-EVT-123',
      amount: '15,000',
      status: 'Due',
      actions: ['Cancel', 'Pay Now']
    },
    {
      id: 2,
      date: '20/05/2024',
      eventType: 'Birthday Party',
      guestCount: '50 guest',
      invoice: 'HMS-EVT-124',
      amount: '15,000',
      status: 'Paid',
      actions: ['Support']
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Due':
        return <span className="badge bg-warning text-dark">{status}</span>;
      case 'Paid':
        return <span className="badge bg-success">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const getActionButton = (action) => {
    switch(action) {
      case 'Cancel':
        return <button className="btn btn-sm btn-danger">{action}</button>;
      case 'Pay Now':
        return <button className="btn btn-sm btn-primary">{action}</button>;
      case 'Support':
        return <button className="btn btn-sm btn-info text-white">{action}</button>;
      default:
        return <button className="btn btn-sm btn-secondary">{action}</button>;
    }
  };

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
          <h1 className="mb-4">Event Bookings</h1>

          {/* Bookings Table Section */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Date</th>
                      <th>Detail</th>
                      <th>Invoice</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.date}</td>
                        <td>
                          <div className="d-flex flex-column">
                            <span className="fw-bold">{booking.eventType}</span>
                            <span>{booking.guestCount}</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex flex-column">
                            <span>{booking.invoice}</span>
                            <span className="fw-bold">{booking.amount}</span>
                            {getStatusBadge(booking.status)}
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-flex justify-content-end gap-2">
                            {booking.actions.map((action, index) => (
                              <div key={index}>
                                {getActionButton(action)}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
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