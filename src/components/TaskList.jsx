import TaskItem from "./TaskItem"

function TaskList({tasks, onDelete, onEdit, onCompletion}){
    return(
        <div className="task-list">
            {tasks.toReversed().map((task, index) => (
                <TaskItem
                key={index}
                task={task}
                onDelete={onDelete}
                onEdit={onEdit}
                onCompletion={onCompletion}
                />
            ))}
        </div>
    )
}

export default TaskList