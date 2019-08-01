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
          
           
            var finalBabyTime = this.formatAMPM(this.props.children.finished_at)
            var entryType = "";
            if(this.props.children.entry_type==="naps"){
                    entryType = "nap";
            }else if(this.props.children.entry_type==="feedings"){
                entryType = "feeding";
            }else if(this.props.children.entry_type==="changes"){
                entryType = "changing";
            }
            var backgroundColorForDiv = "";

            if (this.props.children.user_id===1){
                backgroundColorForDiv = "#B9CEF3"
            }else if (this.props.children.user_id===2){
                backgroundColorForDiv = "#FFA8CC"
            }else if(this.props.children.user_id===3){
                backgroundColorForDiv = "#9BE79E"
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
                <tr style ={{backgroundColor: backgroundColorForDiv}}>
                    <th scope="row">{finalBabyTime}</th>
                    <td>{entryType}</td>
                    <td>{changeType}</td>
                </tr>
            )


        }



}