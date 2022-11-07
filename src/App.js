
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './pages/About/About';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="">
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
