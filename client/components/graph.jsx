import React from 'react';
import {Line} from 'react-chartjs-2';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.createDateArray = this.createDateArray.bind(this);
    }
    createDateArray() {
        let time = new Date().getTime();
        let counter = 6;
        let dateArray = [time];

        for (let i = 1; i <= counter; i++){
            let previousDay;
            previousDay = time - (86400000*i);
            dateArray.unshift(previousDay);
        }

        let dateStringArr = dateArray.map(day => {
            let eachDay = new Date(day);
            return (eachDay.toString().substring(0,11))
        });

        return dateStringArr;
    }
    componentDidMount(){
      console.log(this.props.feedingsData)
    }
    render() {
        let feedings = {
          labels: this.createDateArray(),
          datasets: [{
            label: 'Feedings',
            backgroundColor: 'rgb(25, 100, 255, .2)',
            borderColor: 'rgb(25, 100, 255, .8)',
            data: this.props.feedings.feedings
          }]
        };
        let diaperChanges = {
          labels: this.createDateArray(),
          datasets: [{
            label: 'Changes',
            backgroundColor: 'rgb(25, 200, 150, .2)',
            borderColor: 'rgb(25, 200, 150, .8)',
            data: this.props.changes.changes
          }]
        };
        let naps = {
          labels: this.createDateArray(),
          datasets: [{
            label: 'Naps',
            backgroundColor: 'rgb(230, 0, 150, .2)',
            borderColor: 'rgb(230, 0, 150, .8)',
            data: this.props.naps.naps
          }]
        };
        return (
          <React.Fragment>
            <br/>
            <Line data={feedings}/>
            <Line data={diaperChanges}/>
            <Line data={naps}/>
          </React.Fragment>
        );
      }
}

export default Graph;
