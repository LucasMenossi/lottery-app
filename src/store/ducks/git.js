export const Types = {
    ADD_GAME: "ADD_GAME",
    GET_GAMES: "GET_GAMES"
}

const INITIAL_STATE = {
    gamesList: []
}

export default function Git(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_GAME:
            return {
                ...state,
                gamesList: [...state.gamesList, ...action.payload]
            }
        default:
            return state
    }
}

export const Creators = {
    addGame: payload => ({
        type: Types.ADD_GAME,
        payload
    })
}