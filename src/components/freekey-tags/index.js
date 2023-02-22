import React from 'react';
import TagCapsule from '../tag-capsule';
import './freekey-tags.css';

const FreekeyTags = (props) => {
    const { tags, containerClass, showCloseIcon, valuePath, clearTag } = props;
    const tagName = (tag) => {
        return valuePath ? tag[valuePath] : tag;
    }

    return (
        <div className={`${containerClass ? containerClass : ''}`}>
            {tags.map((tag)=> {
                return <TagCapsule key={tag} text={tagName(tag)} showCloseIcon={showCloseIcon} clearTag={() => clearTag(tag)}/>
                }
            )}
        </div>
    );
}
export default FreekeyTags;
