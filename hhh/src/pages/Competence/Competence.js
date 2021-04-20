import React from 'react';
import './competence.scss'
import UlList from "../../components/UlList/UlList";
import CompetencePop from "../../components/CompetencePop/CompetencePop";
const Competence = (props) => {
    return (
        <section className="competence scroll" data-scroll-section>
            <div className="competence-wrapper">
                <div className="competence__content">
                    <div className="competence__content__header">
                        <h5 className="title">компетенції</h5>
                        <p className="competence_sub-title">"Персонал ТОВ "Фортісек" має практичний досвід та надає
                            кваліфіковані консультації в наступних галузях індустрії безпеки:"</p>
                    </div>
                    <ul className="competence__lists">
                        <UlList text={'01. Системи охоронного і технологічного відеоспостереження'}
                                cssClass={'competence__list'}
                                cssSpan={'competence__list__text__decoration'}
                                cssSvg ={'competence__list__svg'}
                                color={'#373737'}
                                id={'showFirst'}
                        />
                        <UlList text={'02.  Системи контролю і управління  доступом'}
                                cssClass={'competence__list'}
                                cssSpan={'competence__list__text__decoration'}
                                cssSvg ={'competence__list__svg'}
                                color={'#373737'}
                                id={'showSecond'}
                        />
                        <UlList text={'03.  Системи охоронного патрулювання'}
                                cssClass={'competence__list'}
                                cssSpan={'competence__list__text__decoration'}
                                cssSvg ={'competence__list__svg'}
                                color={'#373737'}
                                id={'showThird'}
                        />
                        <UlList text={'04.   Інтегровані комплекси безпеки'}
                                cssClass={'competence__list'}
                                cssSpan={'competence__list__text__decoration'}
                                cssSvg ={'competence__list__svg'}
                                color={'#373737'}
                                id={'showFourth'}
                        />
                        <UlList text={'05.  Системи периметральної сигналізації'}
                                cssClass={'competence__list'}
                                cssSpan={'competence__list__text__decoration'}
                                cssSvg ={'competence__list__svg'}
                                color={'#373737'}
                                id={'showFive'}
                        />
                    </ul>
                </div>
                <div className="competence__img">
                    <img src="./img/night_ceety.jpg" alt=""/>
                </div>
            </div>
            <CompetencePop
                title={'Системи охоронного і технологічного відеоспостереження'}
                img={'./img/contact.jpg'}
                id={'showFirst'}
                actions={{
                    ulShow: () => (
                        <ul className="competence-ul">
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи на базі активної інфрачервоній оптико-електронної технології</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Периметральні системи для вибухонебезпечних середовищ</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи обліку робочого часу</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Сериметральні системи з використанням бездротових каналів зв'язку</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи активації автоматичних двСистеми охоронного патрулюванняерей</p></li>
                        </ul>
                    )
                }}/>
            <CompetencePop
                title={'Системи контролю і управління  доступом'}
                img={'./img/contact.jpg'}
                id={'showSecond'}
                actions={{
                    ulShow: () => (
                        <ul className="competence-ul">
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи на базі активної інфрачервоній оптико-електронної технології</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Периметральні системи для вибухонебезпечних середовищ</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи обліку робочого часу</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Сериметральні системи з використанням бездротових каналів зв'язку</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи активації автоматичних двСистеми охоронного патрулюванняерей</p></li>
                        </ul>
                    )
                }}/>
            <CompetencePop
                title={'Системи охоронного патрулювання'}
                img={'./img/contact.jpg'}
                id={'showThird'}
                actions={{
                    ulShow: () => (
                        <ul className="competence-ul">
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи на базі активної інфрачервоній оптико-електронної технології</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Периметральні системи для вибухонебезпечних середовищ</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи обліку робочого часу</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Сериметральні системи з використанням бездротових каналів зв'язку</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи активації автоматичних двСистеми охоронного патрулюванняерей</p></li>
                        </ul>
                    )
                }}/>
            <CompetencePop
                title={'Інтегровані комплекси безпеки'}
                img={'./img/contact.jpg'}
                id={'showFourth'}
                actions={{
                    ulShow: () => (
                        <ul className="competence-ul">
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи на базі активної інфрачервоній оптико-електронної технології</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Периметральні системи для вибухонебезпечних середовищ</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи обліку робочого часу</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Сериметральні системи з використанням бездротових каналів зв'язку</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи активації автоматичних двСистеми охоронного патрулюванняерей</p></li>
                        </ul>
                    )
                }}/>
            <CompetencePop
                title={'Системи периметральної сигналізації'}
                img={'./img/contact.jpg'}
                id={'showFive'}
                actions={{
                    ulShow: () => (
                        <ul className="competence-ul">
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи на базі активної інфрачервоній оптико-електронної технології</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Периметральні системи для вибухонебезпечних середовищ</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи обліку робочого часу</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Сериметральні системи з використанням бездротових каналів зв'язку</p></li>
                            <li className={'competence-item'}><p className={'competence-item__text'}>Системи активації автоматичних двСистеми охоронного патрулюванняерей</p></li>
                        </ul>
                    )
                }}/>
        </section>
    );
};

export default Competence;