import './ProductsCatalog.css'
import { useDispatch, useSelector } from "react-redux";
import ProductsCatalogCard from './ProductsCatalogCard';
import { useState } from 'react';
function ProductsCatalog() {
    const products = useSelector(state => state.products);
    let [viewList, setViewList] = useState(products[0])
    let gridLian = ((viewList.length == 0)?'':`repeat(${Math.ceil(viewList.length/3)}, 364px)` )
    console.log(gridLian);
    const check = (e) => {
        console.log(e.target.checked);
        console.log(e.target.parentElement.parentElement.children);
        if (e.target.checked) {
            for (let index = 0; index < e.target.parentElement.parentElement.children.length; index++) {
                if(!(e.target.parentElement.parentElement.children[index].childNodes[0].name == e.target.name)){
                    e.target.parentElement.parentElement.children[index].childNodes[0].disabled = true
    
                }
                
            }
            setViewList(products[0].filter(el => el.size == e.target.name))
            
            
        } else {
            for (let index = 0; index < e.target.parentElement.parentElement.children.length; index++) {
                if(!(e.target.parentElement.parentElement.children[index].childNodes[0].name == e.target.name)){
                    e.target.parentElement.parentElement.children[index].childNodes[0].disabled = false
    
                }
                
            }
            setViewList(products[0])
        }
    }
    return (     <div class="products centr">
        <div class="products__leftFilrt">
            <details class="products__leftDeat">
                <summary class="products__leftsumm">
                    <h3 class="products__leftFiltrName">Category</h3>

                    <svg class="products__svgleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                            fill="#6f6e6e" />
                    </svg>
                </summary>
                <div class="products__leftFillingDet">

                    <a href="" class="products__leftHref">Accessories</a><a href=""
                        class="products__leftHref">Bags</a><a href="" class="products__leftHref">Denim</a><a href=""
                        class="products__leftHref">Hoodies &
                        Sweatshirts
                    </a><a href="" class="products__leftHref">Jackets & Coats
                    </a><a href="" class="products__leftHref">Pants</a><a href="" class="products__leftHref">Polos</a><a
                        href="" class="products__leftHref">Shirts</a><a href="" class="products__leftHref">Shoes</a><a
                        href="" class="products__leftHref">Shorts</a><a href="" class="products__leftHref">Sweaters &
                        Knits
                    </a><a href="" class="products__leftHref">T-Shirts
                    </a><a href="" class="products__leftHref">Tanks</a>
                </div>
            </details>
            <details class="products__leftDeat">
                <summary class="products__leftsumm">
                    <h3 class="products__leftFiltrName">BRAND</h3>

                    <svg class="products__svgleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                            fill="#6f6e6e" />
                    </svg>
                </summary>
                <div class="products__leftFillingDet">

                    <a href="" class="products__leftHref">Accessories</a><a href=""
                        class="products__leftHref">Bags</a><a href="" class="products__leftHref">Denim</a><a href=""
                        class="products__leftHref">Hoodies &
                        Sweatshirts
                    </a><a href="" class="products__leftHref">Jackets & Coats
                    </a><a href="" class="products__leftHref">Pants</a><a href="" class="products__leftHref">Polos</a><a
                        href="" class="products__leftHref">Shirts</a><a href="" class="products__leftHref">Shoes</a><a
                        href="" class="products__leftHref">Shorts</a><a href="" class="products__leftHref">Sweaters &
                        Knits
                    </a><a href="" class="products__leftHref">T-Shirts
                    </a><a href="" class="products__leftHref">Tanks</a>
                </div>
            </details>
            <details class="products__leftDeat">
                <summary class="products__leftsumm">
                    <h3 class="products__leftFiltrName">dESIGNER</h3>

                    <svg class="products__svgleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                            fill="#6f6e6e" />
                    </svg>
                </summary>
                <div class="products__leftFillingDet">

                    <a href="" class="products__leftHref">Accessories</a><a href=""
                        class="products__leftHref">Bags</a><a href="" class="products__leftHref">Denim</a><a href=""
                        class="products__leftHref">Hoodies &
                        Sweatshirts
                    </a><a href="" class="products__leftHref">Jackets & Coats
                    </a><a href="" class="products__leftHref">Pants</a><a href="" class="products__leftHref">Polos</a><a
                        href="" class="products__leftHref">Shirts</a><a href="" class="products__leftHref">Shoes</a><a
                        href="" class="products__leftHref">Shorts</a><a href="" class="products__leftHref">Sweaters &
                        Knits
                    </a><a href="" class="products__leftHref">T-Shirts
                    </a><a href="" class="products__leftHref">Tanks</a>
                </div>
            </details>
        </div>
        <div class="products__offeredProducts" style={{gridTemplateRows: `97px 50px ${gridLian} 44px`}}>

            <div class="products__FiltrCarts products__FiltrCarts_one">
                <h5 class="products__nameFiltr">Trending now</h5>
                <div class="products__filtrTag ">
                    <p class="products__filtrTagItem">Bohemian</p>
                    <p class="products__filtrTagItem">Floral</p>
                    <p class="products__filtrTagItem">Lace</p>
                    <p class="products__filtrTagItem">Floral</p>
                    <p class="products__filtrTagItem">Lace</p>
                    <p class="products__filtrTagItem">Bohemian</p>
                </div>


            </div>
            <div class="products__FiltrCarts">
                <h5 class="products__nameFiltr">Size</h5>
                <div class="products__sizeFistrCheck">
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check}  name="XXS" id="" class="products__Check"/>
                        XXS
                    </div>
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check} name="XS" id="" class="products__Check"/>
                        XS
                    </div>
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check} name="S" id="" class="products__Check"/>
                        S
                    </div>
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check} name="M" id="" class="products__Check"/>
                        M
                    </div>
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check} name="L" id="" class="products__Check"/>
                        L
                    </div>
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check} name="XL" id="" class="products__Check"/>
                        XL
                    </div>
                    <div class="products__contCheck">
                        <input type="checkbox" onChange={check} name="XXL" id="" class="products__Check"/>
                        XXL
                    </div>
                </div>
            </div>

            <div class="products__FiltrCarts ">
                <h5 class="products__nameFiltr products__nameFiltr_last">pRICE</h5>
                <div class="products__range-controls">
                    <div class="products__band">
                        <div class="products__choiceBand"></div>
                        <div class="products__min"></div>
                        <div class="products__max"></div>
                    </div>
                </div>
                <div class="products__priceFiltr">
                    <p>$52</p>
                    <p>$400</p>

                </div>
            </div>
            <div class="products__sort">
                <div class="products__sortItem">
                    <button class="products__sortName">
                        <p>Sort By</p>
                    </button>
                    <details class="products__sortDeat">
                        <summary class="products__sortSumm">
                            <p>Name</p>
                            <svg class="products__svgleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                    fill="#6f6e6e" />
                            </svg>
                        </summary>
                        <div class="products__sortOffer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a placeat. Numquam est quas
                            laborum hic. Iusto officia doloremque, ipsa voluptatum quidem magni atque voluptates. Iste
                            nobis eum voluptates tempora.
                        </div>
                    </details>
                </div>
                <div class="products__sortItem products__sortItem_last">
                    <button class="products__sortName products__sortName_last">
                        <p>Show</p>
                    </button>
                    <details class="products__sortDeat">
                        <summary class="products__sortSumm products__sortSumm_last">
                            <p>09</p>
                            <svg class="products__svgleft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                    fill="#6f6e6e" />
                            </svg>
                        </summary>
                        <div class="products__sortOffer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a placeat. Numquam est quas
                            laborum hic. Iusto officia doloremque, ipsa voluptatum quidem magni atque voluptates. Iste
                            nobis eum voluptates tempora.
                        </div>
                    </details>
                </div>
            </div>
            {viewList.map((el)=>
        <ProductsCatalogCard name={el.name} price={el.price} imgCard={el.img} id={el.id} />
    )}
            <div class="products__pageSelection">
                <a href="" class="products__pageSelectionItem"><svg class="products__pageSelectionSVG"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16" width="10" viewBox="0 0 320 512">
                        <path
                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                            fill="#aaaaaa" />
                    </svg></a><a href="" class="products__pageSelectionItem products__pageSelectionItem_one">1</a><a href=""
                    class="products__pageSelectionItem">2</a><a href="" class="products__pageSelectionItem">3</a><a
                    href="" class="products__pageSelectionItem">4</a><a href=""
                    class="products__pageSelectionItem">5</a><a href="" class="products__pageSelectionItem">6</a><a
                    href="" class="products__pageSelectionItem">.....</a><a href=""
                    class="products__pageSelectionItem">20</a><a href="" class="products__pageSelectionItem"><svg
                        class="products__pageSelectionSVG" xmlns="http://www.w3.org/2000/svg"
                        height="16" width="10" viewBox="0 0 320 512">
                        <path
                            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                            fill="#ef5b70" />
                    </svg></a>
            </div>
            <button class="products__ViewAll">View All</button>
        </div>
    </div>
 );
}

export default ProductsCatalog;