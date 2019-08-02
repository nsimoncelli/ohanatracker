import React from 'react';

export default class UserSelect extends React.Component{
    constructor(props){
        super(props);
        this.setUserToMom = this.setUserToMom.bind(this);
        this.setUserToDad = this.setUserToDad.bind(this);
        this.setUserToCaregiver = this.setUserToCaregiver.bind(this);
    }
    setUserToMom(){
        this.props.setUser("Mom");
        this.props.changeView("homepage");
    }
    setUserToDad(){
        this.props.setUser("Dad");
        this.props.changeView("homepage");
    }
    setUserToCaregiver(){
        this.props.setUser("Caregiver");
        this.props.changeView("homepage");
    }
    render(){
        return(
            <div className="container userSelectContainer text-center">
                <div className="row">
                    <h1 className="col-12 my-5">Select User</h1>
                    <div className="col-12 momButtonContainer">
                        <button onClick={this.setUserToMom} className="btn col-12 btn py-3" type="button">Mom</button>
                    </div>
                    <div className="col-12 dadButtonContainer">
                        <button onClick={this.setUserToDad} className="btn col-12 btn py-3" type="button">Dad</button>
                    </div>
                    <div className="col-12 caretakerButtonContainer">
                        <button onClick={this.setUserToCaregiver} className="btn col-12 btn py-3" type="button">Caregiver</button>
                    </div>
                </div>
            </div>
        )
    }
}