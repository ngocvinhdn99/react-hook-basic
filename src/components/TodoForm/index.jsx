import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props

    const [value, setValue] = useState('')

    function handleValueInput(e) {
        setValue(e.target.value)
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        if (!onSubmit) return

        const formValues = {
            title: value
        }
        onSubmit(formValues)

        setValue('')
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" value={value} onChange={handleValueInput} />
        </form>
    );
}

export default TodoForm;