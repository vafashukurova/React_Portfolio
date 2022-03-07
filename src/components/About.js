import react, { Component } from "react";

class About extends Component {
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-7 border-bottom border-secondary-50 bg-white mr-5">

                            <h2 className="py-4 border-bottom border-bottom-5">About Me</h2>
                            <img src={require("./images/person.jpg")} alt="" className="d-inline float-left w-25 mr-3 pt-4" />
                            <p className="pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos asperiores fugiat dolorum. Quam
                                ipsa quidem, quasi provident recusandae architecto iure, pariatur voluptas, exercitationem nulla
                                omnis minima id?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit soluta, veniam inventore
                                harum quas maiores voluptatum aliquid amet sit rerum? Aperiam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt ratione recusandae? Unde totam asperiores veniam quaerat aperiam at amet cumque dolores. Sunt pariatur alias omnis iure delectus, reprehenderit nostrum aut possimus incidunt cumque dolorum, voluptatem doloremque ipsa officia, iusto nemo iste inventore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

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

export default About;
