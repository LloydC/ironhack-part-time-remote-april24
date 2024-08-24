import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function TaskDetails(props){
    const [task, setTask] = useState({});

    const {tasks} = props;
    const {taskId} = useParams()

    useEffect(()=>{
        const currentTask = tasks.find(task => taskId === task._id)
        setTask(currentTask)
    }, [])

  return (
    <div className="dashboard">
        <h1>TaskDetails Page</h1>
        <br />
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.isComplete ? "✅" : "❌"}</p>
    </div>
  )
}

export default TaskDetails;