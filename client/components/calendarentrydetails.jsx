import React from 'react';
import dateFns from 'date-fns';
import DeleteModal from './deletemodal';
const format = require('date-fns/format');


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
        this.props.delete(this.props.children.id);
    }

    formatAMPM(date) {
        date = new Date(date);
        date = new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000)); //convert to local time from GMT
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'P' : 'A';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

<<<<<<< HEAD
    setEntryTypeIcon() {
        let entryTypeIcon;
=======
    render(){
        
        var finalBabyTime = this.formatAMPM(this.props.children.finished_at)
        
        var entryType;
>>>>>>> dev
        if(this.props.children.entry_type==="naps"){
            entryTypeIcon = <img src="/images/napButtonIcon.png" height="25px" width="auto" />;
        }else if(this.props.children.entry_type==="feedings"){
            entryTypeIcon = <img src="/images/bottle2.png" height="25px" width="auto" />;
        }else if(this.props.children.other_info==='{"change_type": 1}'){
            entryTypeIcon = <img src="/images/pee3.png" height="25px" width="auto" />;
        }else if(this.props.children.other_info==='{"change_type": 2}'){
            entryTypeIcon = <img src="/images/poop4.png" height="25px" width="auto" />;
        }
        return entryTypeIcon;
    }

    setEntryBackgroudColor() {
        let backgroundColorForDiv = "";
        if (this.props.children.user_id===1){
            backgroundColorForDiv = "#EDFFD1"
        }else if (this.props.children.user_id===2){
            backgroundColorForDiv = "#F5E5FF"
        }else if(this.props.children.user_id===3){
            backgroundColorForDiv = "#EAFFFC"
        }
        return backgroundColorForDiv;
    }
        // var finalBabyTime= this.formatAMPM(this.props.children.finished_at);
        // var babyEventTime = new Date(this.props.children.finished_at);
        // this.formatAMPM(new Date(this.props.children.finished_at));
        // babyEventTime = new Date(babyEventTime.getTime() + (babyEventTime.getTimezoneOffset() * 60 * 1000)); //convert to local time from GMT
        
        // var finalBabyTime = this.formatAMPM(this.props.children.finished_at)  

<<<<<<< HEAD
        // if(this.props.children.other_info==='{"change_type": 1}'){
        //     changeType = this.props.children.other_info==='{"change_type": 1}'
        // }else if(this.props.children.other_info==='{"change_type": 2}'){
        //     changeType = <img src="/images/poop4.png" height="25px" width="auto" />;
        // }

    render(){      
=======
>>>>>>> dev
        return (
            <tr style ={{backgroundColor: this.setEntryBackgroudColor()}} className="text-center ">
                <th scope="row" className="pt-3">{this.formatAMPM(this.props.children.finished_at)}</th>
                <td className="pt-3">{this.setEntryTypeIcon()}</td>
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