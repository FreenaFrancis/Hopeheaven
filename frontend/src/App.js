// App.js
import React from 'react';
import './App.css';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddOrphanage from './components/AdminPages/AddOrphange';
import ViewOrphanage from './user/ViewOrphanage';
import ViewAdminOrphanage from './components/AdminPages/ViewAdminOrphange';
import UpdateOrphange from './components/AdminPages/UpdateOrphange';
import Volunteer from './components/voluteer/Volunteer';
import VolunteerLogin from './components/voluteer/VolunteerLogin';
import VolunteerHome from './components/voluteer/VolunteerHome';
import FrontPage from './pages/FrontPage';
import ViewDetail from './user/viewDetail';
import DonationType from './components/voluteer/DonateType';
import Donate from './user/Donate';
import DonationForm from './user/DonationForm';
import ViewUsers from './components/AdminPages/ViewAllUsers';
import ViewVolunteer from './components/AdminPages/ViewVolunteer';
import ViewDonation from './components/AdminPages/ViewDonation';
import GiveRequestForm from './components/voluteer/GiveRequest';
import ViewRequest from './user/ViewRequest';
import GiveFeedback from './components/voluteer/GiveFeedback';
import ViewFeedback from './user/Viewfeedback';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage/>}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/home/:id' element={<Home />} />
          {/* admin part */}
          <Route path='/admin' element={<Admin />} />
          <Route path='/addorphange' element={<AddOrphanage />} />
          <Route path='/viewadminorphange' element={<ViewAdminOrphanage/>} />
          <Route path='/updateorphange/:id' element={<UpdateOrphange/>} />
          <Route path='/viewusers' element={<ViewUsers/>} />
          <Route path='/viewvolunteer' element={<ViewVolunteer/>} />
          <Route path='/viewdonation' element={<ViewDonation/>} />
          {/* users */}
          <Route path='/vieworphange' element={<ViewOrphanage/>} />
          <Route path='/viewdetail/:id' element={<ViewDetail/>} />
          <Route path='/donate/:id' element={<Donate/>} />
          <Route path='/donationform/:id' element={<DonationForm/>} />
          <Route path='/getrequest' element={<ViewRequest/>} />
          <Route path='/viewfeedback' element={<ViewFeedback/>} />
          {/* volunteer */}
          <Route path='/volunteer' element={<Volunteer/>} />
          <Route path='/volunteerlogin' element={<VolunteerLogin/>} />
          <Route path='/volunteerhome/:id' element={<VolunteerHome/>} />
          <Route path='/donatecategory' element={<DonationType/>} />
          <Route path='/giverequest/:id' element={<GiveRequestForm/>} />
          <Route path='/givefeedback' element={<GiveFeedback/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
