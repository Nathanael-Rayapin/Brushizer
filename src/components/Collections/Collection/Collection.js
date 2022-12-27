/* COMPONENTS */
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Filter from '../Collection/Filter/Filter'
import { Icon } from 'semantic-ui-react';

import './style.scss'


function Collection() {

    return (
        <>
            <Header />
            <section className='collection_section'>
                <div className='collection_section_wrapper'>
                    <div className='collection_section_infos'>
                        <div className='collection_section_infos_detail'>
                            <div className='collection_section_infos_detail_img'></div>
                            <div className='collection_section_infos_detail_name'>
                                <div className='collection_section_infos_detail_name-collection'>
                                    BRUSHIZER<Icon size='small' name="check circle" />
                                </div>
                                <div className='collection_section_infos_detail_name-artist'><span>by</span> Mezange <Icon size='small' name="check circle" /></div>
                            </div>
                        </div>
                        <div className='collection_section_infos_stats'>
                            <div className='collection_section_infos_stats-items'>
                                <div className='collection_section_infos_stats-items--title'>
                                    Items
                                </div>
                                <div className='collection_section_infos_stats-items--number'>
                                    1000
                                </div>
                            </div>
                            <div className='collection_section_infos_stats-volume'>
                                <div className='collection_section_infos_stats-volume--title'>
                                    Volume
                                </div>
                                <div className='collection_section_infos_stats-volume--number'>
                                    80 K$
                                </div>
                            </div>
                            <div className='collection_section_infos_stats-floor'>
                                <div className='collection_section_infos_stats-floor--title'>
                                    Floor Price
                                </div>
                                <div className='collection_section_infos_stats-floor--number'>
                                    12.50 SOL
                                </div>
                            </div>
                            <div className='collection_section_infos_stats-floorDollar'>
                                <div className='collection_section_infos_stats-floor--title'>
                                    Floor $
                                </div>
                                <div className='collection_section_infos_stats-floor--number'>
                                    150.24 $
                                </div>
                            </div>
                        </div>
                        <div className='collection_section_social'>
                            <div className='collection_section_social_wrapper'>
                                <a className='collection_section_social_wrapper-twitter' href="https://www.twitter.com/BRUSHIZER">
                                    <Icon size='large' name="twitter" />
                                </a>
                                <a className='collection_section_social_wrapper-external' href="https://www.twitter.com/BRUSHIZER">
                                    <Icon size='large' name="globe" />
                                </a>
                                <a className='collection_section_social_wrapper-dropdown' href="/">
                                    <Icon size='large' name="ellipsis horizontal" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Filter />

            </section>
            <Footer />
        </>
    );
}

export default Collection;