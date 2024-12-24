// App.js
import React from 'react';


import Sidebar from './MernDashboard/Sidebar';
import Header from './MernDashboard/dashHeader';
import StatsGrid from './MernDashboard/StatsGrid';
import ChartsGrid from './MernDashboard/ChartsGrid';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <StatsGrid />
        <ChartsGrid />
      </main>
    </div>
  );
}

export default App;



// App.css
/* Add the same CSS from your original HTML file */
