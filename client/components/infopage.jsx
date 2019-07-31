import React from 'react';

export default class InfoPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="container d-flex justify-content-center">
                <div className='row'>
                    <div className='list-group'>
                        <h1 className="col align-self-center p-3 m-3">Our Mission</h1>
                        <h1 className="col align-self-center p-3 m-3">Our Team</h1>
                    </div>
                </div>
            </div>
        )
    }
}
