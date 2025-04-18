import React from 'react';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Service from './Service';

export default function Dashboard({ interval, profileImage, intervalforpp, ImageURI }) {
    return (
        <>
            <Home profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={ImageURI} interval={interval} />
            <About profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={ImageURI} interval={interval} />
            <Resume profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={ImageURI} interval={interval} />
            <Portfolio profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={ImageURI} interval={interval} />
            <Service profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={ImageURI} interval={interval} />
            <Contact profileImage={profileImage} intervalforpp={intervalforpp} ImageURI={ImageURI} interval={interval} />
        </>
    );
}
