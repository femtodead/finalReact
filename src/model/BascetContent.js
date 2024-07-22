import { useDispatch, useSelector } from "react-redux";
import CartBascketPage from "./CartBascketPage";

function BascetContent() {
    const products = useSelector(state => state.products);
    
    return (    <>
     <div class="basket centr">
        <div class="basket__categories">
            <div class="basket__cardLeft">
                <h6 class="basket__categoriesName basket__categoriesName_one">Product Details</h6>
            </div>
            <div class="basket__cardRight ">
                <h6 class="basket__categoriesName">unite Price</h6>
                <h6 class="basket__categoriesName">Quantity</h6>
                <h6 class="basket__categoriesName">shipping</h6>
                <h6 class="basket__categoriesName">Subtotal</h6>
                <h6 class="basket__categoriesName">ACTION</h6>

            </div>
        </div>
                    {products[1].map((el)=>
                    <CartBascketPage name={el.name} price={el.price} imgCard={el.img} quantity={el.quantity} del={el.id} color={el.color} size={el.size}/>

                )}
    </div>

    <div class="bottomContent centr">
        <div class="bottomContent__top">
            <button class="bottomContent__button">cLEAR SHOPPING CART</button>
            <button class="bottomContent__button">cONTINUE sHOPPING</button>
        </div>
        <div class="bottomContent__cards">
            <div class="bottomContent__card">
                <h4 class="bottomContent__title">Shipping Adress</h4>
                <details class="bottomContent__ditCountry">
                    <summary class="bottomContent__sumCountry">
                        Bangladesh
                        <img src="/img/ditcountry.png" alt="" class="bottomContent__imgCountry"/>
                    </summary>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse illum tempore quas! Aliquam rerum
                    nesciunt numquam itaque dicta magnam voluptates, sed commodi! Possimus, omnis saepe odio modi
                    aliquid dolorem ratione.
                </details>
                <input type="text" class="bottomContent__input" placeholder="State"/>
                <input type="text" class="bottomContent__input bottomContent__input_one" placeholder="Postcode / Zip"/>
            </div>
            
            <div class="bottomContent__card">
                <h4 class="bottomContent__title bottomContent__title_mid">coupon discount</h4>
                <p class="bottomContent__midP">Enter your coupon code if you have one</p>
                <input type="text" class="bottomContent__input" placeholder="State"/>
                <button class="bottomContent__button bottomContent__button_midCard">Apply coupon</button>
            </div>
            <div class="bottomContent__card bottomContent__card_end">
                <p class="bottomContent__endP">Sub total ${products[2]}</p>
                <div>
                    <h4 class="bottomContent__title bottomContent__title_end">GRAND TOTAL<span class="bottomContent__span">  ${products[2]}</span> </h4>

                </div>
                <button class="bottomContent__button bottomContent__button_endCard">proceed to checkout</button>
            </div>
        </div>
        <button class="bottomContent__button bottomContent__button_botom">get a quote</button>
    </div> </>);
    
}

export default BascetContent;