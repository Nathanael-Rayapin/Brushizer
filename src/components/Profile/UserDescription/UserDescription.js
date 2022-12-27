import { useEffect, useRef } from 'react';
import './style.scss'

function UserDescription({ text, setText }) {
    const descriptionElem = useRef(null);

    useEffect(() => {
        descriptionElem.current.focus();
    })

    const handleChange = () => {
        if (descriptionElem.current.value.length < 1) {
            setText('');
            return;
        }
        setText(descriptionElem.current.value)
    }

    return (
        <textarea
            maxLength={120}
            minLength={2}
            placeholder='Your description'
            onChange={() => handleChange()}
            value={text}
            ref={descriptionElem}
            className='textarea-description'
        >
        </textarea>
    );
}

export default UserDescription;
