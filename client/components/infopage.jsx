import React from 'react';

export default class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.missionButtonHandler = this.missionButtonHandler.bind(this);
        this.teamButtonHandler = this.teamButtonHandler.bind(this);
        this.howToButtonHandler = this.howToButtonHandler.bind(this);
    }

    missionButtonHandler(e) {
        e.preventDefault();
        this.props.sendInfoPageView('mission');
    }

    teamButtonHandler(e) {
        e.preventDefault();
        this.props.sendInfoPageView('teamMembers');
    }

    howToButtonHandler(e) {
        e.preventDefault();
        this.props.sendInfoPageView('howTo');
    }

    render() {
        if (this.props.infoPageView === 'mainInfo') {
            return(
                <div className="container py-3">
                    <div className='row text-center'>
                        <div className="missionButtonContainer col-12 my-3">
                            <button type="button" className="btn" onClick={this.missionButtonHandler}>
                                <h1>Our Mission</h1>
                            </button>
                        </div>
                        <div className="teamButtonContainer col-12 my-3">
                            <button type="button" className="btn" onClick={this.teamButtonHandler}>
                                <h1>Our Team</h1>
                            </button>
                        </div>
                        <div className="howToButtonContainer col-12 my-3">
                            <button type="button" className="btn" onClick={this.howToButtonHandler}>
                                <h1>How To</h1>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.infoPageView === 'teamMembers') {
            return(
                <div className="container membersContainer text-center py-3">
                    <div className="row my-3">
                        <div className="col-12">
                            <h1>Our Team</h1>
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
                <div className="container missionContainer text-center py-3">
                    <div className="row my-3">
                        <div className="col-12 p-1">
                            <h1>Our Mission</h1>
                        </div>
                    </div>
                    <div className="row text-center">
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
            )
        } else if (this.props.infoPageView === 'howTo') {
            return(
                <div className="container howToContainer text-center my-3">
                    <div className="row">
                        <div className="col-12">
                            <h1>How To</h1>
                        </div>
                    </div>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla,
                            fugiat pariatur laudantium cumque ullam nostrum. Animi ullam error tempora
                            excepturi voluptatum magni voluptas facere incidunt, fugit repellat. Beatae,
                            praesentium mollitia labore ullam nobis velit soluta nihil, minima libero
                            est debitis laborum voluptatum? Placeat blanditiis laboriosam quas inventore
                            nihil dicta?
                        </p>
                    </div>
                </div>
            )
        }

    }
}
