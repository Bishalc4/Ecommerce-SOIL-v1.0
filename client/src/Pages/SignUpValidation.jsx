function validate(values) {
    let errors = {};
    if(!values.name) {
        errors.name = 'Name is required';  //check if name field is empty
    }

    if (!values.email) {                 //check if email field is empty
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';    //check if email is in incorrect format
    }

    if(!values.password) {
        errors.password = 'Password is required';   //check if password field is empty
    }
    if(!/\d/.test(values.password)) {
        errors.password = 'Include Numbers (0-9)';  //check if password doesn't include numbers
    }
    if (!/[!@#$%^&*]/.test(values.password)) {
        errors.password = 'Include Special Characters (!,@,#,$,%,^,&,*)';  //check if password doesn't include special character
    }
    if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Include Uppercase Letter';    //check if password doesn't include Uppercase letters
    }

    if (!/[a-z]/.test(values.password)) {
        errors.password = 'Include Lowercase Letters';  // check if password doesn't include Lowercase letters
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = 'Password is not confirmed';   //check if 
    }
    if(values.password != values.confirmPassword) {
        errors.confirmPassword = 'Password does not match';  //check if password and confirmed password matches 
    }

    return errors;

}

export default validate; 