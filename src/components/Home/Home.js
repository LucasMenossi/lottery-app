import classes from './Home.module.css';
import ItemResult from '../ItemResult/ItemResult'
import { BiRightArrowAlt } from 'react-icons/bi'
import GameClicked from '../GameClicked/GameClicked'
import { useDispatch, useSelector } from 'react-redux';
import Header from "../Header/Header";
import Footer from '../Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const { gamesList } = useSelector(state => state.git);
    const [clickedGame, setClickedGame] = useState('')

    const resetChoices = () => {
        setClickedGame('');
    }
    return (
        <div style={{
            backgroundColor: '#F7F7F7', display: "flex", flexDirection: 'column', width: '100vw',
            height: '100vh'
        }}>
            <div className={classes.Page}>
                <Header showHome={false}/>
                <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", flex: '.8 0 auto', justifyContent: "center" }}>
                        {console.log("Gamelist: ", gamesList)}
                        <div className={classes.Box}></div>
                        <div className={classes.RecentGames}>
                            <div className={classes.Filter}>
                                <h2>RECENT GAMES</h2>
                                <h4>Filters</h4>
                                <div>
                                    <GameClicked selectedGame={clickedGame} setSelectedGame={setClickedGame} />
                                </div>
                            </div>
                            <div className={classes.NewBetArea}>
                                <Link to="/games-list">
                                    <button onClick={() => resetChoices()} className={classes.NewBet}>
                                        New bet
                                <BiRightArrowAlt style={{ width: 40, height: 48 }} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                                <div className={classes.GameArea}>
                                    {gamesList.length === 0 ?
                                        <p className={classes.Message}>No items added so far.</p>
                                        :
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            {clickedGame !== '' && gamesList.filter(item => clickedGame === item.type).length === 0 ? <p className={classes.Message}>No items found for {clickedGame}.</p> : null}
                                            {clickedGame !== '' ? gamesList.filter(item => clickedGame === item.type).map(value => {
                                                console.log("Valor: ", value);
                                                return value === "" ? null : <ItemResult item={value} />
                                            }) : gamesList.map(value => {
                                                return value === "" ? null : <ItemResult item={value} />
                                            })}
                                        </div>}
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

export default Home