import React from 'react';

class LogActionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showNotification = this.showNotification.bind(this);
        this.diaperClickHandler = this.diaperClickHandler.bind(this);
        this.feedingClickHandler = this.feedingClickHandler.bind(this);
        this.nappingClickHandler = this.nappingClickHandler.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
        this.handlePostNap = this.handlePostNap.bind(this);
    }

    showNotification() {
        this.setState({
            show: true,
        });
        setTimeout(() => {
             this.setState({
                show: false,
            });
        }, 1500);
    }

    diaperClickHandler() {
        this.showNotification();
        console.log(this.getCurrentTime())
    }

    feedingClickHandler() {
        this.showNotification();
        console.log('clicked1')
    }

    nappingClickHandler() {
        this.showNotification();
        console.log('clicked2')
    }

    getCurrentTime() {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = {
            "date" : date,
            "time" : time
        };
        return dateTime;
    }

    handlePostNap() {
        this.props.postNap(1, 2);
        console.log('hello');
    }

    render() {
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
                        <div onClick={this.handlePostNap} className="nappingButtonContainer col-6">
                            <img src="/images/sleepingbaby3-b.png" height="150px" width="auto" onClick={this.nappingClickHandler} />    
                        </div>
                    </div>
                </div>
                <div className="row text-center my-5">
                    <Notification show={this.state.show} />
                </div>
            </div>
        )
    }
}

class Notification extends React.Component {
    render() {
        return <span className={this.props.show ? 'show col-12' : 'col-12'}>New baby entry has been made!</span>
    }
}

export default LogActionButtons;