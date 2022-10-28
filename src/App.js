import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar1 from './components/Navbar1';
import MyDetail from './components/MyDetail';
import Myskills from './components/Myskills';
import Myedu from './components/Myedu';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar1  />
      <Routes>
    <Route path="/MySkills"
      element={<Myskills />}>
    </Route> 
    <Route path="/"
      element={<MyDetail 
      name="Pratham Sursohi" 
      mobile="8XXXXXXXXX"
      Dob="01-01-2002"
      email="xyz@gmail.com"/>}>
    </Route> 
    <Route path="/Myedu"
      element={<Myedu />}>
    </Route> 
    
  </Routes>
    </div>
    
  </Router>
  );
}

export default App;
