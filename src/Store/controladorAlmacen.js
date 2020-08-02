import store from './Store'
import * as actions from './ActionTypes'

const addItem = (p_titulo) => {
    store.dispatch({
        type: actions.ITEM_ADD,
        payload: {
            text: p_titulo
        }
    });
}

const deleteItem = (p_val) => {
    store.dispatch({
        type: actions.ITEM_REMOVE,
        payload: {
            text: p_val
        }
    });
}

const markReady = (p_val) => {
    store.dispatch({
        type: actions.ITEM_MARKCOMPLETE,
        payload: {
            text: p_val
        }
    });
}

const getItems = () => {
    return store.getState().items
}

export default function sincron(p_setItems) {
    store.subscribe(() => {
        localStorage.setItem("estado", JSON.stringify(store.getState())) 
        p_setItems(store.getState().items)
    })
}

export { addItem, deleteItem, getItems, markReady }
