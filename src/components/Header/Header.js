import React from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi'
import classes from './Header.module.css'

const Header = ({ showHome }) => {
    return (
        <div className={classes.Header}>
            <div className={classes.Navigation}>
                <h1>TGL</h1>
                {showHome ? <button style={{ cursor: "pointer" }}>HOME</button> : null}
            </div>
            <div className={classes.Navigation2}>
                <h3 style={{ marginRight: 40 }}>Account</h3>
                <Link to="/">
                    <h3 style={{ marginRight: 230, display: "flex", alignItems: "center" }}>Log out <BiRightArrowAlt /></h3>
                </Link>
            </div>
        </div>
    )
}

export default Header;