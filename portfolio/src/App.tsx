// import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './App.css'
// import Header from './components/Header'
import router from './routes'

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
