import React from 'react';
import Logo from "../../svg/Logo";
import Arrow from "../../svg/arrow/Arrow";
import {Link} from "react-router-dom";
import './notFound.scss'

const NotFound = () => {
    return (
        <div className={'not-found-wrapper'} data-scroll-container>

        <section className={'not-found'} data-scroll-section data-scroll-true>
            <div className="notFound-logo">
                <Logo color ={'#373737'} cssClass ={'notFound-logo__decoration'}/>
            </div>
            <div className="not-found__content">
                <div className="not-found__content__text">
                    <p className="notFound-error">
                        404
                    </p>
                    <ul className={'contact-items'}>
                        <li className="contact__list"><a href="tel:+38(050)3530465" className="contact__list__href">Tel.: +38 (050) 353-04-65</a></li>
                        <li className="contact__list"><a href="tel:+38(050)3530465" className="contact__list__href">Tel.: +38 (050) 353-04-65</a></li>
                        <li className="contact__list"><a href="mailto:info@fortisec.com.ua" className="contact__list__href">Mail to: info@fortisec.com.ua</a></li>
                    </ul>
                </div>
                <div className="not-found__content__img">
                    <img src="./img/contact.jpg" alt=""/>
                </div>
            </div>
            <div className="wrapper">
            <Link to="/main" className="category-link"><div><span className="category-link__text">головна сторiнка</span></div> <span
                className="list-items__href__decoration">
                        <Arrow color ="#373737" cssClass ={"category-link__svg"}/>
                    </span></Link>
            </div>
            </section>

        </div>
    );
};

export default NotFound;