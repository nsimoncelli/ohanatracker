import React from 'react';

export default class Login extends React.Component {
    
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <h1 className="col-12 my-5">
                        <img src="images/logo.png"/>
                        Ohana
                    </h1>
                    <div className="col-12">
                        <input type="text"/>
                    </div>
                    <div className="col-12">
                        <input type="password"/>
                    </div>
                    <div className="col-12">
                        <button>Log In</button>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        )
    }

}