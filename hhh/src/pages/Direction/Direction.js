import React from 'react';
import './direction.scss'
import UlList from "../../components/UlList/UlList";

const Direction = () => {
    return (
        <section className="direction" data-scroll-section>
            <div className="wrapper">
            <h4 className="direction__title">Напрямки навчання</h4>
            <article className="direction__content">
                <ul className="direction__ways">
                    <UlList text={'Системи периметральної сигналізації'}
                            cssClass={'competence__list--alternative'}
                            cssSpan={'competence__list__text__decoration'}
                            cssSvg ={'direction__list__svg'}
                            cssColor={'#2B2B2B'}
                    />
                    <UlList text={'Системи відеонагляду'}
                            cssClass={'competence__list--alternative'}
                            cssSpan={'competence__list__text__decoration'}
                            cssSvg ={'direction__list__svg'}
                            cssColor={'#2B2B2B'}
                    />
                    <UlList text={'Системи охоронного патрулювання'}
                            cssClass={'competence__list--alternative'}
                            cssSpan={'competence__list__text__decoration'}
                            cssSvg ={'direction__list__svg'}
                            cssColor={'#2B2B2B'}
                    />
                    <UlList text={'Системи контролю і управління доступом'}
                            cssClass={'competence__list--alternative'}
                            cssSpan={'competence__list__text__decoration'}
                            cssSvg ={'direction__list__svg'}
                            cssColor={'#2B2B2B'}
                    />
                    <UlList text={'Інтегровані комплекси безпеки'}
                            cssClass={'competence__list--alternative'}
                            cssSpan={'competence__list__text__decoration'}
                            cssSvg ={'direction__list__svg'}
                            cssColor={'#2B2B2B'}
                    />
                </ul>
            </article>
            </div>
        </section>
    );
};

export default Direction;