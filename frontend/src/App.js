import * as React from "react";
import './App.css';
import Home from './pages/header/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './pages/payment/Payment';
import InvSearchBar from './pages/investorSearch/InvSearchBar';
import StartupSearchBar from './pages/startupSearch/StartupSearchBar';
import Chat from './pages/chat/chat';
import LogIn from '../src/pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Profile from './pages/profile';
import KnowledgeHub from './pages/knowledgehub';
import EditProfile from './pages/editprofile'
import ForgotPassword from './pages/forgot-password';
import Dashboard from './pages/dashboard';
import Investorprofile from './pages/investors/Investorprofile';
import RequestDemo from './components/Dashboard/RequestDemo';
import DocumentVerification from './pages/documentVerification/DocumentVerification';
import Footer from './pages/footer/Footer';
import StartupProfile from './pages/product/StartupProflie';

function App(props) {
  const [isUserAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") {
      setIsAuthenticated(true);
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          { isUserAuthenticated && (
            <>
          <Route exact path='/payments' element={<Payment />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path="/documentVerification" element={<DocumentVerification />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path='/editprofile' element={<EditProfile />} />
          </>
          )}
          <Route exact path='/invSearchBar' element={<InvSearchBar />} />        
          <Route exact path='/startupSearchBar' element={<StartupSearchBar />} />
          <Route exact path="/investors" element={<Investorprofile />} />
          <Route exact path="/startup" element={<StartupProfile />} />
          <Route exact path="/login" element={<LogIn setIsAuthenticated={setIsAuthenticated}/>} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path='/hub' element={<KnowledgeHub />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/requestdemo' element={<RequestDemo />} />
          <Route exact path='/' element={<Dashboard />} />
          
        </Routes>
         
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
