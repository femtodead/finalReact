import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBascetPoduct, againAdd } from "../actions/listActionts.js";

function CartProductHome(props) {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    function addProd(e) {
        let flag = false;
        if(e.target.className == 'products_list_card_hover_button'){
            for (let index = 0; index < products[1].length; index++) {
                console.log(`${products[1][index].id}` + '=' + `${e.target.id.split('CardHome')[1]}`);
                if (products[1][index].id == e.target.id.split('CardHome')[1]) {
                    flag = true;
                }
            }
            if(!flag){
                console.log('Я зашел в обычное добавление');
                dispatch(addBascetPoduct(e.target.id.split('CardHome')[1]))
            }else{
                console.log('Я зашел в повторное добавление');
                dispatch(againAdd(e.target.id.split('CardHome')[1]))
            }
            
        }else{
            for (let index = 0; index < products[1].length; index++) {
                console.log(`${products[1][index].id}` + '=' + `${e.target.parentElement.id.split('CardHome')[1]}`);
                if (products[1][index].id == e.target.parentElement.id.split('CardHome')[1]) {
                    flag = true;
                }
            }
            if(!flag){
                console.log('Я зашел в обычное добавление от компонента');
                dispatch(addBascetPoduct(e.target.parentElement.id.split('CardHome')[1]))
            }else{
                console.log('Я зашел в повторное добавление от компонента');
                dispatch(againAdd(e.target.parentElement.id.split('CardHome')[1]))
            }
            
        }  

    }


    return ( <article class="products_list_card">
        <div class="products_list_card_hover">
            <button onClick={addProd} class="products_list_card_hover_button" id={`CardHome`+ (props.id)}>
                <img src='/img/basket_hover.png' alt="" />
                <span class="products_list_card_hover_span">Add to Cart</span>
            </button>
        </div>
        <img src={props.imgCard} alt="" class="products_list_card_img"/>
        <h4 class="products_list_card_name">{props.name}</h4>
        <p class="products_list_card_price">{props.price}</p>
    </article> );
}

export default CartProductHome;