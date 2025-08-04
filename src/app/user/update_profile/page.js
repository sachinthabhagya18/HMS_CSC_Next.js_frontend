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
          <h1 className="mb-4">Update Profile</h1>

          <div className="card mb-4">
            <div className="card-body">
              <form>
                {/* Profile Picture Section */}
                <div className="row mb-4 align-items-center">
                  <div className="col-md-2">
                    <div className="d-flex flex-column align-items-center">
                      <div 
                        className="rounded-circle bg-secondary mb-2" 
                        style={{ width: '100px', height: '100px' }}
                      ></div>
                      <small className="text-muted">500x500</small>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Username, Mobile, Email Section */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">Mobile</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="mobile" 
                        placeholder="Mobile"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="d-flex justify-content-between mt-4">
                  <button type="reset" className="btn btn-secondary px-4">Reset</button>
                  <button type="submit" className="btn btn-primary px-4">Submit</button>
                </div>

                {/* Change Password Link */}
                <div className="text-center mt-4">
                  <p className="mb-0">
                    If you want to change your password, <Link href="/user/change_password" className="text-primary">Click here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}