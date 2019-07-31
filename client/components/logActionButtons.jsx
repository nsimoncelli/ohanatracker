import React from 'react';

class LogActionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'main',
            show: false
        };
        this.showNotification = this.showNotification.bind(this);
        this.diaperClickHandler = this.diaperClickHandler.bind(this);
        this.feedingClickHandler = this.feedingClickHandler.bind(this);
        this.nappingClickHandler = this.nappingClickHandler.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
        this.cancelDiapering = this.cancelDiapering.bind(this);
    }

    showNotification() {
        this.setState({ show: true,
        });
        setTimeout(() => {
             this.setState({
                asleep: null,
                show: false,
                view: 'main'
            });
        }, 1500);
    }

    diaperClickHandler() {
        let diaperingView = "diapering";
        this.setState({view : diaperingView})
    }

    feedingClickHandler() {
        this.showNotification();
        console.log(this.getCurrentTime());
    }

    nappingClickHandler() {
        this.showNotification();
        console.log(this.getCurrentTime());
    }

    cancelDiapering() {
        let mainView = 'main';
        this.setState({view : mainView})
    }

    getCurrentTime() {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = `date: ${date} ${time}`;
        return dateTime;
    }

    render() {
        if(this.state.view === 'main'){
            return(
                <div className="inputContainer row py-5 mt-4">
                    <div className="container">
                        <div className="diapering row">
                            <div className="diaperingButtonContainer col-12 text-center">
                                <img src="/images/diaper.png" height="150px" width="auto" onClick={this.diaperClickHandler} />
                            </div>
                        </div>
                        <div className="feedingNapping row text-center">
                            <div className="feedingButtonContainer col-6">
                                <img src="/images/bottle2.png" height="150px" width="auto" onClick={this.feedingClickHandler} />
                            </div>
                            <div className="nappingButtonContainer col-6">
                                <img src="/images/sleepingbaby3-b.png" height="150px" width="auto" onClick={this.nappingClickHandler} />    
                            </div>
                        </div>
                    </div>
                    <div className="row text-center my-5">
                        <span className={this.state.show ? 'col-12' : 'hide'}>New baby entry has been made!</span>
                    </div>
                </div>
            )            
        } else if (this.state.view === 'diapering') {
            return (
                <div className="inputContainer row py-5 mt-4">
                    <div className="container">
                        <div className="diapering row">
                            <div className="diaperingButtonContainer col-12 text-center">
                                <img src="/images/diaper.png" height="150px" width="auto" onClick={this.diaperClickHandler} />
                            </div>
                        </div>
                        <div className="feedingNapping row text-center">
                            <div className="feedingButtonContainer col-6">
                                <img src="/images/pee3.png" height="150px" width="auto" onClick={this.feedingClickHandler} />
                            </div>
                            <div className="nappingButtonContainer col-6">
                                <img src="/images/poop4.png" height="150px" width="auto" onClick={this.nappingClickHandler} />    
                            </div>
                        </div>
                        <div className="cancelButton row my-3">
                            <div className="cancelButtonContainer col-12 text-center">
                                <img className={this.state.show ? 'hide' : ''} src="/images/x-button.png" height="60px" width="auto" onClick={this.cancelDiapering} />
                                <img className={this.state.show ? '' : 'hide'} src="/images/check2.png" height="60px" width="auto" />
                            </div>
                        </div>
                    </div>
                    <div className="row text-center my-5">
                        <span className={this.state.show ? 'col-12' : 'hide'}>New baby entry has been made!</span>
                    </div>
                </div>
            )
        }
    
        
    }
}


export default LogActionButtons;

