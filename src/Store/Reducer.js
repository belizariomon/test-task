
import * as actions from './ActionTypes'
// let lastId = 0;

const estadoInicial = { 
    items: [],
}

export default function reducer(state = estadoInicial, action) { //Si pasa undefined en state se hace array
    switch (action.type) {
        case actions.ITEM_ADD:
            return {
                ...state,
                items: [...state.items, { 
                    text: action.payload.text,
                    isCompleted:false
                }] 
            };
        case actions.ITEM_REMOVE:
            return {
                ...state,
                items: state.items.filter(itm => itm.text !== action.payload.text),
            };
        case actions.ITEM_MARKCOMPLETE:
            return {
                ...state,
                items: state.items.map(itm => { if (itm.text === action.payload.text){
                    itm.isCompleted = true
                    return itm}
                    else return itm }),
            };
        case actions.SET_STATE:
            return {
                ...state,
                state: action.state
            };
        default:
            return state;
    }
}