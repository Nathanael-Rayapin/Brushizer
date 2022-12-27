/* COMPONENTS */
import { gsap } from 'gsap';
import { useRef } from 'react';
import './style.scss'

function CharityHead() {
    const textElement = useRef(null)
    
    return (
            <div className='charity_head'>
                <img className='charity_head_img' src='./assets/line.svg' alt='line' />
                <div className='charity_head_title' ref={textElement} >
                    CHARITY
                </div>
            </div>
    );
}

export default CharityHead;
