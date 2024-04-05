import { useState, useEffect } from 'react';
import ProductCard from "../../Components/Layout/ProductCard/ProductCard";
// import banana from "../../assets/ProductsImage/banana.jpg";
import "./Specials.scss";

//Special deals page - displays products on sale
function Specials(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem("products"));
        if (storedProduct) {
            setProduct(storedProduct);
        }
    }, []);

    return(
        <div className="specials-container">
            <div className="products-grid-container">
                {product
                    .filter(item => item.specialPrice !== null)
                    .map((item, index) => (
                    <ProductCard key={index} product={item} />
                ))}
            </div>
        </div>
    );
}

export default Specials;