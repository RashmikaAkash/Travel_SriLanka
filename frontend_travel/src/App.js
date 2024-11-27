import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './components/Home';
import Destination from './components/destination';
import Gallery from './components/Gallery';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <div>

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/destination" exact Component={Destination} />
          <Route path="/gallery" exact Component={Gallery} />
        </Routes>
      </div>
    </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
