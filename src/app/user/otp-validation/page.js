'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      otp: formData.get('otp'),
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/otp-validation', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || 'OTP validation failed');
      }

      router.push('/user/change-password');
    } catch (error) {
      setErrorMsg(error.message);
      console.error('Error:', error);
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="h4 text-center">Enter OTP</h1>
            </div>
            {errorMsg && <div className='alert alert-danger'>{errorMsg}</div>}
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                    name="otp"
                    placeholder="Enter your OTP"
                    required
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