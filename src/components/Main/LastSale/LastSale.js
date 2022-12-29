import SaleCarousel from './SaleCarousel/SaleCarousel';
import artworks from '../../../data/artworks.json';
import { useMediaQuery } from 'react-responsive';
import { Dropdown } from 'semantic-ui-react';
import './style.scss'

function LastSale() {
    const isWide = useMediaQuery({
        query: '(min-width: 1400px)'
    });
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });
    const isMediumXL = useMediaQuery({
        query: '(min-width: 992px)'
    });
    const lastSalesOptions = [
        {
            value: 'Daily', text: "Daily"
        },
        {
            value: 'Weekly', text: "Weekly"
        },
        {
            value: 'Monthly', text: "Monthly"
        }];
    return (
        <>
            <div className="wave-wrapper">
                <img src="/assets/wave-top.svg" alt="Wave" />
            </div>
            <section className='last'>
                <div className='last_header'>
                    <div className='last_header-title'>
                        <h3>Last <span className='sale-span'>Sale</span></h3>
                    </div>
                    <div className='last_header-options'>
                        <Dropdown defaultValue={"Daily"} selection fluid options={lastSalesOptions} />
                        <div className='last_header-options-seeall'>See all</div>
                    </div>
                </div>
                <SaleCarousel
                    items={artworks}
                    isDesktop={isDesktop}
                    slidesToShow={isDesktop ? (isWide ? 3 : 2) : (isMediumXL ? 2 : 1)} />
            </section>
        </>
    );
}

export default LastSale;