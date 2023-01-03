import './style.scss';
import { Icon } from 'semantic-ui-react';


function Convertor() {
    return (
        <>
            <section class="convertor">
                <div class="convertor_ads">
                    
                </div>

                <div class="convertor_decrypt">
                    <div class="convertor_decrypt--title">Convertor</div>
                    <div class="convertor_decrypt--subtitle">Find the sentence behind each Brushizer</div>
                    <form class="convertor_decrypt_form" action="" method="post">
                        <div class="convertor_decrypt_form_number">
                            <h3 className='convertor_decrypt_form_number--title' >Enter the number here</h3>
                            <div class="convertor_decrypt_form_number_zone">
                                <svg width="80" height="63" viewBox="0 0 140 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M67.3738 132.568L67.3738 128.068L67.3738 128.068L67.3738 132.568ZM137.858 135.75C139.616 133.993 139.616 131.143 137.858 129.386L109.22 100.748C107.463 98.9909 104.614 98.9909 102.856 100.748C101.099 102.506 101.099 105.355 102.856 107.112L128.312 132.568L102.856 158.024C101.099 159.781 101.099 162.631 102.856 164.388C104.614 166.145 107.463 166.145 109.22 164.388L137.858 135.75ZM4.80572 70L9.30572 70L9.30572 70L4.80572 70ZM67.3738 137.068L134.676 137.068L134.676 128.068L67.3738 128.068L67.3738 137.068ZM0.305722 7.45108e-05L0.305716 70L9.30572 70L9.30572 7.53132e-05L0.305722 7.45108e-05ZM67.3738 128.068C35.3037 128.068 9.30571 102.07 9.30572 70L0.305716 70C0.30571 107.041 30.3331 137.068 67.3738 137.068L67.3738 128.068Z" fill=""/>
                                    </svg>
                                <div class="convertor_decrypt_form_number_zone_exemple">
                                    <p>Example : #122</p>
                                    <input class="convertor_decrypt_form_number_zone--input" type="text" name="number-code" id="number-code" placeholder="# ..." value="" required />
                                </div>
                                
                            </div>
                        
                        </div>
                        <div class="convertor_decrypt_form_or">
                            <span>OR</span>
                        </div>

                        <div class="convertor_decrypt_form_hash">
                            <h3>Enter the hash code here</h3>
                                <h4>Where can I find the hash code ?</h4>
                            
                        <div class="convertor_decrypt_form_input">
                                <div class="convertor_decrypt_form_input_example">
                                    <p>Example : 5ed6f778...</p>
                                    <input class="convertor_decrypt_form_input_example--input" type="text" name="hash-code" id="hash-code" placeholder="Paste here ..." value="" required />
                                </div>

                                <svg width="80" height="63" viewBox="0 0 140 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M67.3738 132.568L67.3738 128.068L67.3738 128.068L67.3738 132.568ZM137.858 135.75C139.616 133.993 139.616 131.143 137.858 129.386L109.22 100.748C107.463 98.9909 104.614 98.9909 102.856 100.748C101.099 102.506 101.099 105.355 102.856 107.112L128.312 132.568L102.856 158.024C101.099 159.781 101.099 162.631 102.856 164.388C104.614 166.145 107.463 166.145 109.22 164.388L137.858 135.75ZM4.80572 70L9.30572 70L9.30572 70L4.80572 70ZM67.3738 137.068L134.676 137.068L134.676 128.068L67.3738 128.068L67.3738 137.068ZM0.305722 7.45108e-05L0.305716 70L9.30572 70L9.30572 7.53132e-05L0.305722 7.45108e-05ZM67.3738 128.068C35.3037 128.068 9.30571 102.07 9.30572 70L0.305716 70C0.30571 107.041 30.3331 137.068 67.3738 137.068L67.3738 128.068Z" fill=""/>
                                </svg>
                                
                            </div>
                        </div>
                    </form>
                    <button class="convertor_btn" type="submit">
                    
                    <Icon name='arrow alternate circle left outline' size='large' className='convertor_btn--i_left'/>
                        Convert it
                    <Icon name='arrow alternate circle right outline' size='large' className='convertor_btn--i_right'/>
                    </button>
                </div>
            </section>
        </>

    );
}

export default Convertor;
