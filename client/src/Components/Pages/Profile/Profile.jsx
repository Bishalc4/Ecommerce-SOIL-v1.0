import Button from 'react-bootstrap/Button';
import { BsPersonCircle } from "react-icons/bs";
import "./Profile.css"


function Profile() {
    return(
        <>
            <Button variant="light" className='profile-button'>
                <div className='profile-icon-container'>
                    <BsPersonCircle className='profile-icon'/> {/*replace icon with user image/avatar */}
                    <div className='text'>Log in/Sign up</div> {/*replace text with "Profile" or "Username" when signed in*/}
                </div>
            </Button>
        </>
    );
}

export default Profile;