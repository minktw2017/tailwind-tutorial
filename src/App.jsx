import { Routes, 
         Route 
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About"
import Main from "./page/Main";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
