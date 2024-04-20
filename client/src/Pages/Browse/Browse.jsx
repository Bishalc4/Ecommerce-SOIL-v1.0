import { useState, useEffect } from 'react';
import ProductCard from '../../Components/Layout/ProductCard/ProductCard';
import images from '../../assets';
import "./Browse.scss"

function Browse() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const storedProduct = JSON.parse(localStorage.getItem("products"));
        if (storedProduct) {
            setProduct(storedProduct);
        }
    }, []);

    return(
        <div className="browse-container">
            <h1>Browse products by category</h1>
            <div className="products-grid-container">
                <h2>Fruits</h2>
                {product
                    .filter(item => item.category === "Fruits") //if productName contains the query string
                    .map((item, index) => (
                    <ProductCard key={index} product={item} image={images[item.imageUrl]} />
                ))}
                <h2 className='vegetables'>Vegetables</h2>
                {product
                    .filter(item => item.category === "Vegetables") //if productName contains the query string
                    .map((item, index) => (
                    <ProductCard key={index} product={item} image={images[item.imageUrl]} />
                ))}
            </div>
        </div>
    );
}

export default Browse