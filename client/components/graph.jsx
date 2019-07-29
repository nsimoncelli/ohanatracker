import React from 'react';
import {Line} from 'react-chartjs-2';

class Graph extends React.Component {

    render() {
        let data = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Feedings',
            backgroundColor: 'rgb(255, 99, 132, 0)',
            borderColor: 'rgb(25, 100, 255, .8)',
            data: [2, 4, 5, 1, 6, 3, 8]
          }]
        };
        let data2 = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Changes',
            backgroundColor: 'rgb(255, 99, 132, 0)',
            borderColor: 'rgb(25, 200, 150, .8)',
            data: [5, 3, 2, 7, 4, 9, 5]
          }]
        };
        let data3 = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Naps',
            backgroundColor: 'rgb(255, 99, 132, 0)',
            borderColor: 'rgb(230, 0, 150, .8)',
            data: [1, 8, 2, 4, 7, 6, 3]
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