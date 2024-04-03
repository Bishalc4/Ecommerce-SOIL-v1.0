function validate(values) {
    let errors = {};
    if(!values.name) {
        errors.name = 'Name is required';
    }

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
        errors.password = 'Include Special Characters (!,@,#,$,%,^,&,*)';
    }
    if (!/[A-Z]/.test(values.password)) {
        errors.password = 'Include Uppercase Letter';
    }

    if (!/[a-z]/.test(values.password)) {
        errors.password = 'Include Uppercase Letters';
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = 'Password is not confirmed';
    }
    if(values.password != values.confirmPassword) {
        errors.confirmPassword = 'Password does not match';
    }

    return errors;

};

export default validate; 