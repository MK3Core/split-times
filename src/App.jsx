import React, { useState, useMemo, useEffect } from 'react';
import { racingSeries, getRacesBySeries, LAST_UPDATED } from './raceData';
import { downloadICS } from './calendarUtils';
import { getUserTimezone, commonTimezones, formatRaceDateTime, getTimezoneAbbr } from './timezoneUtils';
import './App.css';

function App() {
  const [selectedSeries, setSelectedSeries] = useState(['f1', 'imsa', 'wec', 'wrc']);
  const [userTimezone, setUserTimezone] = useState(getUserTimezone());
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const filteredRaces = useMemo(() => {
    return getRacesBySeries(selectedSeries);
  }, [selectedSeries]);

  const toggleSeries = (seriesId) => {
    setSelectedSeries(prev => {
      if (prev.includes(seriesId)) {
        return prev.filter(id => id !== seriesId);
      } else {
        return [...prev, seriesId];
      }
    });
  };

  const handleDownload = () => {
    if (filteredRaces.length === 0) {
      alert('Please select at least one racing series');
      return;
    }
    
    const seriesNames = selectedSeries
      .map(id => racingSeries[id].name.split(' ')[0])
      .join('-')
      .toLowerCase();
    
    downloadICS(filteredRaces, `racing-calendar-${seriesNames}.ics`);
  };

  const groupRacesByMonth = () => {
    const grouped = {};
    filteredRaces.forEach(race => {
      const raceDate = new Date(race.dateTimeUTC);
      const monthYear = raceDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric',
        timeZone: userTimezone 
      });
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(race);
    });
    return grouped;
  };

  const racesByMonth = groupRacesByMonth();

  const formatLastUpdated = () => {
    const date = new Date(LAST_UPDATED);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="theme-toggle-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
        <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
      </button>

      <header className="header">
        <h1>🏁 Global Racing Calendar</h1>
        <p className="subtitle">Your complete motorsport schedule in one place</p>
      </header>

      <div className="container">
        <aside className="sidebar">
          <div className="series-selector">
            <h2>Racing Series</h2>
            <div className="series-list">
              {Object.values(racingSeries).map(series => (
                <label 
                  key={series.id} 
                  className="series-checkbox"
                  style={{ '--series-color': series.color }}
                >
                  <input
                    type="checkbox"
                    checked={selectedSeries.includes(series.id)}
                    onChange={() => toggleSeries(series.id)}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="series-name">{series.name}</span>
                </label>
              ))}
            </div>

            <div className="timezone-selector">
              <label htmlFor="timezone-select" className="timezone-label">
                🌍 Timezone
              </label>
              <select 
                id="timezone-select"
                value={userTimezone} 
                onChange={(e) => setUserTimezone(e.target.value)}
                className="timezone-dropdown"
              >
                {commonTimezones.map(tz => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
              <small className="timezone-info">
                Showing times in {getTimezoneAbbr(userTimezone)}
              </small>
            </div>
            
            <button 
              className="download-button" 
              onClick={handleDownload}
              disabled={selectedSeries.length === 0}
            >
              📅 Download Calendar
            </button>
            
            <div className="download-info">
              <small>
                {selectedSeries.length === 0 
                  ? 'Select at least one series' 
                  : `${filteredRaces.length} race${filteredRaces.length !== 1 ? 's' : ''} selected`}
              </small>
            </div>
          </div>
        </aside>

        <main className="main-content">
          {filteredRaces.length === 0 ? (
            <div className="empty-state">
              <p>👈 Select racing series to view the schedule</p>
            </div>
          ) : (
            <div className="races-container">
              {Object.entries(racesByMonth).map(([monthYear, races]) => (
                <div key={monthYear} className="month-section">
                  <h3 className="month-header">{monthYear}</h3>
                  <div className="races-grid">
                    {races.map((race, index) => {
                      const { date, time, isMultiDay } = formatRaceDateTime(race, userTimezone);
                      return (
                        <div 
                          key={`${race.seriesId}-${index}`} 
                          className="race-card"
                          style={{ '--series-color': race.seriesColor }}
                        >
                          <div 
                            className="race-series-badge" 
                            style={{ backgroundColor: race.seriesColor }}
                          >
                            {race.seriesName.split(' ')[0]}
                          </div>
                          <div className="race-details">
                            <div className="race-date">{date}</div>
                            <div className="race-time">🕐 {time}</div>
                            <div className="race-name">{race.name}</div>
                            <div className="race-location">📍 {race.location}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <footer className="footer">
        <p>Download your personalized racing calendar • All times shown in your selected timezone</p>
        <p className="last-updated">Last updated: {formatLastUpdated()}</p>
      </footer>
    </div>
  );
}

export default App;
