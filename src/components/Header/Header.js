import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi'
import classes from './Header.module.css'

const Header = ({ showHome }) => {

    const [userRedirect, setUserRedirect] = useState(false)

    const logout = () => {
        setUserRedirect(true)
        localStorage.clear()
    }

    return (
        <div className={classes.Header}>
            <div style={{display: "flex", flexDirection: "row", flex: .88}}>
                <div className={classes.Navigation}>
                    <h1 style={{marginRight: 40}}>TGL</h1>
                    {console.log("ShowHome: ", showHome)}
                    {!showHome ? null : 
                    <Link to="/dashboard">
                        <button style={{ cursor: "pointer" }}>HOME</button>
                    </Link>
                    }
                </div>
                <div className={classes.Navigation2}>
                    <h3 style={{marginRight: 40}}>Account</h3>
                    <button onClick={() => logout()}>
                        <h3 style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>Log out <BiRightArrowAlt /></h3>
                    </button>
                    {userRedirect ? <Redirect to="/"/> : null}
                </div>
            </div>
        </div>
    )
}

export default Header;