import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('AUTOMOTIVE');

  const sections = [
    'AUTOMOTIVE',
    'SPORTS',
    'HOSPITALITY',
    'UK STRATEGY',
    'ENTERTAINMENT',
    'FAMILY',
    'ENTERPRISE CASH FLOW',
    'ONBOARD',
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const icons = [
    { name: 'car', file: 'sport-car-icon-14.png' },
    { name: 'GSFS Group', file: 'gsfs-group.png' },
    { name: 'USAL', file: 'usal.png' },
    { name: 'WESTSIDE LEXUS', file: 'westside_lexus_logo.jpeg' },
  ];
  const logos = [
    { name: 'GULF STATES TOYOTA', file: 'gulf-states-toyota.png' },
    { name: 'GSFS Group', file: 'gsfs-group.png' },
    { name: 'USAL', file: 'usal.png' },
    { name: 'WESTSIDE LEXUS', file: 'westside_lexus_logo.jpeg' },
  ];

  const metrics = [
    ['DAILY SALES INDEX', '1,786', '+1.13% from Last Week'],
    ['DAILY TRANSACTION VOLUME', '283,870', '+132.95% from Last Week'],
    ['DAILY TOTAL SALES AMOUNT', '$6.18M', '-2.16% from Last Week'],
    ['YOY REVENUE GROWTH', '$160,000', '+3.23% from Last Year'],
    ['ALL REGIONS DAILY PROFIT', '$4.18M', 'More'],
    ['MTD CLOSED WON', '$20,277', '0% from yesterday'],
    ['MTD CLOSED LOST', '$13,665', '-30.59% from yesterday'],
    ['MTD NEGOTIATING', '$22,910', '+5.12% from yesterday'],
    ['MTD PROPOSING', '$7,811', '-33.55% from yesterday'],
    ['MTD POTENTIAL PIPELINE', '$28,696', '-2.17% from yesterday'],
    ['YOY GROWTH %', '3.23%', '-53.19% from last year'],
    ['YOY CUSTOMER COUNT', '2,850', '-6.34% from last year'],
    ['OPERATING CASH FLOW', '$3.02M', '+1.53% from last month'],
    ['YOY CUSTOMER GROWTH', '3.64%', '+3.64% from last year'],
    ['YOY AVG. UNIT VALUE', '$59', '+1.22% from last year'],
    ['OUT OF OFFICE COUNT', '22,248', '-57.49% from last month'],
    ['TOTAL OVERTIME HOURS', '240,477', '+1.52% from last month'],
    ['ANNUAL NEW HIRE COUNT', '10,311', '+3.64% from One year ago'],
    ['ANNUAL TERMINATIONS', '13', 'One Year Wrap'],
    ['ANNUAL TERMINATIONS', '13', 'One Year Wrap'],
  ];

  return (
    <div className="dashboard">
      <header className="header">
  <div className="header-left">
    <div className="welcome-text">Welcome, Dan</div>
    <div className="date-text">March 27, 2025</div>
  </div>
  <div className="quick-links-wrapper">
  <span className="icon">🔗</span>
  <select className="quick-links-select">
    <option>Quick Links</option>
    <option>Dashboard</option>
    <option>Reports</option>
    <option>Settings</option>
  </select>
</div>
        <div className="portal-text">EXECUTIVE PORTAL <span className="portal-arrow">➤</span></div>
      </header>

      <div className="nav-grid">
        {sections.map((section) => (
          <div
            key={section}
            className={`nav-item ${activeTab === section ? 'active' : ''}`}
            onClick={() => handleTabClick(section)}
          >
            {section}
          </div>
        ))}
      </div>

      <h2 className="section-title">{activeTab} DASHBOARD</h2>

      <div className="main-content">
        {logos.map((logo, i) => (
          <div className="company-row" key={i}>
            <div className="company-logo">
           <img className= "logo-image" src={`/assets/${logo.file}`} alt={logo.name} />
            </div>
            <div className="metrics-row">
              {metrics.slice(i * 5, i * 5 + 5).map(([title, value, note], j) => (
                <div className="metric" key={j}>
                  <div className="metric-title">{title}</div>
                  <div className="metric-value">{value}</div>
                  <div className="metric-note">{note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;