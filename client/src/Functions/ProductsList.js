function ProductsList() {
    const products = [
        { productId: 1, productName: "Banana", price: 0.70, specialPrice: null, category: "Fruits", imageUrl: "banana" },
        { productId: 2, productName: "Cucumber", price: 1.20, specialPrice: null, category: "Vegetables", imageUrl: "cucumber" },
        { productId: 3, productName: "Apple", price: 1.00, specialPrice: null, category: "Fruits", imageUrl: "apple" },
        { productId: 4, productName: "Tomato", price: 0.90, specialPrice: null, category: "Vegetables", imageUrl: "tomato" },
        { productId: 5, productName: "Potato", price: 1.00, specialPrice: null, category: "Vegetables", imageUrl: "potato" },
        { productId: 6, productName: "Carrot", price: 1.20, specialPrice: 0.90, category: "Vegetables", imageUrl: "carrot" },
        { productId: 7, productName: "Orange", price: 0.80, specialPrice: null, category: "Fruits", imageUrl: "orange" },
        { productId: 8, productName: "Broccoli", price: 1.80, specialPrice: null, category: "Vegetables", imageUrl: "broccoli" },
        { productId: 9, productName: "Spinach", price: 1.50, specialPrice: 1.30, category: "Vegetables", imageUrl: "spinach" },
        { productId: 10, productName: "Grapes", price: 2.50, specialPrice: 2.00, category: "Fruits", imageUrl: "grapes" },
        { productId: 11, productName: "Lettuce", price: 1.00, specialPrice: null, category: "Vegetables", imageUrl: "lettuce" },
        { productId: 12, productName: "Strawberry", price: 3.00, specialPrice: null, category: "Fruits", imageUrl: "strawberry" },
        { productId: 13, productName: "Bell Pepper", price: 1.50, specialPrice: null, category: "Vegetables", imageUrl: "bell_pepper" },
        { productId: 14, productName: "Watermelon", price: 4.50, specialPrice: 3.50, category: "Fruits", imageUrl: "watermelon" },
        { productId: 15, productName: "Onion", price: 0.80, specialPrice: null, category: "Vegetables", imageUrl: "onion" },
        { productId: 16, productName: "Pineapple", price: 2.80, specialPrice: null, category: "Fruits", imageUrl: "pineapple" },
        { productId: 17, productName: "Zucchini", price: 1.30, specialPrice: null, category: "Vegetables", imageUrl: "zucchini" },
        { productId: 18, productName: "Kiwi", price: 1.50, specialPrice: null, category: "Fruits", imageUrl: "kiwi" },
        { productId: 19, productName: "Mango", price: 2.00, specialPrice: 1.80, category: "Fruits", imageUrl: "mango" },
        { productId: 20, productName: "Lemon", price: 0.60, specialPrice: null, category: "Fruits", imageUrl: "lemon" },
    ];

    return (
    localStorage.setItem("products", JSON.stringify(products))
    );
}
export default ProductsList; 

