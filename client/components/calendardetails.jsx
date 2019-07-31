import React from 'react';
import CalendarEntryDetails from './calendarentrydetails';

export default class CalendarDetails extends React.Component{

        constructor(props){
            super(props);
            this.state={
              babyData: [
                {
                    "id": 1,
                    "baby_id": 1,
                    "user_id": 1,
                    "started_at": null,
                    "finished_at": "2019-07-14 03:41:14",
                    "entry_type": "changes",
                    "other_info": {
                        "change_type": 2
                    }
                },
                {
                    "id": 2,
                    "baby_id": 1,
                    "user_id": 3,
                    "started_at": null,
                    "finished_at": "2019-07-15 13:11:04",
                    "entry_type": "naps",
                    "other_info": {}
                },
                {
                    "id": 3,
                    "baby_id": 1,
                    "user_id": 2,
                    "started_at": null,
                    "finished_at": "2019-07-15 13:14:54",
                    "entry_type": "feedings",
                    "other_info": {}
                },
                {
                    "id": 4,
                    "baby_id": 1,
                    "user_id": 2,
                    "started_at": null,
                    "finished_at": "2019-07-14 03:41:14",
                    "entry_type": "changes",
                    "other_info": {
                        "change_type": 3
                    }
                }
            ]
            }
        }

        
        render() {
          // console.log("calendar details props", this.props);
          var selectedDate = "Select a Date";
          // var currentDateData= this.props.getDataFromDataBase(this.props.currentDate);
          // console.log("calendar details data = ", currentDateData);

          if(this.props.currentDate){
            var dateToString = this.props.currentDate.toString();
            selectedDate = dateToString.substr(0,15);
          }
            return (

              <div className="table-wrapper-scroll-y my-custom-scrollbar dayEntryDetails">
              <h3>{selectedDate} </h3>
                <table className="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Entry Type</th>
                      <th scope="col">Change Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.babyData.map(babyInfo=>{
                      return(<CalendarEntryDetails key={babyInfo.id}>
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

