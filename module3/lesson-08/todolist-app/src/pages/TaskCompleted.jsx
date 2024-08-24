import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function TaskCompleted(props){
    const [completedTasks, setCompletedTasks] = useState([]);
    const { tasks, setTasks, backupTasks } = props;

    const deleteTask = (taskId) => {
        const updateTasks = tasks.filter(task => task._id !== taskId)
        setTasks(updateTasks)
    }

    const restoreTasks = () => {
        setTasks(backupTasks)
    }

    useEffect(()=>{
        const tasksCompleted = tasks.filter(task => task.isComplete)
        setCompletedTasks(tasksCompleted)
    }, [tasks])

  return (
    <div className="dashboard">
        <h1>TaskCompleted Page</h1>
       {backupTasks.length !== tasks.length && <button onClick={restoreTasks}>Restore Most Recently Deleted Task</button>}
        <br />
        {completedTasks.map(task => {
            return <div key={task._id}>
                    <h3><Link to={`/${task._id}`}>{task.title}</Link> {task.isComplete ? "✅" : "❌"}</h3>
                    <button onClick={()=> deleteTask(task._id)}>Delete task</button>
                </div>
        })}
    </div>
  )
}

export default TaskCompleted;