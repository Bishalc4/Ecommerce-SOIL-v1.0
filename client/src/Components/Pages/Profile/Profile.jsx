import Button from 'react-bootstrap/Button';
import { BsPersonCircle } from "react-icons/bs";
import "./Profile.css"


function Profile() {
    return(
        <>
            <Button variant="light" className='profile-button'>
                <BsPersonCircle className='profile-icon'/>
                Log in/Sign up
            </Button>
        </>
    );
}

export default Profile;