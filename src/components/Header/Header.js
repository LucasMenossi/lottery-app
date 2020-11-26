import React from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi'
import classes from './Header.module.css'

const Header = ({ showHome, setShowHome }) => {
    return (
        <div className={classes.Header}>
            <div style={{display: "flex", flexDirection: "row", flex: .88}}>
                <div className={classes.Navigation}>
                    <h1 style={{marginRight: 40}}>TGL</h1>
                    {showHome ? null : <button style={{ cursor: "pointer" }} onClick={() => setShowHome(true)}>HOME</button>}
                </div>
                <div className={classes.Navigation2}>
                    <h3 style={{marginRight: 40}}>Account</h3>
                    <Link to="/">
                        <h3 style={{ display: "flex", alignItems: "center" }}>Log out <BiRightArrowAlt /></h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;