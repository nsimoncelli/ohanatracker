import React from 'react';
import dateFns from 'date-fns';
var format = require('date-fns/format');


export default class CalendarEntryDetails extends React.Component{

    constructor(props){
        super(props)
        this.formatAMPM = this.formatAMPM.bind(this);
        this.modifyClickHandler = this.modifyClickHandler.bind(this);
        this.deleteClickHandler = this.deleteClickHandler.bind(this);
    }

    modifyClickHandler() {
        console.log('ID TO MODIFY:', this.props.children.id)
    }

    deleteClickHandler() {
        console.log('ID TO DELETE:', this.props.children.id)
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
        // var finalBabyTime= this.formatAMPM(this.props.children.finished_at);
        // var babyEventTime = new Date(this.props.children.finished_at);
        // this.formatAMPM(new Date(this.props.children.finished_at));
        // babyEventTime = new Date(babyEventTime.getTime() + (babyEventTime.getTimezoneOffset() * 60 * 1000)); //convert to local time from GMT
        
        var finalBabyTime = this.formatAMPM(this.props.children.finished_at)
        
        var entryType;
        if(this.props.children.entry_type==="naps"){
            entryType = <img src="/images/napButtonIcon.png" height="25px" width="auto" />;
        }else if(this.props.children.entry_type==="feedings"){
            entryType = <img src="/images/bottle2.png" height="25px" width="auto" />;
        }else if(this.props.children.other_info==='{"change_type": 1}'){
            entryType = <img src="/images/pee3.png" height="25px" width="auto" />;
        }else if(this.props.children.other_info==='{"change_type": 2}'){
            entryType = <img src="/images/poop4.png" height="25px" width="auto" />;
        }

        var backgroundColorForDiv = "";
        if (this.props.children.user_id===1){
            backgroundColorForDiv = "#EDFFD1"
        }else if (this.props.children.user_id===2){
            backgroundColorForDiv = "#F5E5FF"
        }else if(this.props.children.user_id===3){
            backgroundColorForDiv = "#EAFFFC"
        }

        // if(this.props.children.other_info==='{"change_type": 1}'){
        //     changeType = this.props.children.other_info==='{"change_type": 1}'
        // }else if(this.props.children.other_info==='{"change_type": 2}'){
        //     changeType = <img src="/images/poop4.png" height="25px" width="auto" />;
        // }
        
        return (
            <tr style ={{backgroundColor: backgroundColorForDiv}} className="text-center">
                <th scope="row">{finalBabyTime}</th>
                <td>{entryType}</td>
                <td>
                    <button 
                        onClick={this.modifyClickHandler}
                        type="button" 
                        className="btn" 
                        style={{backgroundColor: 'transparent', border: 'none'}}>
                            <img src="/images/edit.png" height="25px" width="auto" />
                    </button>
                </td>
                <td>
                    <button 
                        onClick={this.deleteClickHandler}
                        type="button" 
                        className="btn" 
                        style={{backgroundColor: 'transparent', border: 'none'}}>
                            <img src="/images/x-button.png" height="25px" width="auto" />
                    </button>
                </td>
            </tr>
        )
    }
}