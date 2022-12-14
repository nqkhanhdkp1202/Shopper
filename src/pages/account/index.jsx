import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Input from '../../components/Input'
import useQuery from '../../core/hooks/useQuery'

export default function Account() {

    const { user } = useSelector(store => store.authReducer)

    if (!user) {
        return <Navigate to="/auth" />
    }

    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <nav className="mb-10 mb-md-0">
                            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
                                    Orders
                                </a>
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-wishlist.html">
                                    Wishlist
                                </a>
                                <a className="list-group-item list-group-item-action dropright-toggle active" href="account-personal-info.html">
                                    Personal Info
                                </a>
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                                    Addresses
                                </a>
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                                    Payment Methods
                                </a>
                                <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
                                    Logout
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                        {/* Form */}
                        <form>
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    {/* Email */}
                                    <Input placeholder="Full name" required label="Full name" />
                                </div>
                                <div className="col-12">
                                    {/* Email */}
                                    <Input placeholder="Email Address" type='email' required label="Email Address" />
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Password */}
                                    <Input placeholder="Current Password" label="Current Password" required type="password" />
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* Password */}
                                    <Input placeholder="New Password" label="New Password" required type="password" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Birthday */}
                                    <div className="form-group">
                                        {/* Label */}
                                        <label>Date of Birth</label>
                                        {/* Inputs */}
                                        <div className="form-row">
                                            <div className="col-auto">
                                                {/* Date */}
                                                <label className="sr-only" htmlFor="accountDate">
                                                    Date
                                                </label>
                                                <select className="custom-select custom-select-sm" id="accountDate">
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option selected>12</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                {/* Date */}
                                                <label className="sr-only" htmlFor="accountMonth">
                                                    Month
                                                </label>
                                                <select className="custom-select custom-select-sm" id="accountMonth">
                                                    <option>January</option>
                                                    <option selected>February</option>
                                                    <option>March</option>
                                                </select>
                                            </div>
                                            <div className="col-auto">
                                                {/* Date */}
                                                <label className="sr-only" htmlFor="accountYear">
                                                    Year
                                                </label>
                                                <select className="custom-select custom-select-sm" id="accountYear">
                                                    <option>1990</option>
                                                    <option selected>1991</option>
                                                    <option>1992</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Gender */}
                                    <div className="form-group mb-8">
                                        <label>Gender</label>
                                        <div className="btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-sm btn-outline-border active">
                                                <input type="radio" name="gender" defaultChecked /> Male
                                            </label>
                                            <label className="btn btn-sm btn-outline-border">
                                                <input type="radio" name="gender" /> Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Button */}
                                    <button className="btn btn-dark" type="submit">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
