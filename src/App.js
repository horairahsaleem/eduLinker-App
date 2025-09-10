import React ,{useEffect} from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import Logout from './components/Auth/Logout';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/Actions/userActions';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader/Loader';

function App() {
  window.addEventListener('contextmenu',(e)=> e.preventDefault())
   const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch()
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
    useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ?(<Loader/>):(   
          <>

          <Header isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CoursePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/paymentfail' element={<PaymentFail/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>

        {/* Admin routes */}
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/courses' element={<AdminCourses/>}/>
        <Route path='/admin/createcourse' element={<CreateCourse/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        
      </Routes>
      <Footer/>
      <Toaster/>
              </>
)}
    </Router>
  );
}

export default App;
