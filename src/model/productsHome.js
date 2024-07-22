import CartProductHome from './CartProductHome.js';
import { useDispatch, useSelector } from "react-redux";


function ProductsHome() {
    const products = useSelector(state => state.products);
    



    return (     <section class="products centr">
        <h3 class="products_h3">Fetured Items</h3>
        <p class="products_p">Shop for items based on what we featured in this week</p>
        <div class="products_list">
        {products[0].map((el)=>
        <CartProductHome name={el.name} price={el.price} imgCard={el.img} id={el.id} />
    )}
    </div>
    <button onClick={console.log(products)}class="products_button">Browse All Product <img src="/img/button_arrow.png" alt=""/></button>
    </section> );
}

export default ProductsHome;