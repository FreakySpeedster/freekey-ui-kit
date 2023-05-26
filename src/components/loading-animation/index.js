import React from 'react';
import '../loading-animation/freekey-loader-v2.css';

const LoadingAnimation = (props) => {
    return (
        <div class="spinner-box-v2">
            <div class="configure-border-1">
                <div class="configure-core"></div>
            </div>  
            <div class="configure-border-2">
                <div class="configure-core"></div>
            </div> 
        </div>
    );
}
export default LoadingAnimation;
