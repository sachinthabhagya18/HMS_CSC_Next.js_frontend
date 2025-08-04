
export default function HomeRewiew() {
    return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3">Customer Reviews</h2>
            <p className="lead text-muted">
              Don't just take our word for it. Here's what our customers say about us.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Review Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <span className="text-primary fw-bold">JD</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-0">John Doe</h5>
                    <div className="text-warning">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  "The product quality is amazing! It exceeded all my expectations. Will definitely buy again."
                </p>
                <small className="text-muted">Posted on March 15, 2023</small>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <span className="text-success fw-bold">AS</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-0">Alice Smith</h5>
                    <div className="text-warning">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  "Great customer service and fast shipping. The product works perfectly for my needs."
                </p>
                <small className="text-muted">Posted on January 28, 2023</small>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="bg-info bg-opacity-10 rounded-circle p-3">
                      <span className="text-info fw-bold">RJ</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-0">Robert Johnson</h5>
                    <div className="text-warning">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  "Very satisfied with my purchase. The quality is excellent and it arrived earlier than expected."
                </p>
                <small className="text-muted">Posted on February 10, 2023</small>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary px-4 py-2">
            View All Reviews <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </section>
       
    );
}