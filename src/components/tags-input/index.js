import React, { useState } from 'react';
import TagCapsule from '../tag-capsule';
import '../tags/freekey-tags.css';

const TagsInput = (props) => {
    const { containerClass } = props;
    const [ tags, setTags ] = useState([]);
    const [ inputValue, setInputValue ] = useState('');

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            if (!tags.includes(inputValue) && inputValue!=='') {
                setTags([...tags, inputValue]);
                setInputValue('');
            }
        } else if (event.key === 'Backspace') {
            if (inputValue === '') {
                tags.length && removeTag(tags[tags.length - 1]);
            }
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const removeTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    }
    
    return (
        <div className={`tags-input ${containerClass ? containerClass : ''}`}>
            {tags.map((tag)=> {
                return <TagCapsule key={tag} text={tag} tag={tag} showCloseIcon={true} iconPosition={'RIGHT'} clearTag={() => removeTag(tag)} />
            })}
            <input type="text" className='active-tags-input' onKeyUp={handleKeyUp} onChange={handleInputChange} placeholder="Add a tag" value={inputValue}/>
        </div>
    );
}
export default TagsInput;
