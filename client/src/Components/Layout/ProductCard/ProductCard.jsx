import PropTypes from 'prop-types'
import "./ProductCard.scss"
import { Link } from "react-router-dom"

function ProductCard(props) {
    const productId = props.product.productId;
    const productPrice = parseFloat(props.product.price).toFixed(2);
    const productSpecialPrice = parseFloat(props.product.specialPrice).toFixed(2);
    const productName = props.product.productName;
    const image = props.image;
    

    return(
        <div className="product-card-container">
            <Link to="/product" state={{ productId: {productId}}}>
                <img src={image} alt="Product Image"/>
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
    image: PropTypes.string,
}

export default ProductCard