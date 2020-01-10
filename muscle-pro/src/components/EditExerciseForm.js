import EditExercise from './EditExercise'
import DeleteExercise from './DeleteExercise'
import { Button, Modal, ModalBody,} from 'reactstrap';

// function EditExerciseForm(props) {

//     return(
//         <div>
//             <EditExercise history={props.history} />
//             <DeleteExercise history={props.history} />
//         </div>
//     )
// }

// export default EditExerciseForm

import React from 'react';

class EditExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>options</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <EditExercise />
            <DeleteExercise />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditExerciseForm;