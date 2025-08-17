
'use client'

import Link from 'next/link';
import { useRef, useState } from 'react';

export default function SignUpForm() {
    const resetButtonRef = useRef(null);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            'first_name': formData.get('first_name'),
            'last_name': formData.get('last_name'),
            'username': formData.get('username'),
            'password': formData.get('password'),
            'email': formData.get('email'),
            'profile': {
                'mobile': formData.get('mobile'),
            }
        };

        const res = await fetch('http://127.0.0.1:8000/api/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const resData = await res.json();

        if (res.ok) {
            setSuccessMsg(true);
            setErrorMsg(false);
            resetButtonRef.current.click();
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
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            {successMsg && <div className='alert alert-success'>Thank you for joining us.</div>}
                            {errorMsg && <div className='alert alert-danger'>{errorMsg}</div>}
                            <h1 className="h4 text-center">SignUp</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName" name="first_name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" name="last_name" required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" required />
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="mobile" className="form-label">Mobile</label>
                                        <input type="tel" className="form-control" id="mobile" name="mobile" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" required />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button type="reset" ref={resetButtonRef} className="btn btn-secondary">Reset</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                            <div className="mt-3 text-center">
                                <p>
                                    If you are already registered user, <Link href="/user/login" className="text-primary">Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}