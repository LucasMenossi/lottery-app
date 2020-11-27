import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import classes from './Authentication.module.css'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../api/api'
import NameApp from '../NameApp/NameApp'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Authentication = (props) => {
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(false);
    const [emptyValue, setEmptyValue] = useState(false);

    const checkData = () => {
        if (email === login.email && password === login.password) {
            setLoginError(false)
            setEmptyValue(false)
            localStorage.setItem("userEmail", email);
            history.push("/dashboard")
        } else if (email === '' || password === '') {
            setEmptyValue(true)
            setLoginError(false)
        } else {
            setEmptyValue(false)
            setLoginError(true)
        }
    }
    const { touched, errors } = props;
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
                        <Form>
                            <div className={classes.LoginInputBox}>
                                <Field type = "text" name = "email" value={email} onChange={({ target: { value } }) => setEmail(value)} className={classes.LoginInput} placeholder="Email" />
                                {touched.email && errors.email && <span style={{ display: "flex", justifyContent: "center", color: "red" }}>{errors.email}</span>}
                            </div>
                            <div className={classes.LoginInputBox}>
                                <Field type="password" name="password" value={password} onChange={({ target: { value } }) => setPassword(value)} className={classes.LoginInput} placeholder="Password" />
                                {touched.password && errors.password && <span style={{ display: "flex", justifyContent: "center", color: "red" }}>{errors.password}</span>}
                            </div>
                        </Form>
                        {loginError ? <p style={{ display: "flex", justifyContent: "center", color: "red" }}>*Wrong email or password.</p> : null}
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="reset-pass">
                                <button className={classes.ForgetButton}>I forgot my password</button>
                            </Link>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center'}}>
                            <button className={classes.LoginButton} onClick={() => checkData()}>
                                Log in
                                <BiRightArrowAlt style={{ height: 40, width: 48 }} />
                            </button>
                        </div>
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

const LoginFormik = withFormik({
    mapPropsToValues: (props) => {
        return {
            email: props.email || '',
            password: props.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
    })
})(Authentication)

export default LoginFormik;