import React from 'react';
import "./education.scss"
import Arrow from "../../svg/arrow/Arrow";
const Education = () => {
    return (
        <section className="standard-description " data-scroll-section>
            <div className="wrapper">
            <h5 className="title">Освітня діяльніcть</h5>
            <p className="category-sub-title">Завдання наших семінарів - систематизувати і доповнити ваш <span
                className="category-sub-title__decoration">досвід роботи з системами безпеки!</span></p>
            <article className="standard-description__container">
                <p className="standard-description__container__text">Fortisec – це команда однодумців та професіоналів ринку охоронних
                    систем з
                    індивідуальною практикою не менше 20 років. Перш за все, це люди, що успішно
                    творюють та впроваджують одні з наймасштабніших та найбільш складних інтегрованих
                    комплексів безпеки в Україні. Це ідеї, знання та експертиза, що дозволяють убезпечувати
                    дійсно складні, критично важливі</p>
                <p className="standard-description__container__text">Fortisec – це компанія-консультант та проектний дистриб’ютор, що
                    надає
                    кваліфіковані послуги з попереднього вивчення об’єктів, моделювання загроз,
                    створення концепцій охорони за допомогою найсучасніших апаратно-програмних
                    засобів, постачання відповідного обладнання, повного спектру комерційної та
                    технічної підтримки партнерів на всіх етапах життєвого циклу проектів.</p>
            </article>
            <a href="" className="category-link"><span className="category-link__text">Напрямки навчання</span> <span
                className="list-items__href__decoration"><Arrow color ="#373737" cssClass ={"category-link__svg"}/> </span></a>
            </div>
        </section>
    );
};

export default Education;