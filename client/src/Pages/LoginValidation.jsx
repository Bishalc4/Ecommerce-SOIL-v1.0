function validate(values) {
    let errors = {};
    
    if (!values.email) {
        errors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.password) {
        errors.password = 'Password is required';
    }
    if(!/\d/.test(values.password)) {
        errors.password = 'Include Numbers (0-9)';
    }
    if (!/[!@#$%^&*]/.test(values.password)) {
        errors.password = 'Include Special Characters (@, #, $, etc.)';
    }
    if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Include Uppercase Letters';
    }

    if (!/[a-z]/.test(values.password)) {
        errors.password = 'Include Uppercase Letters';
    }

    return errors;
    
    };
    
    export default validate; 