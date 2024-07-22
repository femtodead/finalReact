import { useDispatch, useSelector } from "react-redux";
import "../model.css"
import { Link } from 'react-router-dom';
import HeaderBascetProduct from './headerBascetProduct';

function Header() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const total = products[2];

    return ( 
        <header className="header centr">

        <div className="header_left">
            <Link to={"/"}>
                <img src="/img/logo.png" alt="" className="header_left_logo" />
            </Link>
            <span className="header_left_brandName">BRAN<span className="header_left_brandName_D">D</span></span>
            <div className="header_left_browseAndSearch">
                <input className="header_left_browseAndSearch_inbutton" type="checkbox" value=""
                    id="browseAndSearch_button" />
                <label className="header_left_browseAndSearch_button" htmlFor="browseAndSearch_button">
                    <span className="header_left_browseAndSearch_button_text">Browse</span>
                    <img src="/img/_arrowToDownGray.png"
 alt="" className="header_left_browseAndSearch_button_img" />
                </label>
                <div className="testDiv2">
                <div className="testDiv2_card">
                    <h5 className="testDiv2_card_h5">Home</h5>
                    <a href="" className="testDiv2_card_a">Dresses</a>
                    <a href="" className="testDiv2_card_a">Tops</a>
                    <a href="" className="testDiv2_card_a">Sweaters/Knits</a>
                    <a href="" className="testDiv2_card_a">Jackets/Coats</a>
                    <a href="" className="testDiv2_card_a">Blazers</a>
                    <a href="" className="testDiv2_card_a">Denim</a>
                    <a href="" className="testDiv2_card_a">Leggings/Pants</a>
                    <a href="" className="testDiv2_card_a">Skirts/Shorts</a>
                    <a href="" className="testDiv2_card_a">Accessories</a>
                </div>
                <div className="testDiv2_card testDiv2_card_last">
                    <h5 className="testDiv2_card_h5 ">MEN</h5>
                    <a href="" className="testDiv2_card_a">Dresses</a>
                    <a href="" className="testDiv2_card_a">Tops</a>
                    <a href="" className="testDiv2_card_a">Sweaters/Knits</a>
                    <a href="" className="testDiv2_card_a">Jackets/Coats</a>
                </div>
                </div>
                <input type="text" className="header_left_browseAndSearch_entryField" placeholder="Search for Item..." />
                <button className="header_left_browseAndSearch_buttonSearch">
                    <img src="/img/magnifyingGlass.png" alt="" className="header_left_browseAndSearch_buttonSearch_img" />
                </button>
            </div>
        </div>
        <div className="header_right">
            <Link to={"/ShoppingCart"} className="header_right_basket">
                <img src="/img/basket.png" alt="" className="header_right_basket_img" />
            </Link>
            <div className="header_right_personalArea">
                <input className="header_right_personalArea_inbutton" type="checkbox" value="" id="personalArea_button" />
                <label className="header_right_personalArea_button" htmlFor="personalArea_button">
                    <span className="header_right_personalArea_button_text">My Account</span>
                    <img src="/img/arrowToDownWhite.png" alt="" className="header_right_personalArea_button_img" />
                </label>
                <div className="testDiv">
                {products[1].map((el)=>
                    <HeaderBascetProduct name={el.name} price={el.price} imgCard={el.img} quantity={el.quantity} del={el.id}/>

                )}


                    <div className="testDiv_pricebutton">
                        <div className="testDiv_pricebutton_price">
                            <p className="testDiv_pricebutton_price_total">TOTAL</p>
                            <p className="testDiv_pricebutton_price_number">{total}$</p>
                        </div>
                        <button className="testDiv_pricebutton_button1">Checkout</button>
                        <button className="testDiv_pricebutton_button2">Go to cart</button>
                    </div>
          
                </div>
            </div>
        </div>
    </header>
     );
}

export default Header;