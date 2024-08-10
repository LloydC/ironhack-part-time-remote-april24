import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  const updateTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

  const toggleTheme = event => {
    setTheme(event.target.value);
  };
  
  return (
    <div className={`App ${theme}`}>
       <h1>React - state and events</h1>
      <Counter />
      <button onClick={updateTheme}>Update theme</button>
      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  )
}

export default App
