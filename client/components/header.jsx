import React from 'react';
import {CSSTransition} from 'react-transition-group';

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
        this.props.sendInfoPageView('landingPage');
        this.props.changeView('landingPage');
    }
    render() {
        return(
            <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="fade"
            >
                <div className="headerTop banner row py-3">
                <div className='col-6'>
                    <button type="button" className="logoButton" onClick={this.handleInfoPageViewChange}>
                        <img src='images/logo4.png' className='img-fluid ohanaLogo' alt="Ohana Logo"/>
                    </button>
                </div>
                <div className="col-6 text-right">
                    <div 
                        className="headerButton"
                        onClick={this.handleUserChange}>
                            {this.props.currentUser}
                    </div>
                </div>
                </div>
            </CSSTransition>
            
        )
    }
}
