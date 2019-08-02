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
                <div className="container p-4">
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
                <div className="container membersContainer text-center my-3">
                    <div className="row">
                        <div className="col-12">
                            <h1>Our Team</h1>
                        </div>
                    </div>
                    <div className="row teamLead my-3">
                        <img src="images/Steve.png" alt="" className="col-4"/>
                        <div className="col-8">
                            <p style={{"fontSize":"1.25rem"}}>Steve Min</p>
                            <p>Team Lead</p>
                        </div>
                    </div>
                    <div className="row frontEndLead my-3">
                        <img src="images/Nick.png" alt="" className="col-4"/>
                        <div className="col-8">
                            <p className="m-1 p-2" style={{"fontSize":"1.25rem"}}>Nick Simoncelli</p>
                            <p>Front-End Lead</p>
                        </div>
                    </div>
                    <div className="row backEndLead my-3">
                        <img src="images/Tony.jpeg" alt="" className="col-4"/>
                        <div className="col-8">
                            <p className="m-1 p-2" style={{"fontSize":"1.25rem"}}>Tony Jin</p>
                            <p>Back End-Lead</p>
                        </div>
                    </div>
                    <div className="row support1 my-3">
                        <img src="images/Elliot.jpeg" alt="" className="col-4"/>
                        <div className="col-8">
                            <p className="m-1 p-2" style={{"fontSize":"1.25rem"}}>Elliot Han</p>
                            <p>Support</p>
                        </div>
                    </div>
                    <div className="row support2 my-3">
                        <img src="images/Bisham.JPG" alt="" className="col-4"/>
                        <div className="col-8">
                            <p className="m-1 p-2" style={{"fontSize":"1.25rem"}}>Bisham Mohabir</p>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.infoPageView === "mission") {
            return(
                <div className="container missionContainer text-center my-3">
                    <div className="row">
                        <div className="col-12">
                            <h1>Our Mission</h1>
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
