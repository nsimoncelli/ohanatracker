import React from 'react';
import {Line} from 'react-chartjs-2';

class Graph extends React.Component {

    render() {
        let data = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Feedings',
            backgroundColor: 'rgb(25, 100, 255, .2)',
            borderColor: 'rgb(25, 100, 255, .8)',
            data: this.props.feedings
          }]
        };
        let data2 = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Changes',
            backgroundColor: 'rgb(25, 200, 150, .2)',
            borderColor: 'rgb(25, 200, 150, .8)',
            data: this.props.changes
          }]
        };
        let data3 = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Naps',
            backgroundColor: 'rgb(230, 0, 150, .2)',
            borderColor: 'rgb(230, 0, 150, .8)',
            data: this.props.naps
          }]
        };
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
