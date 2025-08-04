import Link from 'next/link';
export default function page() {
  return (
  <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="h4 text-center">Forget Password</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmEmail" className="form-label">Confirm Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="confirmEmail" 
                    placeholder="Re-enter your email address"
                  />
                </div>

                <div className="d-grid gap-2 mb-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>

                <div className="text-center">
                  <p>
                    If you are not registered user, <Link href="/user/signup" className="text-primary">SignUp here</Link>
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
