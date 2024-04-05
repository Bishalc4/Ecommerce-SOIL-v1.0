import PropTypes from 'prop-types'
import "./ProductCard.scss"
import { Link } from "react-router-dom"

function ProductCard(props) {
    const productId = props.product.productId;
    const productImage = props.product.imageUrl; //this will be passed through the Specials page
    const productPrice = parseFloat(props.product.price).toFixed(2);
    const productSpecialPrice = parseFloat(props.product.specialPrice).toFixed(2);
    const productName = props.product.productName;
    

    return(
        <div className="product-card-container">
            <Link to="/product" state={{ productId: {productId}}}>
                <img src={productImage} alt="Product Image"/>
            </Link>
            {productSpecialPrice !== null ? (
                <>
                    <h1>${productSpecialPrice}</h1>
                    <h2 className="product-original-price">${productPrice}</h2>
                </>
            ): (
                <h1>${productPrice}</h1>
            )}
            
            <p>{productName}</p>
            <button>Add to cart</button>
        </div>
    );
}
ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard