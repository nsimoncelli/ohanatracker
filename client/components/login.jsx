import React from 'react';

export default class Login extends React.Component {
    
    handleSetView() {
        this.props.changeView("userSelect");
    }

    render() {
        return (
            <React.Fragment>
            <div className="container text-center front-page">
                <br/><br/><br/><br/>
                <div className="row">
                    <div className="col-4 text-right">
                        <img className="ducky" src="images/logo.png"/>
                    </div>
                    <div className="col-8 title text-left">Ohana</div>
                </div>    
                <br/><br/><br/><br/><br/>    
                <div className="row">
                    <div className="col-lg-4 ml-1">
                        <form>
                            <input type="text" name="name" className="question" id="username" required autoComplete="off" />
                            <label htmlFor="username"><span>Username</span></label>
                            <br/>
                            <input type="password" name="name" className="question" id="password" required autoComplete="off" />
                            <label htmlFor="password"><span>Password</span></label>
                        </form>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col text-left">
                        <div onClick={this.handleSetView.bind(this)} className="pinkButton">
                            Log In
                        </div>
                    </div>
                    <div className="col-lg-6 frontFlower"></div>
                </div>
            </div>
            </React.Fragment>
        )
    }

}