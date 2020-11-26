import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import classes from './Register.module.css'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom'
import NameApp from '../NameApp/NameApp';

const Register = () => {
    let history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emptyValue, setEmptyValue] = useState(false)

    const checkFields = () => {
        if(name !== '' && email !== '' && password !== ''){
            setEmptyValue(false)
            history.push("/")
        } else {
            setEmptyValue(true)
        }
    }

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
                        <div className={classes.LoginInputBox}>
                            <input value={name} onChange={({ target: { value } }) => setName(value)} className={classes.LoginInput} placeholder="Name" />
                        </div>
                        <div className={classes.LoginInputBox}>
                            <input value={email} onChange={({ target: { value } }) => setEmail(value)} className={classes.LoginInput} placeholder="Email" />
                        </div>
                        <div className={classes.LoginInputBox}>
                            <input value={password} type="password" onChange={({ target: { value } }) => setPassword(value)} className={classes.LoginInput} placeholder="Password" />
                        </div>
                        {emptyValue ? <p style={{display: "flex", justifyContent: "center", color: "red"}}>*All fields are required.</p> : null}
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