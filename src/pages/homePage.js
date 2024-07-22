import FooterModel from '../model/footer/footerModel.js';
import HeaderModel from '../model/header/HeaderModel.js';
import BanerModel from '../model/baner/banerModel.js';
import CategoriNav from '../model/categoriNav/categoriNav.js';
import ImgCateri from '../model/imgCateri.js';
import ProductsHome from '../model/productsHome.js';
function homePage() {
    return ( 
        <>
    <HeaderModel />
    <CategoriNav />
    <BanerModel />
    <ImgCateri />
    <ProductsHome />
    <FooterModel />
        </>
     );
}

export default homePage;