import React from 'react';

const CloseSvg = (props) => {
    const {color} =  props
    return (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.01" fillRule="evenodd" clipRule="evenodd"
                  d="M30.7591 30.7589C36.4217 25.0963 36.4217 15.9154 30.7591 10.2528C25.0965 4.59021 15.9157 4.59021 10.253 10.2528C4.59045 15.9154 4.59045 25.0963 10.253 30.7589C15.9157 36.4215 25.0965 36.4215 30.7591 30.7589Z"
                  fill="white"/>
            <path d="M14.1416 13.435L26.8696 26.1629" stroke={color} strokeWidth="2"
                  strokeLinecap="square"/>
            <path d="M26.8702 13.4346L14.1422 26.1625" stroke={color} strokeWidth="2"
                  strokeLinecap="square"/>
        </svg>
    );
};

export default CloseSvg;