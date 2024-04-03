import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import AuthHeader from "../../Components/Layout/Auth-Header/AuthHeader"
import "./SignUp.scss"
import validate from "../SignUpValidation"

function SignUp() {
     const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
     })

     const [errors, setError] = useState({});

     function handleSubmit(event) {
        if(event) event.preventDefault();
        setError(validate(values));

     }

     function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
     }

     useEffect(() => {
        if (Object.keys(errors).length === 0 && (values.name !== "" && values.email !== "" && values.password !== "" && values.confirmPassword !== "")) {
           alert("“Thank you for joining our SOIL community");
           const userData = { name: values.name, email: values.email, password: values.password };

           localStorage.setItem("Users", JSON.stringify(userData));
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