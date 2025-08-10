'use client'

import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            mobile: formData.get('mobile'),
            password: formData.get('password'),
        };

        try {
            const res = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const resData = await res.json();

            if (res.ok) {
                const user = {
                    mobile: resData.mobile,  // Fixed the typo from faD.mobile to resData.mobile
                    token: resData.token
                };
                localStorage.setItem('user', JSON.stringify(user));
                setSuccessMsg(true);
                setErrorMsg('');
                router.push('/user/dashboard');  // Using Next.js router for navigation
            } else {
                let errorStr = '';
                for (const [key, values] of Object.entries(resData)) {
                    if (Array.isArray(values)) {
                        errorStr += values.join(' ');
                    } else {
                        errorStr += values;
                    }
                }
                setErrorMsg(errorStr);
                setSuccessMsg(false);
            }
        } catch (error) {
            setErrorMsg('An error occurred during login. Please try again.');
            console.error('Login error:', error);
        }
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h1 className="h4 text-center">Login</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>  {/* Added onSubmit handler */}
                                {/* Error message display */}
                                {errorMsg && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMsg}
                                    </div>
                                )}
                                
                                {/* Success message display */}
                                {successMsg && (
                                    <div className="alert alert-success" role="alert">
                                        Login successful! Redirecting...
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        id="mobile" 
                                        name="mobile"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        name="password"
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                                <div className="text-center mb-3">
                                    <hr />
                                    <Link href="/user/forgetpassword" className="text-danger fw-bold">Forget Password?</Link>
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