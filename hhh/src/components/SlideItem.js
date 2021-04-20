import React from 'react';
import Arrow from "../svg/arrow/Arrow";

const SlideItem = (props) => {
    const {text} = props
    const {imgHref, date, description1, description2, color, descriptionCss} = text
    return (
        <>
            <div className="swiper-slide swiper-slide--news">
                <div className="news__content">
                    <div className="news__content__img">
                        <img src={imgHref} alt="" className="slide__img"/>
                    </div>
                    <article className="news__desc">
                        <p className="hero-desc__date">{date}</p>
                        <a href={"#"} className="news__desc__container">
                            <div className={descriptionCss}>
                                <p className={'news__desc__text-decoration'}><span className="news__desc__text-decoration__border">{description1}</span></p>
                                <p className={'news__desc__text-decoration'}><span className="news__desc__text-decoration__border">{description2}</span></p>
                            </div>
                            <Arrow color={color} cssClass={"slide-hero-arrow"}/>
                        </a>
                    </article>
                </div>
            </div>
        </>
    );
};

export default SlideItem;