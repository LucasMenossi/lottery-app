import classes from './SelectGame.module.css';
import { useState } from 'react';
import Games from '../Games/games'
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import ItemResult from '../ItemResult/ItemResult'
import Footer from '../../components/Footer'
import { BiRightArrowAlt } from 'react-icons/bi'

import { types } from '../../api/api'

function SelectGame() {

    const [selectedGame, setSelectedGame] = useState('');
    const [cartValues, setCartValues] = useState([]);
    const [showHome, setShowHome] = useState(true);
    const [clickedGame, setClickedGame] = useState('')
    const [totalPrice, setTotalPrice] = useState(0);
    const [copyArr, setCopyArr] = useState([])

    const resetChoices = () => {
        setShowHome(false);
        setClickedGame('');
    }

    const getGameType = types.find(value => {
        return value.type === selectedGame
    })

    const clearCart = () => {
        setCopyArr([...copyArr, ...cartValues])
        setCartValues([])
        setTotalPrice(0)
        setShowHome(true)
    }

    return (
        <div style={{ backgroundColor: '#F7F7F7', display: "flex", flexDirection: 'column', width: '100vw',
        height: '100vh'}}>
            {showHome === false ?
            // SELECTED GAME
                <div style={{height: '100vh'}}>
                    <div className={classes.Header}>
                        <div className={classes.Navigation}>
                            <h1 style={{ marginLeft: 141, fontSize: 44 }}>TGL</h1>
                            <button onClick={() => {setShowHome(true)}} style={{marginLeft: 74, cursor: "pointer"}}>HOME</button>
                        </div>
                        <div className={classes.Navigation2}>
                            <h3 style={{ marginRight: 40 }}>Account</h3>
                            <Link to="/">
                                <h3 style={{ marginRight: 230, display: "flex", alignItems: "center" }}>Log out <BiRightArrowAlt /></h3>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.Box}></div>{ }
                    <div style={{ display: "flex" }}>
                        <div className={classes.Bets}>
                            <p className={classes.BetText}>NEW BET <span className={classes.GameText}>FOR {selectedGame.toUpperCase()}</span></p>
                            <p className={classes.ChooseGame}>Choose a game</p>
                            <div>
                                <button onClick={() => setSelectedGame("Lotofácil")} className={classes.Lotofacil}><p className={classes.TxtLotofacil}>Lotofácil</p></button>
                                <button onClick={() => setSelectedGame("Mega-Sena")} className={classes.MegaSena}><p className={classes.TxtMegasena}>Mega-Sena</p></button>
                                <button onClick={() => setSelectedGame("Quina")} className={classes.Quina}><p className={classes.TxtQuina}>Quina</p></button>
                            </div>
                            <Games
                                selectedGame={selectedGame}
                                cartValues={cartValues}
                                setCartValues={setCartValues}
                                getGameType={getGameType}
                                totalPrice={totalPrice}
                                setTotalPrice={setTotalPrice}
                            />
                        </div>
                        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                            <div className={classes.Cart} style={{marginTop: 40}}>
                                <h3 className={classes.CartTxt}>Cart</h3>
                                <div style={{ display: "flex", flexDirection: "column", marginTop: 80, marginLeft: -90 }}>
                                    {cartValues.map(value => {
                                        return value === "" ? null : <Item item={value} cartValues={cartValues} setCartValues={setCartValues} totalPrice={totalPrice}
                                            setTotalPrice={setTotalPrice} />
                                    })}
                                    <h3 style={{ display: "flex", justifyContent: "center", marginLeft: 100, flexDirection: "row" }}>
                                        <p className={classes.CartTotalTxt}>CART <span className={classes.CartSpanTxt}>TOTAL: {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(totalPrice)}</span></p></h3>
                                </div>
                            </div>
                            <div className={classes.SaveArea}>
                                <button className={classes.SaveButton} onClick={() => clearCart()}>
                                    Save
                            <BiRightArrowAlt />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                :
                // HOME 
                <div style={{ height: '100vh'}}>
                    <div className={classes.Header}>
                        <div className={classes.Navigation}>
                            <h1 style={{ marginLeft: 141 }}>TGL</h1>
                        </div>
                        <div className={classes.Navigation2}>
                            <h3 style={{ marginRight: 40 }}>Account</h3>
                            <Link to="/">
                                <h3 style={{ marginRight: 230, display: "flex", alignItems: "center" }}>Sair <BiRightArrowAlt /></h3>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.Box}></div>
                    <div style={{ display: "flex", marginTop: 80 }}>
                        <div className={classes.Filter}>
                            <h2>Recent games</h2>
                            <h4>Filters</h4>
                            <button onClick={() => setClickedGame("Lotofácil")} className={classes.Lotofacil}><p className={classes.TxtLotofacil}>Lotofácil</p></button>
                            <button onClick={() => setClickedGame("Mega-Sena")} className={classes.MegaSena}><p className={classes.TxtMegasena}>Mega-Sena</p></button>
                            <button onClick={() => setClickedGame("Quina")} className={classes.Quina}><p className={classes.TxtQuina}>Quina</p></button>
                        </div>
                        <div style={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                            <button onClick={() => resetChoices()} className={classes.NewBet}>
                                New bet
                                <BiRightArrowAlt style={{width:40, height: 48}}/>
                            </button>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        {clickedGame !== '' ? copyArr.filter(item => clickedGame === item.type).map(value => {
                            return value === "" ? null : <ItemResult item={value} />
                        }) : copyArr.map(value => {
                            return value === "" ? null : <ItemResult item={value} />
                        })}
                    </div>
                <Footer />
                </div>}
        </div>
    );
}

export default SelectGame;