import { useDispatch, useSelector } from "react-redux";
import "./model.css"
import { delPoduct } from "../actions/listActionts.js";

function HeaderBascetProduct(props) {
    const dispatch = useDispatch();
    const del = (e) => {
        if(e.target.className == 'testDiv_card'){
            dispatch(delPoduct(e.target.id.split('del')[1]))
        }
        else{
            dispatch(delPoduct(e.target.parentElement.id.split('del')[1]))
        }
    }

    return ( <div className="testDiv_card">
        <a href="">
            <img src={props.imgCard} alt="" className="testDiv_card_img" />
        </a>
        <div className="testDiv_card_nameQuantity">
            <h4 className="testDiv_card_nameQuantity_name">{props.name}</h4>
            <img src="/img/header_star.png" alt="" className="testDiv_card_nameQuantity_star" />
            <p className="testDiv_card_nameQuantity_quantity">{props.quantity}  <span className="testDiv_card_nameQuantity_quantity_x">x</span>   {props.price}</p>
        </div>
        <svg id={`del${props.del}`} onClick={del} className="testDiv_card_cross" xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" fill="#c0c0c0"/></svg>
    </div> );
}

export default HeaderBascetProduct;