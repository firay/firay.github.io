import React from 'react';
import './news.scss'
import Arrow from "../../svg/arrow/Arrow";
import ArrowPrev from "../../svg/ArrowPrev";
import ArrowNext from "../../svg/ArrowNext";
import SlideItem from "../../components/SlideItem";

const News = () => {
    return (
        <section className="news" data-scroll-section data-scroll="true">
            <h5 className="title category-title--news">новини</h5>
            <div className="wrapper">
            <div className="new__slide-container">
                <div className="swiper-container swiper-container--news ">
                    <div className="swiper-wrapper swiper-wrapper--news">
                        <SlideItem text ={{
                            imgHref:"./img/news_first.jpg",
                            date:"Mar 24, 2020",
                            description1:'QUADRUM BIURŲ KOMPLEKSO GESINIMO',
                            description2:'VANDENS RŪKU SISTEMA',
                            descriptionCss:'hero__desc__text news__desc__text',
                            color:"#373737"
                        }}/>
                        <SlideItem text ={{
                            imgHref:"./img/train.jpg",
                            date:"Mar 24, 2020",
                            description1:'QUADRUM BIURŲ KOMPLEKSO GESINIMO',
                            description2:'VANDENS RŪKU SISTEMA',
                            descriptionCss:'hero__desc__text news__desc__text',
                            color:"#373737"
                        }}/>
                        <SlideItem text ={{
                            imgHref:"./img/news_first.jpg",
                            date:"Mar 24, 2020",
                            description1:'QUADRUM BIURŲ KOMPLEKSO GESINIMO',
                            description2:'VANDENS RŪKU SISTEMA',
                            descriptionCss:'hero__desc__text news__desc__text',
                            color:"#373737"
                        }}/>
                        <SlideItem text ={{
                            imgHref:"./img/train.jpg",
                            date:"Mar 24, 2020",
                            description1:'QUADRUM BIURŲ KOMPLEKSO GESINIMO',
                            description2:'VANDENS RŪKU SISTEMA',
                            descriptionCss:'hero__desc__text news__desc__text',
                            color:"#373737"
                        }}/>
                        <div className="swiper-slide swiper-slide--news">
                            <div className="news__content news__content--last">
                                <a href="" className="news__content--last__href">ВСІ НОВИНИ</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="slider-news-button-container">
                    <div className="swiper-button-prev swiper-button-prev--news">
                        <ArrowPrev cssClass={'hero-slider-button '}fill={'#3d3d3d'}/>
                    </div>
                    <div className="swiper-button-next swiper-button-next--news">
                        <ArrowNext cssClass={'hero-slider-button '} fill={'#3d3d3d'}/>
                    </div>
                </div>
            </div>
            <a href="" className="category-link"><span className="category-link__text">ПОСЛУГИ</span> <span
                className="list-items__href__decoration"><Arrow color ="#373737" cssClass ={"category-link__svg"}/> </span></a>
            </div>
        </section>
    );
};

export default News;