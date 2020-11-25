import { types } from '../../api/api';
import React, { useState } from 'react'
import Button from '../Button/button'
import classes from './games.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Games = ({ selectedGame, cartValues, setCartValues, getGameType, totalPrice, setTotalPrice }) => {

    const [arr, setArr] = useState([]);

    const clearChoice = () => {
        setArr([])
    }

    const completeGame = () => {
        let auxArr = [];
        auxArr = arr;
        for (let i = auxArr.length; i < getGameType["max-number"];) {
            let number = Math.ceil(Math.random() * getGameType.range);
            if (!auxArr.find(value => value === number)) {
                auxArr.push(number);
                i++;
            }
        }
        clearChoice();
        setArr([...auxArr])
    }

    const addGame = () => {
        if (arr.length === getGameType["max-number"]) {
            setCartValues([...cartValues, {
                numbers: arr.sort(function (a, b) {
                    return a - b;
                }), type: getGameType.type, price: getGameType.price, date: new Date()
            }])
            setTotalPrice(totalPrice + getGameType.price)
            console.log("Cart values at games: ", cartValues);
            clearChoice()
        }
    }

    return (
        <div>
            <div>
                <p className={classes.TxtBet}>{getGameType?.description}</p>
                <Button gameType={getGameType} arr={arr} setArr={setArr} />
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                        <button onClick={() => completeGame()} className={classes.BtnState} style={{ marginRight: 20 }}>Complete game</button>
                        <button onClick={() => clearChoice()} className={classes.BtnState}>Clear Game</button>
                    </div>
                    <div>
                        <button onClick={() => addGame()} className={classes.BtnCart} style={{ marginRight: 20 }}>
                            <AiOutlineShoppingCart style={{ marginRight: 20 }} />
                                        Add to cart
                                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games;

