import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DashboardPage from './pages/Dashboard'
import TaskDetailsPage from './pages/TaskDetails'
import TaskCompletedPage from './pages/TaskCompleted'
import './App.css'
import tasksList from './tasks.json'

function App() {
  const [tasks, setTasks] = useState([])
  const [backupTasks, setBackupTasks] = useState([])
  
  useEffect(()=>{
    // axios request to fetch tasks from an api
    // then....
    setTasks(tasksList)
    setBackupTasks(tasksList)
}, [])
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<DashboardPage tasks={tasks} setTasks={setTasks}/>} />
        <Route path='/:taskId' element={<TaskDetailsPage tasks={tasks} />} />
        <Route path='/completed' element={<TaskCompletedPage backupTasks={backupTasks} tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </div>
  )
}

export default App
