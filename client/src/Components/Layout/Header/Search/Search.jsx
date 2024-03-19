import "./Search.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
    return(
      <InputGroup className="mb-3">
        <InputGroup.Text id="search-bar">
            <FaMagnifyingGlass />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-bar"
        />
      </InputGroup>
    );
}

export default Search;