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
          <h1 className="mb-4">Change Password</h1>

          <div className="card mb-4">
            <div className="card-body">
              <form>
                {/* Password Fields Section */}
                <div className="row mb-4">
                  <div className="col-md-6 offset-md-3">
                    <div className="mb-4">
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="newPassword" 
                        placeholder="********"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="********"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button type="reset" className="btn btn-secondary px-4">Reset</button>
                  <button type="submit" className="btn btn-primary px-4">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}