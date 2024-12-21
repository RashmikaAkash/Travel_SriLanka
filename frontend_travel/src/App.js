import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Destination from './components/destination';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import explore from './components/explore';
import naturalbeauty from './components/Naturalbeauty';
import HotelBooking from './components/hotelbooking';
import Addhotels from './components/Admin/Addhotels';
import Rentcar from './components/RentCar';
import BookingPage from './components/form/BookingPagecar';
import Adventurous from './components/AdventurousTask';

import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App">
      
      <Router>
      <div>

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/destination" exact Component={Destination} />
          <Route path="/gallery" exact Component={Gallery} />
          <Route path="/booking" exact Component={Booking} />
          <Route path="/explore" exact Component={explore} />
          <Route path="/naturalbeauty" exact Component={naturalbeauty} />
          <Route path="/hotelbooking" exact Component={HotelBooking} />
          <Route path="/addhotels" exact Component={Addhotels} />
          <Route path="/rentcar" exact Component={Rentcar} />
          <Route path="/bookingcar" exact Component={BookingPage} />
          <Route path="/adventurous" exact Component={Adventurous} />
        
        </Routes>
      </div>
    </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
