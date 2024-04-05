import PropTypes from 'prop-types'
import "./ProductCard.scss"

function ProductCard(props) {
    const productImage = props.productImage;
    const productPrice = parseFloat(props.productPrice).toFixed(2);
    const productName = props.productName;

    return(
        <div className="product-card-container">
            <img src={productImage} alt="Product Image"/>
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
}

export default ProductCard