import React from 'react';
import { Modal, Input, Button, Dropdown } from 'semantic-ui-react';

const CreateBattleModal = (
  {
    results = [], 
    onSearchChange,
    onSelect,
    isLoading = false
  }) => (
  <Modal trigger={<Button>Create Battle</Button>}>
    <Modal.Header>Create a new battle</Modal.Header>
    <Modal.Content>
      <Input placeholder='Battle Name' size='large' fluid />
      <Dropdown 
        placeholder='Search for opponents (email)' 
        loading={isLoading}
        fluid 
        multiple 
        search 
        onSearchChange={onSearchChange}
        selection 
        options={results} />
      <Button>Create</Button>
    </Modal.Content>
  </Modal>
)


export default CreateBattleModal;