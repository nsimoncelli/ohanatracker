import React from 'react';

export default class Login extends React.Component {
    
    handleSetView() {
        this.props.changeView("userSelect");
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img className="ducky" src="images/logo.png"/>
                    </div>
                    <div className="col">Ohana</div>
                    <div className="row">
                        <div className="col">
                            <form>
                                <input type="text" name="name" className="question" id="username" required autoComplete="off" />
                                <label htmlFor="username"><span>Username</span></label>
                                <br/>
                                <input type="password" name="name" className="question" id="password" required autoComplete="off" />
                                <label htmlFor="password"><span>Password</span></label>
                            </form>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    
                        <div onClick={this.handleSetView.bind(this)} className="example_a">
                            Log In
                        </div>
                    
                </div>
            </div>
        )
    }

}