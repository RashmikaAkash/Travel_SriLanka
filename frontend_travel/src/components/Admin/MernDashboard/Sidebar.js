import React from 'react';

const Sidebar = () => (
  <aside className="sidebar">
    <h2 className="gradient-text">Dashboard</h2>
    <nav>
      <div className="menu-item active">Overview</div>
      <div className="menu-item">Analytics</div>
      <div className="menu-item">Reports</div>
      <div className="menu-item">Settings</div>
    </nav>
  </aside>
);

export default Sidebar;