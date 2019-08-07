import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { isThisSecond } from 'date-fns';

export default class SubmitModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.toggle = this.toggle.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({ modal : !this.state.modal });
    this.props.resetModal('');
  }

  toggle(e) {
    e.preventDefault();
    if(this.props.mainActionConfirm === true) {
      this.props.setView();
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    } else if ( this.props.delete === true) {
      this.hideModal();
    }
  }

  deleteRow(){
    this.props.resetModal();
    this.props.removeEntry(this.props.id);
  }

  updateEntry () {
    this.props.resetModal();
    console.log('updateEntry', this.props.id);
    this.props.updateEntry();
  }



  render() {
    if(this.props.mainActionConfirm === true) {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalBody className="text-center" >
              New entry has been recorded!
            </ModalBody>
            <ModalFooter>
              <img src="/images/check2.png" height="40px" width="auto" style={{"paddingRight": "135px"}}/>
            </ModalFooter>
          </Modal>
        </div>
      );
    } else if(this.props.delete === true) {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalBody className="text-center" >
              Are you sure you want to delete this entry?
            </ModalBody>
            <ModalFooter>
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.hideModal} >No</button>
              <button type="button" className="btn btn-danger" onClick={this.deleteRow} >Yes</button>
            </ModalFooter>
          </Modal>
        </div>
      );
    } else if(this.props.modify === true) {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalBody className="text-center" >
              Are you sure you want to modify this entry?
            </ModalBody>
            <ModalFooter>
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.updateEntry} >Submit</button>
            </ModalFooter>
          </Modal>
        </div>
      );
    } 
  }
}
