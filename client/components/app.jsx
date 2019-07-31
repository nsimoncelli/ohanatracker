import React from 'react';
import UserSelect from './userselect';
import Header from './header';
import Footer from './footer';
import NavBar from './navbar';
import LogActionButtons from './logActionButtons';
import Calendar from './calendar';
import Graph from './graph';
import InfoPage from './infopage';
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view: "homepage",
            currentUser: "Mom",
            data: []
        }
        this.setView = this.setView.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.getEntries = this.getEntries.bind(this);
        this.getGraphData = this.getGraphData.bind(this);
    }

    componentDidMount() {
        this.getEntries();
        this.getGraphData();
    }

    getGraphData() {
    fetch('http://localhost:3001/graph', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({ data:res})
        })
        .catch(error => console.error('error: ', error))
    }

    getEntries(targetDate) {
        fetch('http://localhost:3001/entries?date=' + targetDate)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            this.setState({data: myJson});
            return(myJson)
        })
        .catch(error => {
            console.error('error: ', error);
        })
    }
    setView(changedView){
        this.setState({
            view: changedView
        })
    }
    changeUser(newUser){
        this.setState({
            currentUser: newUser
        })
    }
    render () {
        if(this.state.view ==="userSelect"){
            return(
                <React.Fragment>
                    <Header changeView={this.setView} currentUser={this.state.currentUser}/>
                    <UserSelect setUser={this.changeUser} changeView={this.setView}/>
                    <Footer/>
                </React.Fragment>
            )

        }else if(this.state.view==="calendar"){
            return (
                <React.Fragment>
                      <Header currentView={this.state.view} changeView={this.setView} currentUser={this.state.currentUser}/>
                      <NavBar changeView={this.setView} />
                      <Calendar getDateDataFromDatabase={this.getEntries}></Calendar>
                      <Footer/>
                   </React.Fragment>
            )
        } else if (this.state.view === "homepage") {
           return( <React.Fragment>
                    <Header currentView={this.state.view} changeView={this.setView} currentUser={this.state.currentUser}/>
                    <NavBar changeView={this.setView} />
                    <LogActionButtons changeView={this.setView} />
                    <Footer/>
                </React.Fragment>
           )
        }else if(this.state.view === "graph") {
            return (
                <React.Fragment>
                    <Header currentView={this.state.view} changeView={this.setView} currentUser={this.state.currentUser}/>
                    <NavBar changeView={this.setView} />
                    <Graph feedings={this.state.data.feedings} changes={this.state.data.changes} naps={this.state.data.naps}/>
                    <Footer/>
                </React.Fragment>
            )
        } else if (this.state.view === "infoPage") {
            return (
                <React.Fragment>
                    <Header currentView={this.state.view} changeView={this.setView} currentUser={this.state.currentUser}/>
                    <InfoPage />
                    <Footer />
                </React.Fragment>
            )
        }
    }
}
