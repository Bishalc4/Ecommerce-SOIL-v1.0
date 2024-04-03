import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import AuthHeader from "../../Components/Layout/Auth-Header/AuthHeader"
import "./SignUp.scss"
import validate from "../SignUpValidation"
import DietNutrition from "../DietNutrition/DietNutrition"

function SignUp() {
     const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
     })

     const [errors, setError] = useState({});

     function handleSubmit(e) {
        e.preventDefault();
        setError(validate(values));

     }

     function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
     }

     useEffect(() => {
        if (Object.keys(errors).length === 0 && (values.name !== "" && values.email !== "" && values.password !== "" && values.confirmPassword !== "")) {

           const existingUsers = JSON.parse(localStorage.getItem("users")) || []; // reterive all existing users or assign to nothing if 'users' key is not there

           const existingUser = existingUsers.find(user => user.email === values.email && (user.name).toLowerCase() === (values.name).toLowerCase());  //check if inputted login detail matches with existing user
            
            if (existingUser) {
                alert("Account already exists");
            }

            else {
            alert("Thank you for joining our SOIL community");

            const currDate = new Date();
            const year = currDate.getFullYear();
            const month = currDate.getMonth() + 1; 
            const day = currDate.getDate();


            const userData = { name: values.name, email: values.email, password: values.password, dateJoined: `${year}-${month}-${day}`}
            const updatedUsers = [...existingUsers, userData];

            localStorage.setItem("user", JSON.stringify(values.name));
            localStorage.setItem("users", JSON.stringify(updatedUsers)); }
        }
      }, [errors]);


    return(
        <>
        <AuthHeader />
        <hr></hr>
        <div className="signup-container">
            <form className="form-container" onSubmit={handleSubmit}>

                <div className="signup-form-group">
                    <label className="signup-label-control">Name</label>
                    <input type='text' placeholder='Enter Name' className="signup-input-control" value={values.name} name='name' onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div className="signup-form-group">
                    <label className="signup-label-control">Email</label>
                    <input type='email' placeholder='example@gmail.com' className="signup-input-control" value={values.email} name='email' onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="signup-form-group">
                    <label className="signup-label-control">Password</label>
                    <input type="password" placeholder='Enter Password' className="signup-input-control" value={values.password} name='password' onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="signup-form-group">
                    <label className="signup-label-control">Confirm Password</label>
                    <input type="password" className="signup-input-control" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>

                <div className="signup-form-group">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            
            <div className="sign-up-link-container">
                <p>Already have an account?</p>
                <Link to="/login">
                    <p>Login here</p>
                </Link>
            </div>
        </div>
        </>
    );
}

export default SignUp;