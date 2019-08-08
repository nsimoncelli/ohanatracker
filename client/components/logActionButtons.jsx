import React from 'react';
import SubmitModal from './submitModal';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default class LogActionButtons extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            view: 'main',
            show: false,
            startedAt: null
        };
        this.showNotification = this.showNotification.bind(this);
        this.diaperClickHandler = this.diaperClickHandler.bind(this);
        this.nappingClickHandler = this.nappingClickHandler.bind(this);
        this.handlePostNap = this.handlePostNap.bind(this);
        this.cancelDiapering = this.cancelDiapering.bind(this);
        this.sendAwakeState = this.sendAwakeState.bind(this);
        this.handlePostFeedings = this.handlePostFeedings.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.setView = this.setView.bind(this);
    }

    showNotification() {
        this.setState({ show: true });
    }

    setView(){
        this.setState({
            show: false,
            view: 'main'
        });
    }

    diaperClickHandler(e) {
        e.preventDefault();
        this.setState({view : "diapering"})
    }

    nappingClickHandler(e) {
        e.preventDefault();
        if(this.props.awakeState === true){
            this.sendAwakeState();
            this.getCurrentTime(e);
        } else if(this.props.awakeState === false) {
            this.handlePostNap();
            this.sendAwakeState();
            this.showNotification();
        } 
    }

    cancelDiapering(e) {
        e.preventDefault();
        this.setState({view : 'main'})
    }

    getCurrentTime(e) {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = `${date}+${time}`;
        if (e.currentTarget.id==="napButton") {
            this.props.getCurrentTime(dateTime)
        }
    }

    sendAwakeState() {
        let newAwakeState = !this.props.awakeState;
        this.props.sendNapState(newAwakeState);
    }
    
    handleCurrentUser() {
        if(this.props.currentUser === "Mom") {
            return 1;
        } else if(this.props.currentUser === "Dad") {
            return 2;
        } else {
            return 3;
        }
    }

    handlePostNap() {
        //let startedAt = this.state.startedAt;
        this.props.postNap(this.handleCurrentUser(), 1, this.props.startedTime);
    }

    handlePostFeedings(e) {
        e.preventDefault();
        this.props.postFeedings(this.handleCurrentUser(), 1);
        this.showNotification();
    }

    handlePostChange(event) {
        if(event.target.id==="pee") {
            this.props.postChanges(this.handleCurrentUser(), 1, 1); 
        } else {
            this.props.postChanges(this.handleCurrentUser(), 1, 2); 
        }
        this.showNotification();
    }

    render() {
        if(this.state.view === 'main'){
            return(
                <TransitionGroup>
                <CSSTransition
                appear={true}
                timeout={500}
                classNames="fade"> 
                <div className="container background1 mt-5">
                    <div className="diapering row">
                        <div className="diaperingButtonContainer col-12 text-center">
                            <img src="/images/diaper.png" height="142px" width="auto" onClick={this.diaperClickHandler} />
                        </div>
                    </div>
                    <div className="feedingNapping row text-center">
                        <div className="feedingButtonContainer col-6">
                            <img src="/images/bottle2.png" height="142px" width="auto" onClick={this.handlePostFeedings} />
                        </div>
                        <div className="nappingButtonContainer col-6">{this.props.awakeState ? 
                            <img src="/images/napButtonIcon.png" id="napButton" height="142px" width="auto" onClick={this.nappingClickHandler} /> :
                            <img src="/images/sleeping-baby2.png" id="babyButton" height="142px" width="auto" onClick={this.nappingClickHandler} />}        
                        </div>
                    </div>
                    {this.state.show && <SubmitModal setView={this.setView} mainActionConfirm={true} />}                  
                </div>
                </CSSTransition>
                </TransitionGroup>
            )            
        } else if (this.state.view === 'diapering') {
            return (
                <TransitionGroup>
                    <CSSTransition
                        appear={true}
                        timeout={300}
                        classNames="fade mt-5"> 
                        <div className="container background1 mt-5">
                            <div className="diaperingButtonContainer row text-center pt-5">
                                <div className="diapering1 col-6">
                                    <img src="/images/pee3.png" id="pee" height="142px" width="auto" onClick={this.handlePostChange} />
                                </div>
                                <div className="diapering2 col-6">
                                    <img src="/images/poop4.png" id="poop" height="142px" width="auto" onClick={this.handlePostChange} />    
                                </div>
                            </div>
                            <div className="cancelButton row my-3">
                                <div className="cancelButtonContainer col-12 text-center">
                                    <img className={this.state.show ? 'hide' : ''} src="/images/x-button.png" height="60px" width="auto" onClick={this.cancelDiapering} />
                                </div>
                            </div>
                            {this.state.show && <SubmitModal setView={this.setView} mainActionConfirm={true} />}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )
        }
    }
}



