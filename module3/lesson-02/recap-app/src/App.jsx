import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import StudentCard from './components/StudentCard'
import { v4 as uuidv4 } from 'uuid';
import ReactPlayer from 'react-player';
import './App.css'

function App() {
  const student = {
    firstName: 'Lloyd',
    lastName: 'Chambrier'
  }

  const studentList = [
    {
      id: uuidv4(),
      name: 'Eva',
      week: 7,
      info: {
        city: 'BCN',
        course: 'WEB'
      }
    },
    {
      id: uuidv4(),
      name: 'Mat',
      week: 8,
      info: {
        city: 'AMS',
        course: 'DATA'
      }
    }
  ]

  return (
      <div className='App'>
        <Navbar />
        <Greeting firstName={student.firstName} lastName={student.lastName} />
        <hr />
        <Greeting firstName='John' lastName='Doei'  />
        <hr />
        <Greeting firstName='Jane' lastName='Doeiii' />

        {/* <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />
        <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} /> */}
        {studentList.map(student => {
          return <StudentCard key={student.id} name={student.name} week={student.week} info={student.info} />
        })}
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing controls={true} />
      <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume={0.5}
        />
       </div>
  )
}

export default App
