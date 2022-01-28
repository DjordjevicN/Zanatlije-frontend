import React, { useEffect, useRef, } from 'react';
import { connect } from 'react-redux'
import { Link, } from 'react-router-dom'
import TaskCard from './TaskCard'
import { BiKey, BiSearchAlt2, BiTask } from "react-icons/bi";
import * as actionCreator from '../store/actions/globalActions'
import Footer from './Footer'
import { heroAnimation } from '../globalConfigurations/AnimationsHome'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function HomePage(props) {
    let homeHeroText = useRef(null)
    let homeAboutUs = useRef(null)
    let homeHeroImage = useRef(null)
    let newJobs = useRef(null)
    let howToCards = useRef(null)
    let initTasks = props.getLatestTasks;
    useEffect(() => {
        return initTasks()
    }, [initTasks]);
    useEffect(() => {
        heroAnimation(homeHeroText, homeHeroImage, homeAboutUs, newJobs, howToCards)
    }, []);
    return (
        <div className="homePage__wrapper">
            <div className="homePage__content">
                <div className="homePage__content--hero__wrapper">
                    <div className="homePage__content--hero">
                        <div className="hero__greetings__wrapper" ref={homeHeroText}>
                            <h1>Hej!</h1>
                            <h1>Da li poznaješ nekog?</h1>
                            <p >...Majstora? Frizera? Mi ih znamo sve! Istraži bazu podataka ili oglasi novi projekat za koji ti je potreban zanatlija.</p>
                            <Link to='/zanatlije'><button className="button homePageBtn">Pretraga</button></Link>
                        </div>
                        <div className="hero__animation__wrapper" ref={homeHeroImage}>
                            <img className='heroImage' src="images/graf.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="homePage__introStory__wrapper">
                    <div className="homePage__introStory__content" ref={homeAboutUs}>
                        <h2>Zanatlije</h2>
                        <p>Dobro došli na sajt Zanatlije uz čiju pomoć možete
                        lako da pronađete ili oglasite projekat za čiju
                        realizaciju su potrebne vredne ruke. Dovoljno je samo da pratite uputstva.</p>
                    </div>
                </div>
                <div className="homePage__newProposals__wrapper" ref={newJobs}>
                    <div className="homePage__newProposals__content">
                        <h2 className='homePage__sectionTitle'>Novi poslovi</h2>
                        <div className="homePage__slider__wrapper">
                            <div className="homePage__slider__content">
                                <div className="homePage__slider--item">
                                    {props.tasks.map(task => {
                                        return (
                                            <Link
                                                key={task.taskId}
                                                to={`/task/${task.taskId}`}
                                                className="link"
                                            ><TaskCard task={task} /></Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage__instructions__wrapper" ref={howToCards}>
                    <div className="homePage__instructions__content">
                        <h2 className="homePage__instructions__title">
                            Kako do posla
                        </h2>
                        <div className="homepage__instructions__cards">
                            <div className="homePage__instructions__card">
                                <BiKey className="homePage__instructions__card--icon" />
                                <div className="homePage__instructions__card--title">
                                    <h3>Napravi Profil</h3>
                                    <p>Pokaži šta znaš</p>
                                </div>
                            </div>
                            <div className="homePage__instructions__card">
                                <BiSearchAlt2 className="homePage__instructions__card--icon" />
                                <div className="homePage__instructions__card--title">
                                    <h3>Pronadji projekat</h3>
                                    <p>Od šetnje ljubimca do renoviranja stana: sigurno ćeš naći nešto za sebe!</p>
                                </div>
                            </div>
                            <div className="homePage__instructions__card">
                                <BiTask className="homePage__instructions__card--icon" />
                                <div className="homePage__instructions__card--title">
                                    <h3>Apliciraj za projekat</h3>
                                    <p>Najbolji zanatlija po izboru korisnika dobija posao!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        tasks: state.globalReducer.homePageTasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLatestTasks: () => dispatch(actionCreator.getLatestTasks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
