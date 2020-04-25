import { useState } from 'react';

const useForm = ({ initialFormValues, onFormSubmit }) => {
    const [formValues, setFormValues] = useState(initialFormValues || {});

    const handleFormChange = (name) => (event) => {
        event.persist();
        setFormValues((previousFormValues) => {
            return {
                ...previousFormValues,
                [name]: event.target.value,
            };
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formValues);
    };

    return {
        formValues,
        handleFormChange,
        handleFormSubmit,
    };
};

export default useForm;
