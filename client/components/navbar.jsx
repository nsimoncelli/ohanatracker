import React from 'react';

export default class NavBar extends React.Component {

        constructor(props){
            super(props)
            this.changeViewtoHome = this.changeViewtoHome.bind(this);
            this.changeViewtoGraph = this.changeViewtoGraph.bind(this);
            this.changeViewtoCalendar = this.changeViewtoCalendar.bind(this);
        }

        changeViewtoHome(){
            this.props.changeView("homepage");
        }
        changeViewtoGraph(){
            this.props.changeView("graph");
        }
        changeViewtoCalendar(){
            this.props.changeView("calendar");
        }
        

        render(){
            return(
                <div className="d-flex justify-content-center">
                    <nav className="navbar navbar-light justify-content-sm-start">
                        <form className="form-inline">
                        <button onClick={this.changeViewtoHome}  className="btn" type="button">
                            <img src="/images/home.png" width="80" />
                        </button>
                        <button onClick={this.changeViewtoGraph} className="btn" type="button">
                            <img src="/images/graph.png" width="80" />
                        </button>
                        <button onClick={this.changeViewtoCalendar} className="btn" type="button">
                        <img src="/images/calendar.png" width="80" />
                        </button>
                        </form>
                    </nav>
              </div>
            )
        }

}