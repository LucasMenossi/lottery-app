import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import classes from './Register.module.css'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom'

const Register = () => {
    let history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkFields = () => {
        if(name !== '' && email !== '' && password !== '')
            history.push("/")
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
                            <input value={name} onChange={({ target: { value } }) => setName(value)} className={classes.LoginInput} placeholder="Name" />
                        </div>
                        <div className={classes.LoginInputBox}>
                            <input value={email} onChange={({ target: { value } }) => setEmail(value)} className={classes.LoginInput} placeholder="Email" />
                        </div>
                        <div className={classes.LoginInputBox}>
                            <input value={password} type="password" onChange={({ target: { value } }) => setPassword(value)} className={classes.LoginInput} placeholder="Password" />
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                            <button className={classes.LoginButton} onClick={() => checkFields()}>
                                Register
                                <BiRightArrowAlt style={{ height: 40, width: 48 }} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link to={"/"}>
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

export default Register;