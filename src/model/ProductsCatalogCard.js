function ProductsCatalogCard(props) {
    return (         <div class="products__card">
        <img src={props.imgCard} alt="" class="products__cardImg"/>
        <h4 class="products__cardName">{props.name}</h4>
        <h4 class="products__cardPrice">{props.price}</h4>
    </div> );
}

export default ProductsCatalogCard;