import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ElementSVGOne from './imagesSvg/ElementSVGOne'
import ElementSVGOTwo from './imagesSvg/ElementSVGTwo'
import ElementSVGThree from './imagesSvg/ElementSVGThree'
import TaskCard from './TaskCard'
import { BiKey, BiSearchAlt2, BiTask } from "react-icons/bi";
import * as actionCreator from '../store/actions/globalActions'


function HomePage(props) {
    let initTasks = props.getLatestTasks;
    useEffect(() => {
        return initTasks()
    }, [initTasks]);


    return (
        <div className="homePage__wrapper">
            <div className="homePage__content">

                <div className="homePage__content--hero">
                    <div className="hero__greetings__wrapper">
                        <h1>Hej!</h1>
                        <h1>Da li poznaješ nekoga?</h1>
                        <p>Majstora? Frizera? Mi ih znamo sve! Istraži bazu podataka ili oglasi novi posao za koji ti je potreban zanatlija.</p>
                        <Link to='/zanatlije'><button className="button">Pretraga</button></Link>

                    </div>
                    <div className="hero__animation__wrapper">
                        <div className="hero__animation--images">
                            <ElementSVGOne className="image__element image__element--1" />
                            <ElementSVGOTwo className="image__element image__element--2" />
                            <ElementSVGThree className="image__element image__element--3" />

                        </div>
                    </div>
                </div>
                <div className="homePage__introStory__wrapper">
                    <div className="homePage__introStory__content">
                        <h2>Zanatlije</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa urna id nunc. Molestie elit cras lacus, mauris. Congue sit vel eget tempus cras quam nisi, nunc. At porttitor augue malesuada hac enim ac enim.</p>
                    </div>
                </div>
                <ElementSVGOne className="images__floating__element float--1" />
                <div className="homePage__newProposals__wrapper">
                    <div className="homePage__newProposals__content">
                        <h2 className='homePage__sectionTitle'>Novi poslovi</h2>

                        <div className="homePage__slider__wrapper">
                            <div className="homePage__slider__content">
                                <div className="homePage__slider--item">
                                    {/* Return only 3 */}
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

                <ElementSVGOTwo className="images__floating__element float--2" />

                <div className="homePage__instructions__wrapper">
                    <div className="homePage__instructions__content">
                        <h2 className="homePage__instructions__title">
                            Kako do posla
                        </h2>
                        <div className="homepage__instructions__cards">

                            <div className="homePage__instructions__card">
                                <BiKey className="homePage__instructions__card--icon" />
                                <div className="homePage__instructions__card--title">
                                    <h3>Napravi nalog</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa urna id nunc. Molestie elit cras lacus, mauris. Congue sit vel eget tempus cras quam nisi, nunc. At porttitor augue malesuada hac enim ac enim.</p>
                                </div>
                            </div>
                            <div className="homePage__instructions__card">
                                <BiSearchAlt2 className="homePage__instructions__card--icon" />
                                <div className="homePage__instructions__card--title">
                                    <h3>Pronadji projekat</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa urna id nunc. Molestie elit cras lacus, mauris. Congue sit vel eget tempus cras quam nisi, nunc. At porttitor augue malesuada hac enim ac enim.</p>
                                </div>
                            </div>
                            <div className="homePage__instructions__card">
                                <BiTask className="homePage__instructions__card--icon" />
                                <div className="homePage__instructions__card--title">
                                    <h3>Apliciraj za projekat</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa urna id nunc. Molestie elit cras lacus, mauris. Congue sit vel eget tempus cras quam nisi, nunc. At porttitor augue malesuada hac enim ac enim.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ElementSVGThree className="images__floating__element float--3" />

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