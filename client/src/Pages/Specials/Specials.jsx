import "./Specials.scss"
import ProductCard from "../../Components/Layout/ProductCard/ProductCard";
import banana from "../../assets/ProductsImage/banana.jpg"

//Special deals page - displays products on sale
function Specials(){
    return(
        <div className="specials-container">
            <div className="products-grid-container">
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
                <ProductCard productName="Banana" productPrice={0.7} productImage={banana}/>
            </div>
        </div>
    );
}

export default Specials;