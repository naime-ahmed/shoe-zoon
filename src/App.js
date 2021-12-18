
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Featured from './pages/Featured/Featured';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import OrderProduct from './pages/Home/OrderProduct/OrderProduct';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageOrders from './Dashboard/ManageOrders/ManageOrders';
import AddProduct from './Dashboard/AddProduct/AddProduct';
import ManageProducts from './Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import Welcome from './Dashboard/Welcome/Welcome';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/orderProduct/:orderItemId" element={
            <PrivateRoute>
              <OrderProduct/>
            </PrivateRoute>
            } />
            <Route path="/dashboard" element={<Dashboard />} >
            
              <Route path="" element={ <Welcome/>} />
              <Route path="manageOrder" element={<ManageOrders />} />
              <Route path="addProduct" element={ <AddProduct/>}/>
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route path="makeAdmin" element={<MakeAdmin/> }/>

            </Route>
            <Route path="/myOrders" element={ <MyOrders/>}/>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={ <SignIn/>}/>
          </Routes>
        
        </BrowserRouter>
      </AuthProvider>
    </div>
  );

}

export default App;
