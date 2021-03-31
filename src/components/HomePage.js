import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import ElementSVGOne from './imagesSvg/ElementSVGOne'
// import ElementSVGOTwo from './imagesSvg/ElementSVGTwo'
// import ElementSVGThree from './imagesSvg/ElementSVGThree'
import TaskCard from './TaskCard'
import { BiKey, BiSearchAlt2, BiTask } from "react-icons/bi";
import * as actionCreator from '../store/actions/globalActions'
import { TweenMax, Power3 } from 'gsap'


function HomePage(props) {
    let element1 = useRef(null)
    let element2 = useRef(null)
    let element3 = useRef(null)
    let title = useRef(null)


    let initTasks = props.getLatestTasks;
    useEffect(() => {
        return initTasks()
    }, [initTasks]);

    useEffect(() => {
        TweenMax.from(
            element1,
            .8,
            {
                opacity: 0,
                z: 100
            }
        )
        TweenMax.from(
            element2,
            .6,
            {
                opacity: 0,
                y: 100
            }
        )
        TweenMax.from(
            element3,
            .3,
            {
                opacity: 0,
                y: 100
            }
        )
        TweenMax.from(
            title,
            1,
            {
                opacity: 0
            }
        )
    }, []);
    return (
        <div className="homePage__wrapper">
            <div className="homePage__content">

                <div className="homePage__content--hero">
                    <div className="hero__greetings__wrapper" ref={(elTitle) => { title = elTitle }}>
                        <h1>Hej!</h1>
                        <h1>Da li poznaješ nekog?</h1>
                        <p>...Majstora? Frizera? Mi ih znamo sve! Istraži bazu podataka ili oglasi novi projekat za koji ti je potreban zanatlija.</p>
                        <Link to='/zanatlije'><button className="button homePageBtn">Pretraga</button></Link>
                    </div>
                    <div className="hero__animation__wrapper">
                        <div className="hero__animation--images">
                            <img ref={(el1) => { element1 = el1 }} className="image__element image__element--1" src="images/el1.png" alt="" />
                            <img ref={(el2) => { element2 = el2 }} className="image__element image__element--2" src="images/el2.png" alt="" />
                            <img ref={(el3) => { element3 = el3 }} className="image__element image__element--3" src="images/el3.png" alt="" />
                        </div>
                    </div>
                </div>
                <img ref={(el2) => { element3 = el2 }} className="element float3" src="images/el2.png" alt="" />
                <div className="homePage__introStory__wrapper">
                    <div className="homePage__introStory__content">
                        <h2>Zanatlije</h2>
                        <p>Dobro došli na sajt Zanatlije uz čiju pomoć možete
                        lako da pronađete ili oglasite projekat za čiju
                        realizaciju su potrebne vredne ruke. Dovoljno je
samo da pratite uputstva.</p>
                    </div>
                </div>
                <img ref={(el3) => { element3 = el3 }} className="element float1" src="images/el3.png" alt="" />

                <div className="homePage__newProposals__wrapper">
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

                <img ref={(el1) => { element3 = el1 }} className="element float2" src="images/el1.png" alt="" />

                <div className="homePage__instructions__wrapper">
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
