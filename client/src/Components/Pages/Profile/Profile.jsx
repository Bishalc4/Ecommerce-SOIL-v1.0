import Button from 'react-bootstrap/Button';
import { BsPersonCircle } from "react-icons/bs";
import "./Profile.css"


function Profile() {
    return(
        <>
            <Button variant="light" className='profile-button'>
                <div className='profile-icon-container'>
                    <BsPersonCircle className='profile-icon'/>
                    <div className='text'>Log in/Sign up</div>
                </div>
            </Button>
        </>
    );
}

export default Profile;