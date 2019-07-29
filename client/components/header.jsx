import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: "#B9CEF3", color:"white"}} className='banner row py-2'>
                <div className='col-6'>
                    <img style={{ width: 45 }} src='images/logo.png' className='img-fluid' alt="Ohana Logo"/>
                </div>
                <div style={{fontSize: "1.5rem"}} className="col-5 text-right">{this.props.currentUser}</div>
            </div>
            
        )
    }
}