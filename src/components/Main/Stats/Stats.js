import './style.scss'

function Stats() {
    return (
        <section className='stats'>
            <ul className='stats_list'>
                <li className='stats_list-item'>
                    <div className='number_wrapper'>
                        <p className='number_wrapper-text'>1000</p>
                        <span className='number_wrapper-shape'>¤</span>
                    </div>
                    <h4 className='stats_list-item-title'>Brushizers</h4>
                </li>
                <li className='stats_list-item'>
                    <div className='number_wrapper'>
                        <p className='number_wrapper-text'>80K</p>
                        <span className='number_wrapper-shape'>$</span>
                    </div>
                    <h4 className='stats_list-item-title'>Sales</h4>
                </li>
                <li className='stats_list-item'>
                    <div className='number_wrapper'>
                        <p className='number_wrapper-text'>459</p>
                        <span className='number_wrapper-shape'>+</span>
                    </div>
                    <h4 className='stats_list-item-title'>Transactions</h4>
                </li>
            </ul>
        </section>
    );
}

export default Stats;