import React, { useState, useEffect } from "react";
import { ShopProductsList } from "../components/shopProductsList";
import { fetchProducts } from "../utils/fetchProducts";
import { Preloader } from "../components/preloader";
import { ShopMainFilter } from "../components/shopMainFilter";


export const Shop = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchProducts()
        .then(({products: goods}) => {
            setProducts(goods);
        })
    }, []);

    return (
        <>
        <ShopMainFilter/>
        {products ? <ShopProductsList products={products}/> : <Preloader/>}
        </>
    )
};