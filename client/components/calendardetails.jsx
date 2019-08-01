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
          // console.log("calendar props", this.props);
            return (

              <div className="table-wrapper-scroll-y my-custom-scrollbar dayEntryDetails border-top">
              <h4 className="my-2 text-center">{selectedDate}</h4>
                <table className="table table-bordered table-striped my-0">
                  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">Type</th>
                      <th scope="col">Reason</th>
                      <th scope="col">Modify</th>
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

