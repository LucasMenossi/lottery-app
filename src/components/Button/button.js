import React from 'react';
import classes from './button.module.css';

const Button = ({ gameType, arr, setArr }) => {

    const addNumber = (index) => {
        if (arr.length < gameType?.["max-number"]) {
            if (!arr.find(value => value === index))
                setArr([...arr, index]);
            else
                setArr(arr.filter(value => value !== index))
        }
    }

    return (
        <div>
            {
                [...Array(gameType?.range)].map((element, index) => {
                    return <button key={index}
                        style={arr.find(value => value == index + 1) ?  { backgroundColor: gameType?.color } : null}
                        onClick={() => addNumber(index + 1)}
                        className={classes.Button}
                    >
                        {index + 1}
                    </button>
                }
                )
            }
        </div>
    )
}

export default Button;