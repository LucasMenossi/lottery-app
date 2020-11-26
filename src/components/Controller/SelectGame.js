import classes from './SelectGame.module.css';
import { useState } from 'react';
import Footer from '../Footer'
import Home from '../Home/Home'
import GamesList from '../GamesList/GamesList'
import Header from "../Header/Header";

function SelectGame() {

    const [selectedGame, setSelectedGame] = useState('Lotofácil');
    const [cartValues, setCartValues] = useState([]);
    const [showHome, setShowHome] = useState(true);
    const [clickedGame, setClickedGame] = useState('')
    const [totalPrice, setTotalPrice] = useState(0);
    const [copyArr, setCopyArr] = useState([])

    return (
        <div style={{
            backgroundColor: '#F7F7F7', display: "flex", flexDirection: 'column', width: '100vw',
            height: '100vh'
        }}>
            <div className={classes.Page}>
                <Header showHome={showHome} />
                <div>
                    {showHome ?
                        <Home clickedGame={clickedGame} setClickedGame={setClickedGame} copyArr={copyArr} setCopyArr={setCopyArr} showHome={showHome} setShowHome={setShowHome} />
                        :
                        <GamesList selectedGame={selectedGame} setSelectedGame={setSelectedGame}
                            cartValues={cartValues} setCartValues={setCartValues}
                            totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                            copyArr={copyArr} setCopyArr={setCopyArr}
                            showHome={showHome} setShowHome={setShowHome}
                        />}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SelectGame;