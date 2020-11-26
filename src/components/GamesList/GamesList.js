import classes from './GamesList.module.css';
import Games from '../Games/games'
import Item from '../Item/Item';
import { BiRightArrowAlt } from 'react-icons/bi'

import { types } from '../../api/api'

const GamesList = ({ clickedGame, setClickedGame, copyArr, setCopyArr, selectedGame, setSelectedGame, cartValues, setCartValues, totalPrice, setTotalPrice, showHome, setShowHome }) => {

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
        <div className={classes.BetsPage}>
            <div className={classes.Box}></div>
            <div className={classes.BetsBody}>
                <div className={classes.Bets}>
                    <p className={classes.BetText}>NEW BET <span className={classes.GameText}>FOR {selectedGame.toUpperCase()}</span></p>
                    <p className={classes.ChooseGame}>Choose a game</p>
                    <div>
                        <button onClick={() => setSelectedGame("Lotofácil")} className={selectedGame !== "Lotofácil" ? classes.Lotofacil : classes.LotofacilClicked}><p className={selectedGame !== "Lotofácil" ? classes.TxtLotofacil : classes.TxtClicked}>Lotofácil</p></button>
                        <button onClick={() => setSelectedGame("Mega-Sena")} className={selectedGame !== "Mega-Sena" ? classes.MegaSena : classes.MegaSenaClicked}><p className={selectedGame !== "Mega-Sena" ? classes.TxtMegasena : classes.TxtClicked}>Mega-Sena</p></button>
                        <button onClick={() => setSelectedGame("Quina")} className={selectedGame !== "Quina" ? classes.Quina : classes.QuinaClicked}><p className={selectedGame !== "Quina" ? classes.TxtQuina : classes.TxtClicked}>Quina</p></button>
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
                <div className={classes.CartPage}>
                    <div className={classes.Cart} style={{ marginTop: 40 }}>
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
        </div>
    )
}

export default GamesList;