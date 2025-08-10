'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg(''); // Clear previous errors
        setSuccessMsg(false);

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

            if (!res.ok) {
                // Handle error response
                let errorMessage = '';
                
                // Check different possible error response formats
                if (resData.error) {
                    if (typeof resData.error === 'string') {
                        errorMessage = resData.error;
                    } else if (Array.isArray(resData.error)) {
                        errorMessage = resData.error.join(' ');
                    }
                } else if (resData.detail) {
                    errorMessage = resData.detail;
                } else if (resData.non_field_errors) {
                    errorMessage = resData.non_field_errors.join(' ');
                } else {
                    // Fallback: stringify the first error found
                    for (const [key, value] of Object.entries(resData)) {
                        if (Array.isArray(value)) {
                            errorMessage = `${key}: ${value.join(' ')}`;
                        } else {
                            errorMessage = `${key}: ${value}`;
                        }
                        break; // Just show the first error
                    }
                }

                throw new Error(errorMessage || 'Login failed');
            }

            // Success case
            const user = {
                mobile: resData.mobile,
                token: resData.token
            };
            localStorage.setItem('user', JSON.stringify(user));
            setSuccessMsg(true);
            router.push('/user/dashboard');

        } catch (error) {
            setErrorMsg(error.message || 'An error occurred during login. Please try again.');
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
                            <form onSubmit={handleSubmit}>
                                {errorMsg && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMsg}
                                    </div>
                                )}
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
                                        placeholder="Enter your mobile number"
                                        required
                                        pattern="[0-9]{10}"
                                        title="Please enter a 10-digit mobile number"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                        minLength="6"
                                    />
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>

                                <div className="text-center mb-3">
                                    <hr />
                                    <Link href="/user/forgetpassword" className="text-danger fw-bold">Forgot Password?</Link>
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