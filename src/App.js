import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1> <span role="img" aria-label="Construction Worker Emoji">&#128119;
</span>  This website is still a work in progress <span role="img" aria-label="Construction Crane Emoji">&#127959;</span></h1>
                <p>But you're here, consider following me on my social medias :)</p>

                <div>
                    <ul>
                        <li>
                            <a href='https://linkedin.com/in/benkats'>LinkedIn</a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/ben_kats/'>Instagram</a>
                        </li>
                    </ul>
                </div>

                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
