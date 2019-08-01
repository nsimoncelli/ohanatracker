import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleInfoPage = this.handleInfoPage.bind(this);
    }
    handleUserChange(e) {
        e.preventDefault();
        this.props.changeView('userSelect')
    }
    handleInfoPage(e) {
        e.preventDefault();

        if (this.props.infoPageView === 'teamMembers' || this.props.infoPageView === 'mission' || this.props.infoPageView === 'howTo') {          
            this.props.sendInfoPageView('mainInfo');
        } else if (this.props.infoPageView === 'mainInfo') {
            this.props.changeView('infoPage')
        }


        if (this.props.currentView === 'homepage' || this.props.currentView === 'graph' || this.props.currentView === 'calendar') {
            this.props.changeView('infoPage');
        } else if (this.props.currentView === 'infoPage' && this.props.infoPageView === 'mainInfo') {
            this.props.changeView('homepage');
        }

    }
    render() {
        return(
            <div style={{backgroundColor: "#B9CEF3", color:"white"}} className='banner row py-2'>
                <div className='col-6'>
                    <img onClick={this.handleInfoPage} style={{ width: 45 }} src='images/logo.png' className='img-fluid' alt="Ohana Logo"/>
                </div>
                <div onClick={this.handleUserChange} style={{fontSize: "1.5rem"}} className="col-5 text-right">{this.props.currentUser}</div>
            </div>

        )
    }
}
