import "./Search.css";
import { IoSearch } from "react-icons/io5";

function Search(){
    return(
        <div className="search-box">
            <input type="text" placeholder="Search..." />
            <IoSearch className="search-icon"/>
        </div>
    );
}

export default Search;