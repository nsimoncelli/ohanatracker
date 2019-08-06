import React from 'react';
import CalendarEntryDetails from './calendarentrydetails';

export default class CalendarDetails extends React.Component{

  constructor(props){
      super(props); 
  }

  render() {
    var selectedDate = "Select a Date";
    if(this.props.currentDate){
      var dateToString = this.props.currentDate.toString();
      selectedDate = dateToString.substr(0,15);
    }
    return (
      <div className="table-wrapper-scroll-y my-custom-scrollbar dayEntryDetails border-top">
      <h4 className="my-2 text-center">{selectedDate}</h4>
        <table className="table table-bordered table-striped my-0">
          <thead>
            <tr>
              <th className="col text-center">Time</th>
              <th className="col text-center">Type</th>
              <th className="col text-center">Edit</th>
              <th className="col text-center">Modify</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.dataFromSelectedDate.map(babyInfo=>{
                return(
                  <CalendarEntryDetails 
                  updateEntry={this.props.updateEntry}
                  key={babyInfo.id}
                  delete={this.props.removeEntry}
                  >
                    {babyInfo}
                  </CalendarEntryDetails>)
                }
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

