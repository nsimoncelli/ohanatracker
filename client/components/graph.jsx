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
      console.log(this.props.feedings)
    }
    render() {
        let data = {
          labels: this.createDateArray(),
          datasets: [{
            label: 'Feedings',
            backgroundColor: 'rgb(25, 100, 255, .2)',
            borderColor: 'rgb(25, 100, 255, .8)',
            data: this.props.feedings
          }]
        };
        let data2 = {
          labels: this.createDateArray(),
          datasets: [{
            label: 'Changes',
            backgroundColor: 'rgb(25, 200, 150, .2)',
            borderColor: 'rgb(25, 200, 150, .8)',
            data: this.props.changes
          }]
        };
        let data3 = {
          labels: this.createDateArray(),
          datasets: [{
            label: 'Naps',
            backgroundColor: 'rgb(230, 0, 150, .2)',
            borderColor: 'rgb(230, 0, 150, .8)',
            data: this.props.naps
          }]
        };
        console.log(data, data2, data3);
        return (
          <React.Fragment>
            <br/>
            <Line data={data}/>
            <Line data={data2}/>
            <Line data={data3}/>
          </React.Fragment>
        );
      }
}

export default Graph;
