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
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Contact Us</h1>
            <div className="text-muted">
              <span className="fw-bold">Name</span> &gt; Contact Us
            </div>
          </div>

          <p className="mb-5">Have a question or need assistance with your booking? Our dedicated team is available around the clock to provide you with prompt and friendly service.</p>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h2 className="mb-4">Write a Message</h2>
                  <form>
                    {/* Name Field */}
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-dark" 
                        id="name" 
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-dark" 
                        id="email" 
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4">
                      <label htmlFor="phone" className="form-label">Your Phone</label>
                      <input 
                        type="tel" 
                        className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-dark" 
                        id="phone" 
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea 
                        className="form-control border-top-0 border-start-0 border-end-0 rounded-0 border-dark" 
                        id="message" 
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    {/* Form Buttons */}
                    <div className="d-flex justify-content-end mt-5">
                      <button type="submit" className="btn btn-dark px-4 rounded-0">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="border-top border-dark pt-4 mb-5">
                <h2 className="mb-4">ALMARIS</h2>
                <p className="mb-4">7:42 Evergreen Terrace<br />Brooklyn, NY 11201</p>
              </div>

              <div className="border-top border-dark pt-4">
                <h2 className="mb-4">ALMARIS</h2>
                <p className="mb-1">Contact Us</p>
                <p className="mb-1">T. +979 333 9766</p>
                <p className="mb-4">M. contact@almaris.com</p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-top border-dark text-center">
            <p className="text-muted mb-1">Buy us 4 months</p>
            <p className="text-muted">Copyright 2025 - Almost by Designable</p>
          </div>
        </div>
      </div>
    </div>
  );
}