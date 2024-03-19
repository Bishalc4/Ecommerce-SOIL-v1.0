import Button from 'react-bootstrap/Button';
import { BsPersonCircle } from "react-icons/bs";
import "./Profile.css"


function Profile() {
    return(
        <>
            <Button variant="light">
                <BsPersonCircle />
                Log in/Sign up
            </Button>
        </>
    );
}

export default Profile;