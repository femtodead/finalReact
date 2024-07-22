export const DEL_PRODUCT = 'DEL_PRODUCT'
export const AGAIN_ADD_BASCET_PRODUCT = 'AGAIN_ADD_BASCET_PRODUCT'
export const ADD_BASCET_PRODUCT =  "ADD_BASCET_PRODUCT";
export const addBascetPoduct =  (id) =>({
    type: ADD_BASCET_PRODUCT,
    payload: {id},
});
export const againAdd = (id) =>({
    type: AGAIN_ADD_BASCET_PRODUCT,
    payload: {id},
})
export const delPoduct =  (id) =>({
    type: DEL_PRODUCT,
    payload: {id},
});
