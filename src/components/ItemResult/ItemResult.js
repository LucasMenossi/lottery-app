import React from 'react'
import { types } from '../../api/api'
import classes from './ItemResult.module.css'
import moment from 'moment'
const ItemResult = ({ item }) => {

    return (
        <div style={{ display: "flex", flexDirection: "row", margin: 10 }}>
            <div style={{ backgroundColor: types.find(value => value.type === item.type).color }} className={classes.DivItem}>
            </div>
            <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p style={{ margin: 0 }} className={classes.NumberTxt}>{item.numbers.toString()}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={classes.DateTxt}>{moment(item.data).add(10, 'days').calendar()}</p>
                    <p style={{ marginLeft: 10 }} className={classes.DateTxt}>-</p>
                    <p className={classes.PriceTxt}>({new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(item.price)})</p>
                </div>
                <p style={{ color: types.find(value => value.type === item.type).color }}
                    className={classes.TypeTxt}>{item.type}</p>
            </div>
        </div>
    )
}

export default ItemResult