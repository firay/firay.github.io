
import React from 'react';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Competence from "../Competence/Competence";
import Education from "../Education/Education";
import Direction from "../Direction/Direction";
import News from "../News/News";
import Contact from "../Contact/Contact";
import { script } from './../utils/script'

class MainPage extends React.Component {
    componentDidMount() {
        console.log('hello')
        setTimeout(() => {
            script()
        }, 0)
    }
    render() {
        return (
            <div>
                <main className={"main"} id={'main'} data-scroll-container>
                    <Hero/>
                    <About/>
                    {/*<Brands/>*/}
                    <Competence/>
                    <Education/>
                    <Direction/>
                    <News/>
                    <Contact/>
                </main>
            </div>
        );
    }
};

export default MainPage;