import React from 'react';
import CalendarEntryDetails from './calendarentrydetails';
import SubmitModal from './submitModal';

export default class CalendarDetails extends React.Component{

  constructor(props){
      super(props); 
      this.state = {
        deleteModal : false,
        idToDelete: ''
      };
      this.renderDeleteModal = this.renderDeleteModal.bind(this);
      this.getIdToDelete = this.getIdToDelete.bind(this);
  }

  displaySelectedDate() {
    let selectedDate = "Select a Date";
    if(this.props.currentDate){
      let dateToString = this.props.currentDate.toString();
      selectedDate = dateToString.substr(0,15);
    }
    return selectedDate;
  }

  renderDeleteModal(){
    this.setState({ deleteModal : !this.state.deleteModal})
  }

  getIdToDelete(id){
    this.setState({ idToDelete : id})
  }

  render() {
    return (
      <React.Fragment>
        {this.state.deleteModal && <SubmitModal deleteRow={true} removeEntry={this.props.removeEntry} idToDelete={this.state.idToDelete} resetDeleteModal={this.renderDeleteModal}/>}
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
                      renderDeleteModal={this.renderDeleteModal}
                      getIdToDelete = {this.getIdToDelete}
                      // updateEntry={this.props.updateEntry}
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

