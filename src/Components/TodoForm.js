import React, { useState } from 'react'
import Modal from './Modal'

export default function TodoForm({todo, isOpen, onClose, onSave}) {

  const [textValue, setTextValue] = useState((todo) ? todo.text : ""); // if there is to do, show todo, if not just show empty
  
  const handleTextChange = (e) => setTextValue(e.target.value);
  
  const handleSave = () => {
    onSave({ text : textValue});
  }
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title = {(todo) ? "Edit" : "New Todo"}
      actionButtonText="Save" 
      onActionButtonClick={handleSave}>
      <form>
        <input className="form-control todo-input" placeholder="Enter todo" value={textValue} onChange={handleTextChange}/>
        
      </form>
    </Modal>
  )
}
