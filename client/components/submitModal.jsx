import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SubmitModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    if(this.props.mainActionConfirm === true) {
      this.props.setView();
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    } else if (this.props.deleteRow === true) {
      this.props.resetDeleteModal();
    }
  }

  deleteRow(){
    this.props.resetDeleteModal();
    this.props.removeEntry(this.props.idToDelete);
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
    } else if(this.props.deleteRow === true) {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalBody className="text-center" >
              Are you sure you want to delete this entry?
            </ModalBody>
            <ModalFooter>
              <button type="button" className="btn btn-success" data-dismiss="modal" >No</button>
              <button type="button" className="btn btn-danger" onClick={this.deleteRow} >Yes</button>
            </ModalFooter>
          </Modal>
        </div>
      );
    } 
  }
}
