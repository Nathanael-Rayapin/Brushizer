import Convert from '../Landing/Convert/Convert';
import Hero from './Hero/Hero';
import LastSale from './LastSale/LastSale';
import Partners from './Partners/Partners';
import Stats from './Stats/Stats';
import About from './About/About';

import './style.scss'

function Landing() {
    return (
        <main className='main'>
            <Hero />
            <About />
            <Stats />
            <Partners />
            <LastSale />
            <Convert />
        </main>
    );
}

export default Landing;
