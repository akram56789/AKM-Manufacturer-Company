import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import AllOrders from './Pages/Dashboard/AllOrders';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequierAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import AddProduct from './Pages/Manage/AddProduct';
import ManageProducts from './Pages/Manage/ManageProducts';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';



function App() {
  return (
    <div className="max-w-7xl px-12 mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
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
         <Route path='payment/:id' element={<Payment></Payment>}></Route>
         <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
         <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
         <Route path='allorders' element={<AllOrders></AllOrders>}></Route>
     
         {/* <Route path='making-admin' element={<MakeAdmin></MakeAdmin>}> </Route> */}

     </Route>
     <Route path='/addproduct' element={
           <RequireAdmin><AddProduct></AddProduct></RequireAdmin>
         }></Route>
         <Route path='/manageproduct' element={<RequireAdmin>
          <ManageProducts></ManageProducts>
         </RequireAdmin>}></Route>

         <Route path='*' element={<NotFound></NotFound>}></Route>
   

      </Routes>
  <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
