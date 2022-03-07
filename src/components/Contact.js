import react, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-7 border-bottom border-secondary-50 bg-white mr-5">

                            <h2 className="py-4 border-bottom border-bottom-5">Contact</h2>
                            <div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="John Smith" required />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" required />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
                                        <div id="message" className="form-text"></div>
                                    </div>


                                    <button type="submit" className="btn  mb-3">Submit</button>
                                </form>
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

export default Contact;