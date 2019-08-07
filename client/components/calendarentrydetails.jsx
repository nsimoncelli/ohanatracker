import React from 'react';
import dateFns from 'date-fns';
import SubmitModal from './submitModal';
import {CSSTransition} from 'react-transition-group';
const format = require('date-fns/format');


export default class CalendarEntryDetails extends React.Component{

    constructor(props){
        super(props);
        this.formatAMPM = this.formatAMPM.bind(this);
        this.modifyClickHandler = this.modifyClickHandler.bind(this);
        this.deleteClickHandler = this.deleteClickHandler.bind(this);

    }

    modifyClickHandler() {
        let date = this.props.children.finished_at.split(' ')[0];
        this.props.renderModal('modify');
        this.props.getId(this.props.children.id, date);
    }

    deleteClickHandler() {
        this.props.renderModal('delete');
        this.props.getId(this.props.children.id);
    }

    formatAMPM(date) {
        date = new Date(date);
        var newDate = date.toLocaleTimeString('en-US')
        return newDate;
    }

    setEntryTypeIcon() {
        let entryTypeIcon;
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

    render(){ 
        return (
            <CSSTransition
            in={true}
            appear={true}
            timeout={200}
            classNames="fade"> 
            <React.Fragment>
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
            </React.Fragment>
            </CSSTransition>
        )
    }
}