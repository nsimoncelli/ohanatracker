import React from 'react';
import dateFns from 'date-fns';
var format = require('date-fns/format');


export default class CalendarEntryDetails extends React.Component{

        constructor(props){
            super(props)
            this.formatAMPM = this.formatAMPM.bind(this);
        }

        formatAMPM(date) {
            date = new Date(date);
            date = new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000)); //convert to local time from GMT
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
          }

        render(){
            // console.log("props from db", this.props.children.finished_at);
            // var finalBabyTime= this.formatAMPM(this.props.children.finished_at);
            // var babyEventTime = new Date(this.props.children.finished_at);
            // this.formatAMPM(new Date(this.props.children.finished_at));
            // babyEventTime = new Date(babyEventTime.getTime() + (babyEventTime.getTimezoneOffset() * 60 * 1000)); //convert to local time from GMT
           
            var finalBabyTime = this.formatAMPM(this.props.children.finished_at)
            var entryType = "";
            if(this.props.children.entry_type==="naps"){
                    entryType = "nap";
            }else if(this.props.children.entry_type==="feedings"){
                entryType = "feeding";
            }else if(this.props.children.entry_type==="changes"){
                entryType = "changing";
            }
            
            var changeType = ""
            if(this.props.children.other_info.change_type===1){
                changeType = "Pee";
            }else if(this.props.children.entry_type===2){
                changeType = "Poo";
            }else if(this.props.children.entry_type===3){
                changeType = "Both"
            }
            
            return (
                <tr>
                    <th scope="row">{finalBabyTime}</th>
                    <td>{entryType}</td>
                    <td>{changeType}</td>
                </tr>
            )


        }



}