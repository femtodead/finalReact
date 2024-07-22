import FooterModel from '../model/footer/footerModel.js';
import HeaderModel from '../model/header/HeaderModel.js';
import CategoriNav from '../model/categoriNav/categoriNav.js';
import NavOtherPages from "../model/navOtherPages/navOtherPages.js";

function deliveryPage() {
    return ( <>
        <HeaderModel />
        <CategoriNav />
        <NavOtherPages name="Catalog"/>
        <FooterModel />
        </> );
}

export default deliveryPage;