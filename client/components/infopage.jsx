import React from 'react';

export default class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.missionButtonHandler = this.missionButtonHandler.bind(this);
        this.teamButtonHandler = this.teamButtonHandler.bind(this);
        this.howToButtonHandler = this.howToButtonHandler.bind(this);
        this.mainPageButtonHandler = this.mainPageButtonHandler.bind(this);
        this.homePageButtonHandler = this.homePageButtonHandler.bind(this);
        this.userSelectHandler = this.userSelectHandler.bind(this);
    }

    missionButtonHandler(e) {
        e.preventDefault();
        this.props.sendInfoPageView('mission');
        this.mainPageButtonHandler();
    }

    teamButtonHandler(e) {
        e.preventDefault();
        this.props.sendInfoPageView('teamMembers');
        this.mainPageButtonHandler();
    }

    userSelectHandler(e) {
        e.preventDefault();
        this.props.setView('userSelect')
    }

    howToButtonHandler(e) {
        e.preventDefault();
        this.props.sendInfoPageView('howTo');
        this.mainPageButtonHandler();
    }

    mainPageButtonHandler() {
        this.props.setView('infoPage');
    }

    homePageButtonHandler() {
        this.props.setView('homepage');
    }

    render() {
        if (this.props.infoPageView === 'landingPage') {
            return(
                <div>
                    <div className="container py-3">
                        <br/><br/>
                        <div className="row">
                            <div className="col-5 text-right p-0">
                                <img className="ducky" src="images/logo.png"/>
                            </div>
                            <div className="col-7 title poiret pl-0">hana</div>
                        </div>    
                        <br/><br/><br/><br/>
                        <div className='row'>
                            <div className="missionButtonContainer col-12">
                                <button type="button" className="btn" onClick={this.missionButtonHandler}>
                                    <div className="poiretBody">Our Mission</div>
                                </button>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="teamButtonContainer col-12 ">
                                <button type="button" className="btn" onClick={this.teamButtonHandler}>
                                    <div className="poiretBody">Our Team</div>
                                </button>
                            </div>
                        </div>    
                        <div className="row mt-2">
                            <div className="howToButtonContainer col-12 ">
                                <button type="button" className="btn" onClick={this.howToButtonHandler}>
                                    <div className="poiretBody">How To</div>
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div className="row mt-2">
                            <div className="col ml-2">
                                <div onClick={this.userSelectHandler} className="pinkButton">
                                    Explore
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frontFlower"></div>
                </div>
            )
        } else if (this.props.infoPageView === 'teamMembers') {
            return(
                <div className="container membersContainer text-center py-3">
                    <div className="row my-3">
                        <div className="col-12">
                            <div className="poiretTitle">Our Team</div>
                        </div>
                    </div>
                    <div className="row pt-3 align-items-center">
                        <img src="images/Steve.png" alt="" className="col-4"/>
                        <div className="col-8">
                            <p style={{"fontSize":"1.65rem"}}>Steve Min</p>
                        </div>
                    </div>
                    <div className="row pt-3 align-items-center">
                        <img src="images/Nick.png" alt="" className="col-4"/>
                        <div className="col-8">
                            <p style={{"fontSize":"1.65rem"}}>Nick Simoncelli</p>
                        </div>
                    </div>
                    <div className="row pt-3 align-items-center">
                        <img src="images/Tony.jpeg" alt="" className="col-4"/>
                        <div className="col-8">
                            <p style={{"fontSize":"1.65rem"}}>Tony Jin</p>
                        </div>
                    </div>
                    <div className="row pt-3 align-items-center">
                        <img src="images/Elliot.jpeg" alt="" className="col-4"/>
                        <div className="col-8">
                            <p style={{"fontSize":"1.65rem"}}>Elliot Han</p>
                        </div>
                    </div>
                    <div className="row pt-3 align-items-center">
                        <img src="images/Bisham.JPG" alt="" className="col-4"/>
                        <div className="col-8">
                            <p style={{"fontSize":"1.65rem"}}>Bisham Mohabir</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.infoPageView === "mission") {
            return(
                <div className="container missionContainer py-2">
                    <div className="row my-3">
                        <div className="col-12 text-left">
                            <div className="poiretTitle">Our Mission</div>
                        </div>
                    </div>
                    <div className="row missionStatement">
                        <div className="col-lg-6">
                            <p>Ohana helps new parents track information about their child.
                                With a simple click of a button: feeding times, naps, and diaper changes are recorded.
                            </p>
                            <p>
                                Ohana's graphical reports and detailed calendar allow parents and caretakers
                                to stay organized.
                            </p>
                            <p>
                                It takes a village to raise a child.
                            </p>
                            <p>Welcome to Ohana</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.infoPageView === 'howTo') {
            return(
                <div className="container missionContainer py-2">
                    <div className="row my-3">
                        <div className="col-12 text-left">
                            <div className="poiretTitle">How To</div>
                        </div>
                    </div>
                    <div className="row missionStatement">
                        <div className="col-lg-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla, 
                                fugiat pariatur laudantium cumque ullam nostrum. Animi ullam error tempora 
                                excepturi voluptatum magni voluptas facere incidunt, fugit repellat. Beatae, 
                                praesentium mollitia labore ullam nobis velit soluta nihil, minima libero 
                                est debitis laborum voluptatum? Placeat blanditiis laboriosam quas inventore 
                                nihil dicta?
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
