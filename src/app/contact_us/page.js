
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Navigation - Consistent with your other pages */}
        <div className="col-md-3 col-lg-2 bg-light sidebar">
          <div className="sidebar-sticky pt-3">
            {/* Include your DashboardSlider or navigation component */}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 px-4 py-3">
          <h1 className="mb-4">Contact Us</h1>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form >
                    {/* Name Field */}
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Full name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-bold">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email"
                        required
                      />
                    </div>

                    {/* Mobile Field */}
                    <div className="mb-4">
                      <label htmlFor="mobile" className="form-label fw-bold">Your Mobile</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="mobile" 
                        placeholder="Mobile"
                        required
                      />
                    </div>

                    {/* Captcha Field */}
                    <div className="mb-4">
                      <label className="form-label fw-bold d-block">
                        Captcha Code -
                        <button 
                          type="button" 
                          className="btn btn-sm btn-link ms-2"
                        >
                          Refresh
                        </button>
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter captcha code"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">Your Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="5"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>

                    {/* Form Buttons */}
                    <div className="d-flex justify-content-between">
                      <button type="reset" className="btn btn-secondary px-4">
                        Reset
                      </button>
                      <button type="submit" className="btn btn-primary px-4">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-4">Our Information</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                      123 Hotel Street, City, Country
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-telephone-fill me-2 text-primary"></i>
                      +1 234 567 890
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-envelope-fill me-2 text-primary"></i>
                      info@hotelname.com
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-clock-fill me-2 text-primary"></i>
                      24/7 Customer Support
                    </li>
                  </ul>
                  <hr />
                  <h6 className="mt-4">Follow Us</h6>
                  <div className="d-flex gap-3 mt-3">
                    <Link href="#" className="text-primary fs-4">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link href="#" className="text-primary fs-4">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="#" className="text-primary fs-4">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="#" className="text-primary fs-4">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}