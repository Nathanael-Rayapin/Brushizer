/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Form } from 'semantic-ui-react';

import './style.scss'

function Contact() {

    return (
        <>
            <Header />
            <section className='contact_section'>
                <div className='contact_section_title'><span>Contact</span> Us</div>

                <div className='contact_wrapper'>
                    <div className='signup_form'>
                        <div className='signup_form-container'>
                            <Form className='form'>
                                <Form.Field>
                                    <label className='form-label'>Pseudo</label>
                                    <input
                                        name='pseudo'
                                        className="form-pseudo"
                                        type="text"
                                        placeholder='Your pseudo'>
                                    </input>
                                </Form.Field>
                                <Form.Field>
                                    <label>Email address</label>
                                    <input
                                        name='email'
                                        className="form-email"
                                        type="email"
                                        placeholder='example@example.com'
                                    >
                                    </input>
                                </Form.Field>
                                <Form.Field>
                                    <label>Message</label>
                                    <textarea
                                        maxLength={120}
                                        minLength={2}
                                        placeholder='Write here your message ...'
                                        className='form-textarea'>
                                    </textarea>
                                </Form.Field>
                                <div className='message'></div>
                                <Button type='submit' className='button-submit-contact' >Send Message</Button>
                            </Form>
                        </div>
                    </div>
                </div> 
            </section>
            <Footer />
        </>
    );
}

export default Contact;
