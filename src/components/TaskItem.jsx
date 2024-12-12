import Form from 'react-bootstrap/Form';

function TaskItem({task}){
    return(
        <>
        <Form>
            <Form.Check
            label={task.text}
            />
            <p className='fw-light'>Agregado el {task.date.toLocaleString()}</p>
        </Form>
        </>
    )
}

export default TaskItem