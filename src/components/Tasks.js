//task component and state will be at the top level.
import Task from './Task';


const Tasks = ({ tasks, onDelete }) => {


    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} text={task.text} day={task.day} onDelete={onDelete} id={task.id} />
            ))}
        </div>
    )
}

export default Tasks