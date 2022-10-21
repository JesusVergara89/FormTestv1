import { Route, Routes } from 'react-router-dom'
import './App.css'
import DataBase from './components/DataBase'
import FormInput from './components/FormInput'
import HeaderClass23 from './components/HeaderClass23'



function App() {


  
  return (
    <div className="App">
      <HeaderClass23/>

      

      <Routes>

        <Route
        path='/'
        element={<FormInput />}
        />
        
        <Route
        path='/dataB'
        element={<DataBase />}
        />

      </Routes>

  
      
    </div>
  )
}

export default App
