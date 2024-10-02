import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <h1 className='text-center bg-red-500 text-3xl'>Welcome to Streamify</h1>}/>
      <Route path='/movie/:id' element={ <h1>Movie Detail Page</h1>}/>
      <Route path='/movies/:type' element={ <h1>Movie Lists</h1>}/>
      <Route path='/*' element={ <h1>Error 404 - PAGE NOT FOUND</h1>}/>
   
    </Routes>
    </BrowserRouter>
  )
}

export default App
