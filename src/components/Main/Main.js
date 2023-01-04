import Convertor from '../Convertor/Convertor';
import Hero from './Hero/Hero';
import LastSale from './LastSale/LastSale';
import Partners from './Partners/Partners';
import Stats from './Stats/Stats';
import About from './About/About';

import './style.scss'

function Main() {
    return (
        <main className='main'>
            <Hero />
            <Convertor />
            <Partners />
            <LastSale />
            <About />
            <Stats />
        </main>
    );
}

export default Main;
