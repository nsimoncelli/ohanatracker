import React from 'react';
import NavBar from './navbar';

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            view: "homepage", 
            currentUser: "Mom",
            data: []
        }
        this.setView = this.setView.bind(this);
    }

    setView(changedView){
        this.setState({
            view: changedView
        })
    }
    render () {
        return (
            <div>
                <NavBar currentView={this.state.view} changeView={this.setView}></NavBar>

            </div>
        )
    }
}
