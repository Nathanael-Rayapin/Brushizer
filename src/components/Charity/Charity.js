/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CharityHead from '../Charity/CharityHead/CharityHead'
import CharityMain from '../Charity/CharityMain/CharityMain'

import './style.scss'
import { useEffect } from 'react';


function Charity() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
