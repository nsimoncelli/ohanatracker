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
            console.log("user slect props", this.props);
                return(
                   <div className="container d-flex justify-content-center">
                    <div className="row">

                        <div className="list-group">
                        <h1 className="col align-self-center p-3 m-3">Select User</h1>
                        <button onClick={this.setUserToMom} className="col align-self-center p-3 m-3">Mom</button>
                        <button onClick={this.setUserToDad} className="col align-self-center p-3 m-3">Dad</button>
                        <button onClick={this.setUserToCaregiver} className="col align-self-center p-3 m-3">Caregiver</button>
                        </div>
                    </div>
                   </div>
                )




        }



}