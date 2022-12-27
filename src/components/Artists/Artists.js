/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './style.scss'


function Artists() {

    return (
        <>
            <Header />
            <section className='artists_section'>
                <div className='artists_section_title'>Our <span>Artists </span></div>

                <div className='artists_list'>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                Mezange
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/001.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/002.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                Doctor
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/003.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/004.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'> Dev Lopperrrrrr </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/005.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/006.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                Aper
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/007.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/008.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                VENYO
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/009.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/010.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                Danile
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/011.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/012.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                Temax
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/012.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/013.png' alt='artwork' />
                        </div>
                    </div>

                    <div className='artists_list_item'>
                        <div className='artists_list_item_artist'>
                            <div className='artists_list_item_artist-name'>
                                Phyzze
                            </div>
                        </div>
                        <div className='artists_list_item_images'>
                            <img className='artists_list_item_images-img001' src='./assets/artworks/015.png' alt='artwork' />
                            <img className='artists_list_item_images-img002' src='./assets/artworks/016.png' alt='artwork' />
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Artists;
