import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';
 

function App() {
  return (
    <div className="max-w-7xl px-12 mx-auto">
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
        
       </Routes>

    </div>
  );
}

export default App;
