/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './style.scss'


function Collections() {

    return (
        <>
            <Header />
            <section className='collections_section'>
                <div className='collections_section_title'>Our <span>Collections </span></div>

                <div className='collections_list'>

                    <div className='collections_list_item'>
                        <div className='collections_list_item_artist'>BRUSHIZERRRRRRRRRRR
                        </div>
                        <div className='collections_list_item_images'>
                            <img className='collections_list_item_images-img001' src='./assets/artworks/001.png' alt='artwork' />
                            <img className='collections_list_item_images-img002' src='./assets/artworks/002.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='collections_list_item'>
                        <div className='collections_list_item_artist'>Revolution
                        </div>
                        <div className='collections_list_item_images'>
                            <img className='collections_list_item_images-img001' src='./assets/artworks/003.png' alt='artwork' />
                            <img className='collections_list_item_images-img002' src='./assets/artworks/004.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='collections_list_item'>
                        <div className='collections_list_item_artist'>infinity
                        </div>
                        <div className='collections_list_item_images'>
                            <img className='collections_list_item_images-img001' src='./assets/artworks/005.png' alt='artwork' />
                            <img className='collections_list_item_images-img002' src='./assets/artworks/006.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='collections_list_item'>
                        <div className='collections_list_item_artist'>destinity
                        </div>
                        <div className='collections_list_item_images'>
                            <img className='collections_list_item_images-img001' src='./assets/artworks/007.png' alt='artwork' />
                            <img className='collections_list_item_images-img002' src='./assets/artworks/008.png' alt='artwork' />
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    );
}

export default Collections;
