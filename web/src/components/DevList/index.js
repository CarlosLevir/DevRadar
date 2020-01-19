import React, { useContext } from 'react';
import DevContext from '../../DevContext';
import './styles.css';

export default function DevList() {
  const { devs } = useContext(DevContext);

  return (
    <main>
      <ul>
        {devs.map(dev => (
          <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href={`https://github.com/${dev.github_username}`}
            >
              Acessar perfil no Github
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
