import React from 'react';
import './Contact.scss'
import Arrow from "../../svg/arrow/Arrow";
const Contact = () => {
    return (
        <section className="contact scroll" data-scroll-section>
            <div className="wrapper">
            <h4 className="title">контакти</h4>
            <div className="contact-content">
                <ul className={'contact-items'}>
                    <li className="contact__list"><a href="tel:+38(050)3530465" className="contact__list__href">Tel.: +38 (050) 353-04-65</a></li>
                    <li className="contact__list"><a href="tel:+38(050)3530465" className="contact__list__href">Tel.: +38 (050) 353-04-65</a></li>
                    <li className="contact__list"><a href="mailto:info@fortisec.com.ua" className="contact__list__href">Mail to: info@fortisec.com.ua</a></li>
                </ul>
                <div className="contact__img_container">
                    <img src="./img/contact.jpg" alt=""/>
                    <a href="" className="category-link category-link--contact"><div><span className="category-link__text">Office 304-306, Building 11, Kurortna</span><span className="category-link__text category-link__text--last"> str., Kyiv, 04075, Ukraine</span></div> <span
                        className="list-items__href__decoration">
                        <Arrow color ="#373737" cssClass ={"category-link__svg"}/>
                    </span></a>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;