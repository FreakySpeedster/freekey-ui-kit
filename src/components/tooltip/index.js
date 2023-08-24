import React from 'react';
import './freekey-tooltip.css';

const Tooltip = (props) => {
    const { text, tooltipText, position } = props;

    const getTooltipPosition = () => {
        switch(position) {
            case 'TOP':
                return 'freekey-tooltip-top';
            case 'BOTTOM':
                return 'freekey-tooltip-bottom';
            case 'LEFT':
                return 'freekey-tooltip-left';
            case 'RIGHT':
                return 'freekey-tooltip-right';
            default:
                return 'freekey-tooltip-top';
        }
    };
    
    return (
        <span className="freekey-tooltip">{text}
            <span className={`${getTooltipPosition()} freekey-tooltip-text`}>{tooltipText} </span>
        </span>
    );
}
export default Tooltip;
