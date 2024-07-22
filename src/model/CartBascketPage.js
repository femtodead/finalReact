import { useDispatch, useSelector } from "react-redux";
import { delPoduct, minQuantyti, againAdd } from "../actions/listActionts";

function CartBascketPage(props) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const basket = products[1]
    const del = (e) => {
        if(e.target.className == 'testDiv_card_cross'){
            dispatch(delPoduct(e.target.id.split('delBasck')[1]))
        }
        else{
            dispatch(delPoduct(e.target.parentElement.id.split('delBasck')[1]))
        }
    }
    const upAndDow = (e) =>{
        console.log(e.target.value);
        let qual = 0
        for (let index = 0; index < basket.length; index++) {
            if (basket[index].id == Number(e.target.id.split('change')[1])){
                qual = basket[index].quantity
            }
            
        }
        if(qual>=2){
            if (qual < e.target.value) {
                dispatch(againAdd(e.target.id.split('change')[1]))
            }else{
                dispatch(minQuantyti(e.target.id.split('change')[1]))
            }
        }
        else if(qual=1){
            
            dispatch(againAdd(e.target.id.split('change')[1]))
        }
    }
    return (       <div class="basket__card">
        <div class="basket__cardLeft">
            <img src={props.imgCard} alt="" class="basket__imgProd"/>
            <div class="basket__descriptionProd">
                <h5 class="basket__nameProd">{props.name}</h5>
                <p class="basket__colorProd">Color: <span class="basket__span">{props.color}</span></p>
                <p class="basket__sizeProd">Size: <span class="basket__span">{props.size}</span></p>
            </div>
        </div>
        <div class="basket__cardRight">
            <p class="basket__price">{props.price}</p>
            <div class="basket__quantity">
                <input type="number" id={'change'+props.del} onChange={upAndDow} class="basket__input" value={props.quantity}/>
            </div>
            <p class="basket__shipping">FREE</p>
            <p class="basket__subtotal">{props.quantity*props.price.split('$')[0]}</p>
            <svg id={"delBasck"+props.del} onClick={del} class="testDiv_card_cross" xmlns="http://www.w3.org/2000/svg" height="15" width="15"
                viewBox="0 0 512 512">
                <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                    fill="#c0c0c0" />
            </svg>
        </div>
    </div> );
}

export default CartBascketPage;