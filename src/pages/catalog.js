import FooterModel from '../model/footer/footerModel.js';
import HeaderModel from '../model/header/HeaderModel.js';
import CategoriNav from '../model/categoriNav/categoriNav.js';
import NavOtherPages from "../model/navOtherPages/navOtherPages.js";
import ProductsCatalog from '../model/ProductsCatalog.js';


function catalog() {
    return ( <>
        <HeaderModel />
        <CategoriNav />
        <NavOtherPages name="Catalog"/>
        <ProductsCatalog />
        <FooterModel />
        </> );
}

export default catalog;