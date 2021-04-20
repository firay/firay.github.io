import React from 'react';
import Close_svg from "../../svg/Close_svg";
import './competencePop.scss'

const CompetencePop = (props) => {
    const {title, id, img, hide, actions, isOpenModal} = props
    return (
        <div className="competence-pop" id={id}>
            <button id ={id} className={'btn btn--close btn--close--competence-pop'}><Close_svg color={'#373737'}/></button>
            <h5 className={'title title--competence-pop'}>{title}</h5>
            <div className="competence__container">
                <div className="competence__container__img">
                    <img src={img} alt="" className={"pop-img"}/>
                </div>
                <div className="competence__container__content">
                    {actions.ulShow()}
                </div>
            </div>
        </div>
    );
};

export default CompetencePop;