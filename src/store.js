import { configureStore } from "@reduxjs/toolkit";
import productsList from "./reducers/productsList";







const store = configureStore({
    reducer: {
        products: productsList,
    }
});

export default store;