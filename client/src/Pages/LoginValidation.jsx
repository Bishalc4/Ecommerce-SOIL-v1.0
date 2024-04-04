function validate(values) {
    let errors = {};
    
    if (!values.email) {
        errors.email = 'Email address is required';    // check if email field is empty
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {   
        errors.email = 'Email address is invalid';   // chech if email is in incorrect format
    }

    if(!values.password) {
        errors.password = 'Password is required';    // check if password field is empty
    }
    if(!/\d/.test(values.password)) {
        errors.password = 'Include Numbers (0-9)';  //check if password doesn't include numbers
    }
    if (!/[!@#$%^&*]/.test(values.password)) {
        errors.password = 'Include Special Characters (!,@,#,$,%,^,&,*)';  //check if password doesn't include special character
    }
    if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Include Uppercase Letters';    // check if password doesn't include Uppercase letters
    }

    if (!/[a-z]/.test(values.password)) {
        errors.password = 'Include Lowercase Letters';   //check if password doesn't include Lowercase letters
    }

    return errors;
    
    }
    
    export default validate; 