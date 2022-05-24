import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';



function App() {
  return (
    <div className="max-w-7xl px-12 mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/product/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
     <Route path='dashboard' element={
       <RequireAuth>
            <Dashboard></Dashboard>
       </RequireAuth>}>
         <Route path='addreview' element={<AddReview></AddReview>}> </Route>
         <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
         <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
         <Route path='making-admin' element={<MakeAdmin></MakeAdmin>}> </Route>

     </Route>
   

      </Routes>
  <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
