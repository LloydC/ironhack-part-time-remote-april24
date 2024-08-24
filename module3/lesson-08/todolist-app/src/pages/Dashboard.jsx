import { useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


function Dashboard(props){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const { tasks, setTasks} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const _id = uuidv4();

        const newTask = {
            _id,
            title,
            description,
            date,
            isComplete: false
        }
        setTasks([...tasks, newTask])
        setTitle("")
        setDescription("")
        setDate("")
    }

    const deleteTask = (taskId) => {
        const updateTasks = tasks.filter(task => task._id !== taskId)
        setTasks(updateTasks)
    }

    
  return (
    <div className="dashboard">
        <h1>Dashboard Page</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" name='description' value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <input type="date" name='date' value={date} onChange={(e)=> setDate(e.target.value)} />
            <button type="submit"></button>
        </form>
        {tasks.map(task => {
            return <div key={task._id}>
                    <h3><Link to={`/${task._id}`}>{task.title}</Link> {task.isComplete ? "✅" : "❌"}</h3>
                    <button onClick={()=> deleteTask(task._id)}>Delete task</button>
                </div>
        })}
    </div>
  )
}

export default Dashboard;
