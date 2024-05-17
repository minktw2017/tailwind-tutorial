import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Animation from './page/Animation'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animation" element={<Animation />} />
    </Routes>
  )
}

export default App
