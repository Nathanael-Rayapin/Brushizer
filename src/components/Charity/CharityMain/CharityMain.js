/* COMPONENTS */
import './style.scss'
import { NavLink } from 'react-router-dom';

function CharityMain() {
 
    return (
            <div className='charity_main'>
                <div className='charity_main_wrapper'>
                    <div className='charity_main_wrapper_text'>
                        <h3 className='charity_main_wrapper_text--title'>2.50%</h3>
                        <p className='charity_main_wrapper_text--text'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."</p>
                        <button className='charity_main_wrapper_text--btn'><NavLink to='/signup'>Sign up</NavLink></button>
                    </div>
                    <img className='charity_main_wrapper_img' src='./assets/hands.svg' alt='hands' />
                </div>
                <div className='charity_main_suite'>
                    <h3 className='charity_main_suite--title'>The community</h3>
                    <h4 className='charity_main_suite--underTitle'>Chooses the distribution of donations</h4>
                    <div className='charity_main_suite_wrapper'>
                        <div className='charity_main_suite_wrapper_item'>
                        <NavLink to='/signup'>
                            <h5 className='charity_main_suite_wrapper_item--title'>
                                100%
                            </h5>
                            <p className='charity_main_suite_wrapper_item--text'>
                                of the distributed donations was chosen by the community.
                            </p>
                        </NavLink>
                        </div>
                        <div className='charity_main_suite_wrapper_item'>
                        <NavLink to='/signup'>
                        <h5 className='charity_main_suite_wrapper_item--title'>
                                100%
                            </h5>
                            <p className='charity_main_suite_wrapper_item--text'>
                                donors can follow the progress of their donation
                            </p>
                        </NavLink>
                        </div>
                        <div className='charity_main_suite_wrapper_item'>
                        <NavLink to='/signup'>
                        <h5 className='charity_main_suite_wrapper_item--title'>
                                100%
                            </h5>
                            <p className='charity_main_suite_wrapper_item--text'>
                                of donations will be distributed with an equity stable part.
                            </p>
                        </NavLink>
                        </div>
                    </div>
                </div>
                <div className='charity_main_how'>
                    <h3 className='charity_main_how--title'>How it works ?</h3>
                    <h4 className='charity_main_how--underTitle'>The art of helping others.</h4>
                    <div className='charity_main_how_wrapper'>
                        <div className='charity_main_how_wrapper_bigItem'>
                            <h5 className='charity_main_how_wrapper_bigItem--title'>
                                NFT royalties
                            </h5>
                            <p className='charity_main_how_wrapper_bigItem--text'>
                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                            </p>
                            <h5 className='charity_main_how_wrapper_bigItem--title'>
                                Direct donation
                            </h5>
                            <p className='charity_main_how_wrapper_bigItem--text'>
                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                            </p>
                            <h5 className='charity_main_how_wrapper_bigItem--title'>
                                NFT charity
                            </h5>
                            <p className='charity_main_how_wrapper_bigItem--text'>
                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                            </p>
                        </div>
                        <div className='charity_main_how_wrapper_item'>
                            <h5 className='charity_main_how_wrapper_item--title'>
                                Free Plateform
                            </h5>
                            <p className='charity_main_how_wrapper_item--text'>
                            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                            <button className='charity_main_how_wrapper_item--btn'><NavLink to='/signup'>Try it now</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CharityMain;
