import Convertor from '../Convertor/Convertor';
import Hero from './Hero/Hero';
import LastSale from './LastSale/LastSale';
import Partners from './Partners/Partners';
import Stats from './Stats/Stats';
import './style.scss'

function Main() {
    return (
        <main className='main'>
            <Hero />
            <Convertor />
            <Partners />
            <LastSale />
            <Stats />
        </main>
    );
}

export default Main;
