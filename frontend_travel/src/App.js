import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Destination from './components/destination';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import explore from './components/explore';
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
        </Routes>
      </div>
    </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
