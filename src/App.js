import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';

import Booking from './Pages/Booking/Booking';
import FullServices from './Pages/FullServices/FullServices/FullServices';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='App'>
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/fullservices">
              <FullServices></FullServices>
              </Route>
              <Route path="/aboutus">
              <AboutUs></AboutUs>
              </Route>
          <PrivateRoute path='/booking/:serviceId'>
            <Booking></Booking>
          </PrivateRoute>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
