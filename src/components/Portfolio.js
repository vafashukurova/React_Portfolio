import react, { Component } from "react";
import style from "./Style.css"

class Portfolio extends Component {
    render() {
        return (
            <>
                <div className="container my-5" >
                    <div className="row justify-content-center">
                        <div className="col-7 border-bottom border-secondary-50 bg-white mr-5">
                            <h2 className="py-4 border-bottom border-bottom-5">Portfolio</h2>
                            <div className="row pt-4">

                                <div className="col-6 pb-5" id="project-container"><img src={require("./images/technics-q-c-640-480-1.jpg")} alt=""
                                    className="img-fluid" />
                                    <div className="project-name">Hangman</div>
                                </div>


                                <div className="col-6" id="project-container"><img src={require("./images/technics-q-c-640-480-2.jpg")} alt="" className="img-fluid" />
                                    <div className="project-name">RGP Game</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 pb-5" id="project-container"><img src={require("./images/technics-q-c-640-480-5.jpg")} alt=""
                                    className="img-fluid" /> <div className="project-name">Trivia Game</div>
                                </div>
                                <div className="col-6" id="project-container"><img src={require("./images/technics-q-c-640-480-7.jpg")} alt="" className="img-fluid" />
                                    <div className="project-name">Rutgers Info Widget</div>
                                </div>
                            </div>

                            <div className="row pb-5">
                                <div className="col-6 pb-5" id="project-container"><img src={require("./images/technics-q-c-640-480-9.jpg")} alt="" className="img-fluid" />
                                    <div className="project-name">Rock Paper Scissors</div>
                                </div>

                            </div>

                        </div>

                        <div className="col-4 bg-white p-4 h-50" id="sidebar">
                            <h3 className="py-2 border-bottom border-bottom-5">Connect with Me</h3>
                            <div className="row justify-content-center pt-3">

                                <div className="col-4 ">
                                    <img src={require("./images/github-128.png")} alt="" className="img-fluid" />
                                </div>
                                <div className="col-4">
                                    <img src={require("./images/linkedin-128.png")} alt="" className="img-fluid" />
                                </div>
                                <div className="col-4">
                                    <img src={require("./images/stackoverflow-128.png")} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Portfolio;