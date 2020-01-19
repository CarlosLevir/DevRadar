import React, { useEffect, useState, useContext } from 'react';
import DevContext from '../../DevContext';
import './styles.css';

export default function NewDev() {
  const [github_username, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const { addNewDev } = useContext(DevContext);

  async function getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => { console.log(err) },
      { 
        timeout: 30000,
      }
    )
  }

  async function handleAddDev(e) {
    e.preventDefault();

    await addNewDev({ github_username, techs, latitude, longitude });

    setGithubUserName('');
    setTechs('');
    setLatitude('');
    setLongitude('');

    getUserLocation();
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <div className="input-block">
          <label htmlFor="github_url">Usuário do Github</label>
          <input 
            name="github_username"
            id="github_username"
            value={github_username}
            onChange={e => setGithubUserName(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              name="latitude"
              id="latitude"
              type="number"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
              name="longitude" 
              id="longitude"
              type="number"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required 
            />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
}
