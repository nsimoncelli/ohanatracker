import React from 'react';
import Header from './header';
import Footer from './footer';
import NavBar from './navbar';
import LogActionButtons from './logActionButtons';


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

            <React.Fragment>
                <Header currentUser={this.state.currentUser}/>
                <NavBar currentView={this.state.view} changeView={this.setView} />
                <LogActionButtons changeView={this.setView}/>
                <Footer />
            </React.Fragment>
        )
    }
}
