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
            <div className="container userSelectContainer text-center py-3">
                <div className="row my-3 justify-content-center">
                    <div className="col-12 p-2 col-lg-6">
                        <div className="poiretTitle selectUser">Select User</div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 momButtonContainer">
                        <button onClick={this.setUserToMom} className="btn py-3" type="button">
                            <div className="poiretBody">Mom</div>
                        </button>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-12 dadButtonContainer">
                        <button onClick={this.setUserToDad} className="btn py-3" type="button">
                            <div className="poiretBody">Dad</div>
                        </button>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 caretakerButtonContainer">
                        <button onClick={this.setUserToCaregiver} className="btn py-3" type="button">
                            <div className="poiretBody">Caregiver</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}