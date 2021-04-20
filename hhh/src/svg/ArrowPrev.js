import React from 'react';

const ArrowPrev = (props) => {
    const {cssClass, fill} = props
    return (
        <svg className={cssClass} viewBox="0 0 37 30" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8481 29.204L2.14003 15.403L17.128 1.60199" stroke={fill}
                  strokeWidth="2"/>
            <path d="M2.14014 15.4009L34.8964 15.4009" stroke={fill} strokeWidth="2"/>
        </svg>
    );
};

export default ArrowPrev;