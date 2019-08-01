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

              <div className="table-wrapper-scroll-y my-custom-scrollbar dayEntryDetails">
              <h3>{selectedDate}</h3>
                <table className="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">Entry Type</th>
                      <th scope="col">Change Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.dataFromSelectedDate.entries.map(babyInfo=>{
                      return(<CalendarEntryDetails
                       key={babyInfo.id}>
                        {babyInfo}
                        
                      </CalendarEntryDetails>)
                    })
                  }
                  </tbody>
                </table>
              </div>
            );
          }
        }

