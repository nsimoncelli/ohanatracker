import React from 'react';
import CalendarEntryDetails from './calendarentrydetails';
import SubmitModal from './submitModal';

export default class CalendarDetails extends React.Component{

  constructor(props){
      super(props); 
      this.state = {
        modal : '',
        id: ''
      };
      this.renderModal = this.renderModal.bind(this);
      this.getId = this.getId.bind(this);
  }

  displaySelectedDate() {
    let selectedDate = "Select a Date";
    if(this.props.currentDate){
      let dateToString = this.props.currentDate.toString();
      selectedDate = dateToString.substr(0,15);
    }
    return selectedDate;
  }

  renderModal(modalView){
    this.setState({ modal : modalView})
  }

  getId(id){
    this.setState({ id : id})
  }

  render() {
    return (
      <React.Fragment>
        {this.state.modal === 'delete' && 
          <SubmitModal  
            delete={true} 
            removeEntry={this.props.removeEntry} 
            id={this.state.id} 
            resetModal={this.renderModal}
          />
        }
        {this.state.modal === 'modify' && 
          <SubmitModal  
            modify={true} 
            updateEntry={this.props.updateEntry}
            id={this.state.id} 
            resetModal={this.renderModal}
          />
        }
        <div className="table-wrapper-scroll-y my-custom-scrollbar dayEntryDetails border-top">
          <h4 className="my-2 text-center">{this.displaySelectedDate()}</h4>
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
                this.props.dataFromSelectedDate.map(babyInfo=>{
                  return(
                    <CalendarEntryDetails 
                      renderModal={this.renderModal}
                      getId = {this.getId}
                      key={babyInfo.id}
                    >
                      {babyInfo}
                    </CalendarEntryDetails>)
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

