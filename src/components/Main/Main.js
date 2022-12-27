import Hero from './Hero/Hero';
import LastSale from './LastSale/LastSale';
import Partners from './Partners/Partners';
import Stats from './Stats/Stats';
import './style.scss'

function Main() {
    return (
        <main className='main'>
            <Hero />
            <Partners />
            <LastSale />
            <Stats />
        </main>
    );
}

export default Main;
