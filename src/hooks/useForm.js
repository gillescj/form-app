import { useState } from 'react';

const useForm = (initialFormValues) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleFormChange = (name) => (event) => {
        event.persist();
        setFormValues((previousFormValues) => {
            return {
                ...previousFormValues,
                [name]: event.target.value,
            };
        });
    };

    return {
        formValues,
        handleFormChange,
    };
};

export default useForm;
