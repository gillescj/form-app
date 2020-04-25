import React from 'react';

import useForm from '../hooks/useForm';

const Form = () => {
    const displayFormValues = (values) => {
        alert(JSON.stringify(values, null, 4));
    };

    const { formValues, handleFormChange, handleFormSubmit } = useForm({
        initialFormValues: { firstName: '', lastName: '', email: '', password: '' },
        onFormSubmit: displayFormValues,
    });

    return (
        <form onSubmit={handleFormSubmit}>
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
