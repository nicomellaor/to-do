import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <>
      <Form>
        <div className="d-flex align-items-center">
          <Form.Check 
            type="checkbox" 
            label={task.text} 
            className="me-3" 
          />
          <Button 
            variant="link" 
            size="sm" 
            className="p-0 me-2 text-secondary custom-button" 
            onClick={onEdit}
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button 
            variant="link" 
            size="sm" 
            className="p-0 me-2 text-secondary custom-button" 
            onClick={onDelete}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
        <div>
            <p className="fw-light mb-3">Agregado el {task.date}</p>
        </div>
      </Form>
    </>
  );
}

export default TaskItem