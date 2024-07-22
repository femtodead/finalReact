import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Catalog  from "./pages/catalog.js";
import DeliveryPage from "./pages/deliveryPage.js";
import HomePage from "./pages/homePage.js";
import ProductPage  from "./pages/productPage.js";
import ShoppingCart from "./pages/shoppingCart.js";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
  <BrowserRouter>
        <Routes>
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Delivery" element={<DeliveryPage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Product" element={<ProductPage />}/>
          <Route path="/ShoppingCart" element={<ShoppingCart />}/>
        </Routes>
    
  </BrowserRouter>
  </Provider>
  );
}

export default App;
