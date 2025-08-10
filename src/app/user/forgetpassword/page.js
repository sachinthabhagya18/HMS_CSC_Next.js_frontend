'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg(''); // Clear previous errors
    
    const formData = new FormData(e.target);
    const mobile = formData.get('mobile').trim(); // Trim whitespace

    // Basic client-side validation
    if (!mobile) {
      setErrorMsg('Mobile number is required');
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/api/mobile-validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile })
      });

      const resData = await res.json();

      if (!res.ok) {
        // Handle different error response formats
        const errorMessage = resData.error || 
                           resData.message || 
                           (resData.detail ? resData.detail : 'Mobile validation failed');
        throw new Error(errorMessage);
      }

      // Success case
      localStorage.setItem('forgetmobile', mobile);
      router.push('/user/otp-validation');
      
    } catch (error) {
      setErrorMsg(error.message);
      console.error('Validation error:', error);
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="h4 text-center">Forgot Password</h1>
            </div>
            <div className="card-body">
              {errorMsg && (
                <div className="alert alert-danger">
                  {errorMsg}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"  // Better for mobile number input
                    className="form-control"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    required
                    pattern="[0-9]{10}"  // Basic pattern for 10 digits
                    title="Please enter a 10-digit mobile number"
                  />
                </div>
                <div className="d-grid gap-2 mb-3">
                  <button type="submit" className="btn btn-primary">
                    Send OTP
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Not registered? <Link href="/user/signup" className="text-primary">Sign up here</Link>
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