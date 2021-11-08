import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const { onSubmit } = props
    const [inputValue, setInputValue] = useState('')
    const typingTimeoutRef = useRef(null)

    function handleonChangeInput(e) {
        const value = e.target.value


        setInputValue(value)

        if (!onSubmit) return

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            }
            onSubmit(formValues)
        }, 300)


    }

    // function handleSubmitInputValue(e) {
    //     e.preventDefault()

    //     const formValues = {
    //         searchTerm: inputValue
    //     }
    //     onSubmit(formValues)
    // }

    return (
        <div>
            <form
            // onSubmit={handleSubmitInputValue}
            >
                <input type="text" value={inputValue} onChange={handleonChangeInput} />
            </form>
        </div>
    );
}

export default PostFilterForm;