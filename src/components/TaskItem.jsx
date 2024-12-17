import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function TaskItem({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState('');
  return (
    <>
      <Form>
        <div className="d-flex align-items-center">
        {isEditing ? (
          <>
            <Form.Control
              type="text"
              defaultValue={task.text}
              onChange={(e) => setNewText(e.target.value)}
              className="me-3"
            />
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 me-2 text-secondary custom-button" 
              onClick={() => {
                onEdit(task.id, newText);
                setIsEditing(false);
              }}
            >
              <i className="bi bi-floppy"></i>
            </Button>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 me-2 text-secondary custom-button" 
              onClick={() => {
                setIsEditing(false);
              }}
            >
              <i className="bi bi-x-lg"></i>
            </Button>
          </>
        ) : (
          <>
            <Form.Check 
              type="checkbox" 
              label={task.text} 
              className="me-3" 
            />
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 me-2 text-secondary custom-button" 
              onClick={() => setIsEditing(true)}
            >
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 me-2 text-secondary custom-button" 
              onClick={() => onDelete(task.id)}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </>
          )}
        </div>
        <div>
            <p className="fw-light mb-3">Agregado el {task.date}</p>
        </div>
      </Form>
    </>
  );
}

export default TaskItem