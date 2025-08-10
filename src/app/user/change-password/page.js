'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DashboardSlider from '@/component/user/DashboardSidebar';
import Link from 'next/link';

export default function Page() {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const router = useRouter();
  const mobile = localStorage.getItem('forgetmobile');

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const data = {
      password: formData.get('password'),
      mobile: mobile
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/change-password', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || 'Password change failed');
      }

      localStorage.removeItem('forgetmobile');
      router.push('/user/login');
    } catch (error) {
      setErrorMsg(error.message);
      console.error('Error:', error);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 bg-light sidebar">
          <div className="sidebar-sticky pt-3">
            <DashboardSlider />
          </div>
        </div>

        <div className="col-md-9 col-lg-10 px-4 py-3">
          <h1 className="mb-4">Change Password</h1>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">Password changed successfully!</div>}

          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6 offset-md-3">
                    <div className="mb-4">
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        placeholder="********"
                        name="password"
                        required
                      />
                    </div>
                  </div>
                </div>

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