import { ADD_BASCET_PRODUCT, AGAIN_ADD_BASCET_PRODUCT, DEL_PRODUCT, MINYS_QUANTITY} from "../actions/listActionts";
let total = 0
const initialState = [[
    {id: 0,name: "Продукт1", price: "1$", size: "XXS", img: "/img/card_1.png",color: 'red'},
    {id: 1,name: "Продукт2", price: "2$", size: "XXS", img: "/img/card_2.png",color: 'red'},
    {id: 2,name: "Продукт3", price: "3$", size: "XS", img: "/img/card_3.png",color: 'red'},
    {id: 3,name: "Продукт4", price: "4$", size: "XXS", img: "/img/card_4.png",color: 'red'},
    {id: 4,name: "Продукт5", price: "5$", size: "XXS", img: "/img/card_5.png",color: 'red'},
    {id: 5,name: "Продукт6", price: "6$", size: "S", img: "/img/card_6.png",color: 'red'},
    {id: 6,name: "Продукт7", price: "7$", size: "M", img: "/img/card_7.png",color: 'red'},
    {id: 7,name: "Продукт8", price: "8$", size: "L", img: "/img/card_8.png",color: 'red'}],[], total, []]


const productsList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASCET_PRODUCT:
            return [state[0], [...state[1], {...state[0][action.payload.id], quantity: 1,}], state[2] + Number(state[0][action.payload.id].price.split('$')[0])]
        case DEL_PRODUCT:
            console.log(state[2] - state[1].filter(el => el.id == Number(action.payload.id))[0].price.split('$')[0]*state[1].filter(el => el.id == Number(action.payload.id))[0].quantity)  
     
            return [state[0], state[1].filter(el => el.id !== Number(action.payload.id)), state[2] - state[1].filter(el => el.id == Number(action.payload.id))[0].price.split('$')[0]*state[1].filter(el => el.id == Number(action.payload.id))[0].quantity]

        case AGAIN_ADD_BASCET_PRODUCT:
            return [state[0], state[1].map(
                ({id , name , price, size, img,color, quantity}) => ({id, name, price, size, img,color, quantity: ((id == action.payload.id)?quantity+1:quantity)})), state[2] + Number(state[0][action.payload.id].price.split('$')[0])]
        case MINYS_QUANTITY:
            console.log(state);
            return [state[0], state[1].map(
                ({id , name , price, size, img,color, quantity}) => ({id, name, price, size, img,color, quantity: ((id == action.payload.id)?quantity-1:quantity)})), state[2] - Number(state[0][action.payload.id].price.split('$')[0])]
        default:
            return state
    }
}

export default productsList;