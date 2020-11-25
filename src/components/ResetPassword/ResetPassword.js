import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import classes from './ResetPassword.module.css'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom';

const ResetPassword = () => {
    let history = useHistory();
    const [email, setEmail] = useState('')

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
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                            <button className={classes.LoginButton} onClick={() => email !== '' ? history.push("/") : null}>
                                Send Link
                                <BiRightArrowAlt style={{ height: 40, width: 48 }} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link to="/">
                            <button className={classes.RegisterButton}>
                                <BiLeftArrowAlt style={{ height: 40, width: 48 }} />
                            Back
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ResetPassword;