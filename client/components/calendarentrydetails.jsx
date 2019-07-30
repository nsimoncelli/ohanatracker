import React from 'react';



export default class CalendarEntryDetails extends React.Component{

        constructor(props){
            super(props)
        }


        render(){

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
                    <th scope="row">{this.props.children.finished_at.slice(10)}</th>
                    <td>{entryType}</td>
                    <td>{changeType}</td>
                </tr>
            )


        }



}