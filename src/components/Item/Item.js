import classes from './Item.module.css';
import React from 'react'
import { GiTrashCan } from 'react-icons/gi'
import { types } from '../../api/api'
const Item = ({ item, cartValues, setCartValues, totalPrice, setTotalPrice }) => {

    const removeItem = () => {
        setCartValues(cartValues.filter(value => value !== item));
        setTotalPrice(totalPrice - cartValues.filter(value => value === item).map(valor => valor.price))
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", margin: 10 }}>
            <button onClick={() => removeItem()} className={classes.RemoveButton}>
                <GiTrashCan style={{ height: 38, width: 48 }} />
            </button>
            <div style={{ backgroundColor: types.find(value => value.type === item.type).color }} className={classes.DivItem}>

            </div>
            <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p style={{margin: 0}} className={classes.NumberTxt}>{item.numbers.toString()}</p>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p style={{ color: types.find(value => value.type === item.type).color }} className={classes.TypeTxt}>{item.type}</p>
                    <p className={classes.PriceTxt}>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(item.price)}</p>
                </div>
            </div>
        </div>
    )
}

export default Item