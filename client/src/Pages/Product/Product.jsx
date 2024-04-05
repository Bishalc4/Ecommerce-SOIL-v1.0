import { useLocation } from 'react-router-dom';

function Product() {
    const location = useLocation();
    const text = location.state.productId;
    //use the productId to display all information (retrieve from local storage)
    //alternatively just pass props from productCard

    return(
        <>
            <h1>Product ID: {text}</h1>
        </>
    );
}
export default Product