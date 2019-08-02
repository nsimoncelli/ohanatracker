import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleInfoPageViewChange = this.handleInfoPageViewChange.bind(this);
    }
    handleUserChange(e) {
        e.preventDefault();
        this.props.changeView('userSelect');
    }
    handleInfoPageViewChange(e) {
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
            <div style={{backgroundColor: "#B9CEF3"}} className='banner row py-3'>
                <div className='col-6'>
                    <button type="button" style={{backgroundColor: 'transparent', border: 'none'}} onClick={this.handleInfoPageViewChange}>
                        <img  style={{ width: 45 }} src='images/logo.png' className='img-fluid' alt="Ohana Logo"/>
                    </button>
                </div>
                <div  style={{fontSize: "1.5rem"}} className="col-6 text-right">
                    <button type="button" style={{backgroundColor: 'transparent', border: 'none', color:"white"}} onClick={this.handleUserChange}>
                        {this.props.currentUser}
                    </button>
                </div>
            </div>
        )
    }
}
