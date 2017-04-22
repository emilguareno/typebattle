import React from 'react';
import { Modal } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import CreateBattleForm from './CreateBattleForm';

function CreateBattleModal(props){
    return (
        <Modal trigger={<Button>Create Battle</Button>}>
          <Modal.Header>Create a new battle</Modal.Header>
          <Modal.Content>
              <CreateBattleForm {...props} onSubmit={ props.onBattleFormSubmit }/>
          </Modal.Content>
        </Modal>
    )
}

export default CreateBattleModal;