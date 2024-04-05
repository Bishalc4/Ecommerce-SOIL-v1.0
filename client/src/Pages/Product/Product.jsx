import { useLocation } from 'react-router-dom';

function Product() {
    const location = useLocation();
    const text = location.state.productId;
    console.log(text)

    return(
        <>
            <h1>Product ID: {text}</h1>
        </>
    );
}
export default Product