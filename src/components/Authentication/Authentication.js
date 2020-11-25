import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import classes from './Authentication.module.css'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { login } from '../../api/api'

const Authentication = () => {
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkData = () => {
        if(email === login.email && password === login.password) {
            history.push("/selectGame")
        }
    }

    return (
        <div style={{
            display: "flex", flexDirection: 'column', width: '100vw',
            height: '100vh'
        }}>
            <div className={classes.Page}>
                <div className={classes.Titlebox}>
                    <h1>The</h1>
                    <h1>Greatest</h1>
                    <h1>App</h1>
                    <h2>for</h2>
                    <h3>LOTTERY</h3>
                </div>
                <div className={classes.LoginBox}>
                    <h4>Authentication</h4>
                    <div className={classes.LoginInputsContiner}>
                        <div className={classes.LoginInputBox}>
                            <input value={email} onChange={({ target: { value } }) => setEmail(value)} className={classes.LoginInput} placeholder="Email" />
                        </div>
                        <div className={classes.LoginInputBox}>
                            <input value={password} type="password" onChange={({ target: { value } }) => setPassword(value)} className={classes.LoginInput} placeholder="Password" />
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="resetPass">
                                <button className={classes.ForgetButton}>I forgot my password</button>
                            </Link>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center' }}>
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

export default Authentication;