import TaskItem from "./TaskItem"

function TaskList({tasks, onDelete, onEdit}){
    return(
        <div className="task-list">
            {tasks.toReversed().map((task, index) => (
                <TaskItem
                key={index}
                task={task}
                onDelete={onDelete}
                onEdit={onEdit}
                />
            ))}
        </div>
    )
}

export default TaskList