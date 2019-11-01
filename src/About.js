import React from 'react';
import profile from './static/profile.jpg';

function About(props) {
    return (
        <div id={props.id}>
            <h1>I Am The About</h1>

            {/* <img src={profile}></img> */}
            {/* <img src={(require = 'https://imgur.com/v2811dh')}></img> */}
        </div>
    );
}

export default About;
