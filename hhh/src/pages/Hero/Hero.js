import React from 'react';
import './swiper.scss'
import Logo from "../../svg/Logo";
import Close_svg from "../../svg/Close_svg";
import Arrow from "../../svg/arrow/Arrow";
import './hero.scss'
import SlideItem from "../../components/SlideItem";
import ArrowPrev from "../../svg/ArrowPrev";
import ArrowNext from "../../svg/ArrowNext";
const Hero = () => {
    return (
        <>
            <section className="hero scroll" data-scroll-section>
                <div className="hero_container">
                    <div className="logo--white">
                        <Logo color ="white" cssClass ={'hero-logo'}/>
                    </div>
                    <div className="hero_container__content">
                        <article className="main-title-container">
                            <h1 className="main-title"><span className="main-title__decoration">FORTISEC</span>Security STUDIO</h1>
                            <p className="main-title__sub-title">Fortisec надають кваліфіковану підтримку партнерів і
                                кінцевих споживачів <span className="main-title__sub-title__decoration">на стадіях передпроектних дослідженнь</span>
                            </p>
                        </article>
                        <div className="hero_container__news">
                            <div className="new__slide-container">
                                <div className="swiper-container swiper-container--hero ">
                                    <div className="swiper-wrapper ">
                                        <SlideItem text ={{
                                            imgHref:"./public/img/news_first.jpg",
                                            date:"Mar 24, 2020",
                                            description1:'QUADRUM BIURŲ KOMPLEKSO ',
                                            description2:'GESINIMO VANDENS RŪKU SISTEMA',
                                            descriptionCss:'hero__desc__text ',
                                            color:"#ffffff"
                                            }}
                                        />
                                        <SlideItem text ={{
                                            imgHref:"./img/news_first.jpg",
                                            date:"Mar 24, 2020",
                                            description1:'QUADRUM BIURŲ KOMPLEKSO ',
                                            description2:'GESINIMO VANDENS RŪKU SISTEMA',
                                            descriptionCss:'hero__desc__text ',
                                            color:"#ffffff"
                                        }}
                                        />
                                        <SlideItem text ={{
                                            imgHref:"./img/news_first.jpg",
                                            date:"Mar 24, 2020",
                                            description1:'QUADRUM BIURŲ KOMPLEKSO ',
                                            description2:'GESINIMO VANDENS RŪKU SISTEMA',
                                            descriptionCss:'hero__desc__text ',
                                            color:"#ffffff"
                                        }}
                                        />
                                        <SlideItem text ={{
                                            imgHref:"./img/news_first.jpg",
                                            date:"Mar 24, 2020",
                                            description1:'QUADRUM BIURŲ KOMPLEKSO ',
                                            description2:'GESINIMO VANDENS RŪKU SISTEMA',
                                            descriptionCss:'hero__desc__text ',
                                            color:"#ffffff"
                                        }}
                                        />
                                    </div>
                                </div>
                                <div className="slider-button-container-hero">
                                    <div className="swiper-button-prev swiper-button-prev--hero">
                                        <ArrowPrev cssClass={'hero-slider-button '}fill={'#ffffff'}/>
                                    </div>
                                    <div className="swiper-button-next swiper-button-next--hero">
                                        <ArrowNext cssClass={'hero-slider-button '} fill={'#ffffff'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navigation">
                <div className="nav-small">
                    <div className="nav-small__content">
                        <div className="nav-small__content__decoration">
                            <div className="nav-small__content__decoration__line"></div>
                            <div className="nav-small__content__decoration__line"></div>
                        </div>
                        <p className="nav-small__text">МЕНЮ</p>
                    </div>
                    <a href="#" className="nav-small__lang">EN</a>
                </div>
                <div className="navigation-container-wrapper">
                    <div className="navigation-container">
                        <div className="navigation-container__header">
                            <div className="logo-dark">
                               <Logo color="#373737" cssClass ={'logo-black'}/>
                            </div>
                            <div className="navigation-container__lang">
                                <a href={'#'} className="navigation-container__lang__text">UA</a><a href={'#'}
                                className="navigation-container__lang__text navigation-container__lang__text--en">EN</a>
                                <button className="btn btn--close">
                                    <Close_svg color="#373737"/>
                                </button>
                            </div>
                        </div>
                        <div className="navigation-container__content">
                            <ul className="navigation-list">
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">головна</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'}/></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">про нас</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">бренди</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">Компетенції</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">навчання</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">послуги</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">новини</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                                <li className="list-items"><a href="" className="list-items__href"><span className="list-items__href__text">контакти</span></a><span className="list-items__href__decoration"> <Arrow color="#373737" cssClass={'menu-arrow'} /></span></li>
                            </ul>
                            <div className="navigation-container__footer">
                                <a href="" className="link-action">Tel.: +38 (050) 353-04-65,</a>
                                <a href="" className="link-action">Mail to: info@fortisec.com.ua</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Hero;