import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<h1>Movie Detail Page</h1>} />
          <Route path='/movies/:type' element={<h1>Movie Lists</h1>} />
          <Route path='/*' element={<h1>Error 404 - PAGE NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
