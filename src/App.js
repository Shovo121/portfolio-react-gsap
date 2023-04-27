import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";


const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
