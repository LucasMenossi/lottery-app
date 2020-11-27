import classes from './GamesList.module.css';
import Games from '../Games/games'
import Item from '../Item/Item';
import { BiRightArrowAlt } from 'react-icons/bi'
import ListGames from '../ListGames/ListGames'
import { useDispatch, useSelector } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';
import Header from "../Header/Header";
import Footer from '../Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { types } from '../../api/api'

const GamesList = () => {

    const dispatch = useDispatch();
    const gitData = useSelector(state => state.git);
    const [selectedGame, setSelectedGame] = useState('Lotofácil')
    const [cartValues, setCartValues] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [arr, setArr] = useState([]);

    const getGameType = types.find(value => {
        return value.type === selectedGame
    })

    const clearCart = () => {
        setCartValues([])
        dispatch(GitActions.addGame(cartValues))
        setTotalPrice(0)
    }
    return (
        <div style={{
            backgroundColor: '#F7F7F7', display: "flex", flexDirection: 'column', width: '100vw',
            height: '100vh'
        }}>
            <div className={classes.Page}>
                <Header showHome={true}/>
                <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                    <div className={classes.BetsPage}>
                        <div className={classes.Box}></div>
                        <div className={classes.BetsBody}>
                            <div className={classes.Bets}>
                                {console.log("Selected game when setted: ", selectedGame)}
                                <p className={classes.BetText}>NEW BET <span className={classes.GameText}>FOR {selectedGame.toUpperCase()}</span></p>
                                <p className={classes.ChooseGame}>Choose a game</p>
                                <div>
                                    <ListGames selectedGame={selectedGame} setSelectedGame={setSelectedGame} arr={arr} setArr={setArr} />
                                </div>
                                <Games
                                    selectedGame={selectedGame}
                                    cartValues={cartValues}
                                    setCartValues={setCartValues}
                                    getGameType={getGameType}
                                    totalPrice={totalPrice}
                                    setTotalPrice={setTotalPrice}
                                    arr={arr}
                                    setArr={setArr}
                                />
                            </div>
                            <div className={classes.CartPage}>
                                <div className={classes.Cart} style={{ marginTop: 40 }}>
                                    <h3 className={classes.CartTxt}>Cart</h3>
                                    <div style={{ display: "flex", flexDirection: "column", marginTop: 80, marginLeft: -90 }}>
                                        {cartValues.map(value => {
                                            return value === "" ? null : <Item item={value} cartValues={cartValues} setCartValues={setCartValues} totalPrice={totalPrice}
                                                setTotalPrice={setTotalPrice} />
                                        })}
                                        <h3 style={{ display: "flex", marginLeft: 25, flexDirection: "row" }}>
                                            <p className={classes.CartTotalTxt}>CART <span className={classes.CartSpanTxt}>TOTAL: {new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(totalPrice)}</span></p></h3>
                                    </div>
                                </div>
                                <div className={classes.SaveArea}>
                                    <Link to="/dashboard">
                                        <button className={classes.SaveButton} onClick={() => clearCart()}>
                                            Save
                                        <BiRightArrowAlt />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default GamesList;