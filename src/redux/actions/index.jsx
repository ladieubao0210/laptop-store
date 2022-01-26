import * as Type from '../types/index'

 export const addItem = (product) => async (dispatch) =>  {
    dispatch({type: Type.ADD_ITEM, payload: product})
}

export const decreItem = (product) => async (dispatch) =>  {
    dispatch({type: Type.DECRE_ITEM, payload: product})
}

export const removeItem = (product) => async (dispatch) =>  {
    dispatch({type: Type.REMOVE_ITEM, payload: product})
}