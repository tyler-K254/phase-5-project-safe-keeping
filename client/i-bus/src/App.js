import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Booking from './components/Booking'
import Signin from './components/Signin'
import Signup from './components/signup'
import Payment from "./components/Payment";


function App() {
  return (
    <>
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/Booking" element={<Booking />}/>
      </Routes>
      <Routes>
        <Route path="/Payment" element={<Payment />}/>
      </Routes>
      <Routes>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route path="/Signin" element={<Signin />}/>
      </Routes>
    </div>
    </>
  );
}
export default App;
