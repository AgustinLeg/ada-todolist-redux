import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/ui/Navbar'
import { AddTodo } from './pages/AddTodo'
import { EditPage } from './pages/EditPage'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/edit-todo/:id" element={<EditPage />} />
      </Routes>
    </>
  )
}

export default App
