import React from 'react';

class LogActionButtons extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
   
        return(
            <div className="inputContainer row py-5 mt-4">
                <div className="container">
                    <div className="diapering row">
                        <div className="diaperingButtonContainer col-12 text-center">
                            <img src="/images/diaper.png" height="150px" width="auto" />
                        </div>
                    </div>
                    <div className="feedingNapping row text-center">
                        <div className="feedingButtonContainer col-6">
                            <img src="/images/bottle2.png" height="150px" width="auto" />
                        </div>
                        <div className="nappingButtonContainer col-6">
                            <img src="/images/sleepingbaby3-b.png" height="150px" width="auto" />    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogActionButtons;