function AddCartButton ( {productId}) {

    function handleClick(e) {
    const user = JSON.parse(localStorage.getItem("user"));

    const quantityCount = 1;

    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const userCart = existingCart.find(item => item.username === user);

    if (userCart) {                                                // User exists in the cart
        let productExist = false;                                  // check if product already exist 
        for (let i = 0; i < userCart.data.length; i++) {
            if (userCart.data[i].productId === productId) {        // increment the quantity if product exist in user cart
                userCart.data[i].quantity += quantityCount;
                productExist = true;
                break;
            }
        }
        if (!productExist) {
            userCart.data = [...userCart.data, { productId: productId, quantity: quantityCount }];  }
        } 
    else {
        existingCart = [...existingCart, {username: user, data: [{ productId: productId, quantity: quantityCount }]}]; // User doesn't exist in the cart, add a new user cart
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    }

    return (
            <button onClick={handleClick}>Add to cart</button>
    );

}
export default AddCartButton