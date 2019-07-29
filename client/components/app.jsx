import React from 'react';
import Header from './header';

export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            view: "homepage", 
            currentUser: "Mom",
            data: []
        }
    }

    setView(changedView){
        this.setState({
            view: changedView
        })
    }
    render () {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
            
        )
    }
}
