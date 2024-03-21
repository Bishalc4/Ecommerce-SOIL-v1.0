import "./Search.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
    return(
      <InputGroup className="mb">
        <InputGroup.Text id="search-bar" className="bg-white border-right-0">
            <FaMagnifyingGlass />
        </InputGroup.Text>
        <Form.Control
          className="search-input"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-bar"
        />
      </InputGroup>
    );
}

export default Search;