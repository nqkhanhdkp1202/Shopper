import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input'
import { useForm } from '../core/hooks/useForm'
import { loginAction } from '../store/authReducer';

export default function Authen() {

    const dispatch = useDispatch()


    const loginForm = useForm(
        {
            email: [
                { required: true },
                { regexp: 'email', message: 'Email không đúng định dạng' }
            ],
            password: [
                { required: true },
                { min: 6, max: 32 },
                // { regexp: 'password', message: 'Mật khẩu phải bao gồm số, chữ, ký tự đặc biệt' }
            ]
        }
    );

    const onLogin = (ev) => {
        ev.preventDefault();
        if (loginForm.validate()) {
            dispatch(loginAction(loginForm.form))
        }
    }

    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg mb-10 mb-md-0">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">Returning Customer</h6>
                                {/* Form */}
                                <form onSubmit={onLogin}>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Input
                                                placeholder="Email Address*"
                                                {...loginForm.register('email')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            {/* Password */}
                                            <Input
                                                placeholder="Password*" type='password'
                                                {...loginForm.register('password')}
                                            />
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Remember */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="loginRemember">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group">
                                                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                                    Password?</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <Button children='Sign In' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">New Customer</h6>
                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Input
                                                placeholder="Full name *"
                                            />
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <Input placeholder="Email *" type="email" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Input placeholder="Password *" type="password" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Input placeholder="Confirm Password *" type="password" />
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group font-size-sm text-muted">
                                                By registering your details, you agree with our Terms &amp; Conditions,
                                                and Privacy and Cookie Policy.
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Newsletter */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="registerNewsletter">
                                                        Sign me up for the Newsletter!
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <Button children='Register' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
