import Link from 'next/link';
export default function Checkout() {
    return (

        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-white border-bottom-0">
                            <h1 className="h3 text-center mb-0">Checkout</h1>
                        </div>

                        <div className="card-body">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td><strong>Total Guests</strong></td>
                                        <td className="text-end">4</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total Rooms</strong></td>
                                        <td className="text-end">2</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Check-In Date</strong></td>
                                        <td className="text-end">20/04/2024</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Check-Out Date</strong></td>
                                        <td className="text-end">30/04/2024</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Charges</strong></td>
                                        <td className="text-end">1500X10=15000</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tax</strong></td>
                                        <td className="text-end">10%</td>
                                    </tr>
                                    <tr className="border-top">
                                        <td><strong>Total Amount</strong></td>
                                        <td className="text-end"><strong>15000+1500=16500</strong></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="alert alert-light mt-4">
                                <small>*One Govt. ID required when checkin</small>
                            </div>

                            <div className="text-muted mb-4">
                                <small>Terms & Conditions</small>
                            </div>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-outline-secondary me-md-2">Cancel</button>
                                <Link href='/payment/success' className="btn btn-success me-md-2">Pay Now (Success)</Link>
                                <Link href='/payment/failure' className="btn btn-danger">Pay Now (Failure)</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}