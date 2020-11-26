import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import ItemResult from '../ItemResult/ItemResult'
import { BiRightArrowAlt } from 'react-icons/bi'

const Home = ({ clickedGame, setClickedGame, copyArr, setCopyArr, showHome, setShowHome }) => {
    const resetChoices = () => {
        setShowHome(false);
        setClickedGame('');
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: '.8 0 auto', justifyContent: "center" }}>
            <div className={classes.Box}></div>
            <div className={classes.RecentGames}>
                <div className={classes.Filter}>
                    <h2>Recent games</h2>
                    <h4>Filters</h4>
                    <div>
                        <button onClick={() => setClickedGame("Lotofácil")} className={clickedGame !== "Lotofácil" ? classes.Lotofacil : classes.LotofacilClicked}><p className={clickedGame !== "Lotofácil" ? classes.TxtLotofacil : classes.TxtClicked}>Lotofácil</p></button>
                        <button onClick={() => setClickedGame("Mega-Sena")} className={clickedGame !== "Mega-Sena" ? classes.MegaSena : classes.MegaSenaClicked}><p className={clickedGame !== "Mega-Sena" ? classes.TxtMegasena : classes.TxtClicked}>Mega-Sena</p></button>
                        <button onClick={() => setClickedGame("Quina")} className={clickedGame !== "Quina" ? classes.Quina : classes.QuinaClicked}><p className={clickedGame !== "Quina" ? classes.TxtQuina : classes.TxtClicked}>Quina</p></button>
                    </div>
                </div>
                <div className={classes.NewBetArea}>
                    <button onClick={() => resetChoices()} className={classes.NewBet}>
                        New bet
                                <BiRightArrowAlt style={{ width: 40, height: 48 }} />
                    </button>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                    <div className={classes.GameArea}>
                        {copyArr.length === 0 ?
                            <p className={classes.Message}>Nenhum item adicionada até o momento.</p>
                            :
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {clickedGame !== '' && copyArr.filter(item => clickedGame === item.type).length === 0 ? <p className={classes.Message}>Nenhum item encontrado para {clickedGame}.</p> : null}
                                {clickedGame !== '' ? copyArr.filter(item => clickedGame === item.type).map(value => {
                                    console.log("Valor: ", value);
                                    return value === "" ? null : <ItemResult item={value} />
                                }) : copyArr.map(value => {
                                    return value === "" ? null : <ItemResult item={value} />
                                })}
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home