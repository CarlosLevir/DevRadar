import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevContext from './DevContext';

import './styles/global.css';
import './styles/app.css';

import NewDev from './components/NewDev';
import DevList from './components/DevList';

export default function App() {
  const [devs, setDevs] = useState([]);

  async function addNewDev({
    github_username,
    techs,
    latitude,
    longitude,
  }) {
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    setDevs([...devs, response.data]);
  }

  async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);
  }

  useEffect(() => {
    loadDevs();
  }, []);
  
  return (
    <div id="app">
      <DevContext.Provider value={{
        devs,
        addNewDev,
      }}>
        <NewDev />
        <DevList />
      </DevContext.Provider>
    </div>
  );
}
