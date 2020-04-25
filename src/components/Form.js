import React from 'react';

import useForm from '../hooks/useForm';

const Form = () => {
    const { formValues, handleFormChange } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const addUser = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues, null, 4));
    };

    return (
        <form onSubmit={addUser}>
            <input
                name="firstName"
                type="text"
                onChange={handleFormChange('firstName')}
                value={formValues.firstName}
                placeholder="First Name"
            />
            <input
                name="lastName"
                type="text"
                onChange={handleFormChange('lastName')}
                value={formValues.lastName}
                placeholder="Last Name"
            />
            <input
                name="email"
                type="email"
                onChange={handleFormChange('email')}
                value={formValues.email}
                placeholder="Email"
            />
            <input
                name="password"
                type="password"
                onChange={handleFormChange('password')}
                value={formValues.password}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
