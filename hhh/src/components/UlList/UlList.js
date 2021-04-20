import React from 'react';
import Arrow from "../../svg/arrow/Arrow";
import './ulList.scss'

const UlList = (props) => {
    const {text, href, cssClass,cssSpan,cssSvg, cssColor, id} = props
    return (
        <li className={cssClass} id ={id}>
            <p  className="competence__list__text"><span className="decoration-text">{text}</span><span className={cssSpan}>
               <Arrow cssClass={cssSvg} color={cssColor}/>
            </span>
            </p>
        </li>
    );
};

export default UlList;