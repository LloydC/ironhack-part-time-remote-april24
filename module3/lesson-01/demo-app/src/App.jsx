import Navbar from './components/Navbar/Navbar'
import MainSection from './components/MainSection/MainSection'
import ProfilePic from './assets/profile-pic.png';
import Button from './components/Button/Button';
import './App.css'

function App() {
  const element = <h1>Hello world!</h1>;

  const student = {
    firstName: 'Tiago',
    likes: 'pranks',
    imageUrl: ProfilePic
  }

  const sayHello = () => {
    console.log('hello')
    return 'helloooo';
  }

  const sayBye = ()=>{
    console.log('bye')
    return 'bye';
  }


  return (
    <div className='App'>
      <Navbar />
      <MainSection />
      {element}
      <div>
        <h2>{student.firstName.toUpperCase()}</h2>
        <img src={student.imageUrl}  alt="student_photo"/>
        <p>{student.likes}</p>
        {/* <button onClick={sayHello}></button> */}
        <Button action={sayHello} banana='Save' />
        <Button action={sayBye} banana='Submit' />
      </div>
    </div>
  )
}

export default App
