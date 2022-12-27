/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CharityHead from '../Charity/CharityHead/CharityHead'
import CharityMain from '../Charity/CharityMain/CharityMain'

import './style.scss'


function Charity() {
 
    return (
        <>
            <Header />
                <section className='charity_section'>
                    <CharityHead />
                    <CharityMain />
                </section>
                
            <Footer />
        </>
    );
}

export default Charity;
