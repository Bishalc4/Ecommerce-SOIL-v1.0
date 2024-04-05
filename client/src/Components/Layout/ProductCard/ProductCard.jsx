import PropTypes from 'prop-types'
import "./ProductCard.scss"
import { Link } from "react-router-dom"

function ProductCard(props) {
    const productImage = props.productImage;
    const productPrice = parseFloat(props.productPrice).toFixed(2);
    const productName = props.productName;

    return(
        <div className="product-card-container">
            <Link to="/product" state={{ productId: props.productId}}>
                <img src={productImage} alt="Product Image"/>
            </Link>
            <h1>${productPrice}</h1>
            <p>{productName}</p>
            <button>Add to cart</button>
        </div>
    );
}
ProductCard.propTypes = {
    productImage: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productId: PropTypes.number.isRequired,
}

export default ProductCard