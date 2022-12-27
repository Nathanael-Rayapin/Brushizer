import './style.scss'
import { Icon, Dropdown } from 'semantic-ui-react';

function Footer() {

    const languageOption = [
        {
            value: 'US/EN', text: "US/EN"
        },
        {
            value: 'FR', text: "FR"
        }
    ];

    return (
        <>
            <div className="wave-footer">
                <img src="/assets/wave-top.svg" alt="Wave" />
            </div>
            <footer className='footer'>
                <div className='footer_list'>
                    <div className="footer_list_menu">
                        <ul>
                            <h3 className="footer_list_menu-title">About us</h3>
                            <li className="footer_list_menu-link">Career</li>
                            <li className="footer_list_menu-link">Contact Business</li>
                            <li className="footer_list_menu-link">Blog</li>
                            <li className="footer_list_menu-link">Terms</li>
                            <li className="footer_list_menu-link" >Privacy</li>
                            <li className="footer_list_menu-link" >Security</li>
                        </ul>
                    </div>
                    <div className="footer_list_menu">
                        <ul>
                            <h3 className="footer_list_menu-title">Produits</h3>
                            <li className="footer_list_menu-link">Exchange</li>
                            <li className="footer_list_menu-link">NFT</li>
                            <li className="footer_list_menu-link">Charity</li>
                            <li className="footer_list_menu-link">Top 100</li>
                            <li className="footer_list_menu-link">Top Country</li>
                            <li className="footer_list_menu-link">Best Sales</li>
                        </ul>
                    </div>
                    <div className="footer_list_menu">
                        <ul>
                            <h3 className="footer_list_menu-title">Assistance</h3>
                            <li className="footer_list_menu-link">Help</li>
                            <li className="footer_list_menu-link">Account verification</li>
                            <li className="footer_list_menu-link">Fees transactions</li>
                            <li className="footer_list_menu-link">Give your opinion</li>
                        </ul>
                    </div>
                    <div className="footer_list_menu">
                        <ul>
                            <h3 className="footer_list_menu-title">Moyens de Paiement</h3>
                            <li className="footer_list_menu-link">EUR / USD</li>
                            <li className="footer_list_menu-link">SOLANA</li>
                            <li className="footer_list_menu-link">Ledger</li>
                        </ul>
                    </div>
                </div>

                <div className='footer_brand'>
                    <div className='footer_brand-logo'>BRUSHIZER.</div>
                    <a className='footer_brand-twitter' href="https://www.twitter.com/BRUSHIZER">
                        <Icon className='footer_brand-twitter-i' size='large' name="twitter" /></a>
                </div>
                <div className='footer_reserve'>
                    <p className='footer_reserve-text'>Copyright © Brushizer All Rights reserved, 2023.</p>
                    <Dropdown className='footer_reserve-language' defaultValue={"US/EN"} selection fluid options={languageOption} />
                </div>
            </footer>
        </>

    );
}

export default Footer;
