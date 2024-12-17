import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskInput({ onAdd }){
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        const task = {id: uuidv4(), text: input, date: new Date().toLocaleString()};
        onAdd(task);
        setInput('');
    }

    return(
        <>
            <InputGroup className="my-3">
                <Form.Control
                placeholder="Ingresa una nueva tarea"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="primary" onClick={handleSubmit}>Agregar</Button>
            </InputGroup>
        </>
    )
}

export default TaskInput