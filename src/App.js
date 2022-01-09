import {BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home/Home/Home";

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
