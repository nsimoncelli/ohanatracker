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
            <tr className="text-center">
              <th scope="col">Time</th>
              <th scope="col">Type</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.dataFromSelectedDate.entries.map(babyInfo=>{
                return(
                  <CalendarEntryDetails key={babyInfo.id}>
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

