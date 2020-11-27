import classes from './ListGames.module.css';
import { types } from '../../api/api'

const ListGames = ({ selectedGame, setSelectedGame, arr, setArr}) => {

    const selectNewGame = (e) => {
        setSelectedGame(e.target.value)
        if(e.target.value !== selectedGame)
            setArr([])
    }

    return (
        types.map(value => {
            return <button
                value={value.type}
                onClick={e => selectNewGame(e)}
                className={selectedGame !== value.type ? classes.Game : classes.GameClicked}
                style={selectedGame !== value.type ? {border: `2px solid ${value.color}`, font: 'italic normal bold 14px Helvetica', color: value.color} : {font: 'italic normal bold 14px Helvetica', backgroundColor: value.color, color: "white"}}
                >
                {value.type}
            </button>
        })
    )

}

export default ListGames;