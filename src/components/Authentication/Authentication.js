import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import classes from './Authentication.module.css'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../api/api'
import NameApp from '../NameApp/NameApp'
import { withFormik, Form, Field, Formik } from 'formik';
import * as yup from 'yup';

const Authentication = () => {
    let history = useHistory()
    const [loginError, setLoginError] = useState(false);

    const checkData = (values) => {
        const {email, password} = values
        console.log("Values been received: ", password);
        if (email === login.email && password === login.password) {
            setLoginError(false)
            localStorage.setItem("userEmail", email);
            history.push("/dashboard")
        } else {
            setLoginError(true)
        }
    }

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup.string().required('Password is required')
    });

    return (
        <div style={{
            display: "flex", flexDirection: 'column', width: '100vw',
            height: '100vh'
        }}>
            <div className={classes.Page}>
                <NameApp />
                <div className={classes.LoginBox}>
                    <h4>Authentication</h4>
                    <div className={classes.LoginInputsContiner}>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={schema}
                            validateOnChange={false}
                            validateOnBlur={true}
                            onSubmit={checkData}
                        >
                            {({
                                values,
                                errors,
                                handleSubmit,
                                handleBlur,
                                handleChange,
                                touched
                            }) => (
                                    <Form>
                                        <div className={classes.LoginInputBox}>
                                            <Field type="text" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className={classes.LoginInput} placeholder="Email" />
                                            {touched.email && errors.email && <span style={{ display: "flex", justifyContent: "center", color: "red" }}>{errors.email}</span>}
                                        </div>
                                        <div className={classes.LoginInputBox}>
                                            <Field type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} className={classes.LoginInput} placeholder="Password" />
                                            {touched.password && errors.password && <span style={{ display: "flex", justifyContent: "center", color: "red" }}>{errors.password}</span>}
                                        </div>
                                        {loginError ? <p style={{ display: "flex", justifyContent: "center", color: "red" }}>*Wrong email or password.</p> : null}
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                            <Link to="reset-pass">
                                                <button className={classes.ForgetButton}>I forgot my password</button>
                                            </Link>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: 'center' }}>
                                            <button type="submit" className={classes.LoginButton} onClick={handleSubmit}>
                                                Log in
                                            <BiRightArrowAlt style={{ height: 40, width: 48 }} />
                                            </button>
                                        </div>
                                    </Form>
                                )}
                        </Formik>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link to="register">
                            <button className={classes.RegisterButton}>
                                Sign up
                            <BiRightArrowAlt style={{ height: 40, width: 48 }} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Authentication;