import React from 'react';

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
            <h1>Hello</h1>
        )
    }
}
