import React from 'react';

const ArrowNext = (props) => {
    const {cssClass, fill} = props
    return (
        <svg className={cssClass} viewBox="0 0 36 30" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4324 1.00002L34.1405 14.801L19.1526 28.602" stroke={fill}
                  strokeWidth="2"/>
            <path d="M34.1404 14.8031L1.38415 14.8031" stroke={fill} strokeWidth="2"/>
        </svg>
    );
};

export default ArrowNext;