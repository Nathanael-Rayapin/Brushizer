/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./Confetti";
import { Icon } from 'semantic-ui-react'

import './style.scss'

const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [message4, setMessage4] = useState("");

  
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);

    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);

  
    const someCallback = () => {
        setMessage1("MINT + WEBSITE");
        callback();
    };
  
    const someCallback2 = () => {
        setMessage2("PLATFORM CHARITY");
    };

    const someCallback3 = () => {
        setMessage3("STREETWEAR + SHOP");
    };
  
    const someCallback4 = () => {
        setMessage4("INFINITY");
        fireConfetti();
    };
  
    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(timeline4.current);

      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
      setObserver(circle4.current, someCallback4);

    }, []);
  
    return (
      <div className="wrapper">
        <div id="timeline1" ref={timeline1} className="timeline" />
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            1
          </div>
          <div className="message-left">{message1}</div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            2
          </div>
          <div className="message-right">{message2}</div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
            3
          </div>
          <div className="message-left">{message3}</div>
        </div>
        <div id="timeline4" ref={timeline4} className="timeline" />
        <div className="circleWrapper">
          <div id="circle4" ref={circle4} className="circle">
            4
          </div>
          <div className="message-right">{message4}</div>
        </div>
      </div>
    );
  };

function RoadMap() {

    const [message] = useState("");

    const onCallback = () => {
    };
    return (
        <>
            <Header />
            <section className='road-map'>
                    <div className='road-map_top'>
                        <h2 className="road-map_top--title">ROADMAP BRUSHIZER</h2>
                        <span className="road-map_top--scroll"><Icon name='angle double down' size='small' /> Scroll Down <Icon name='angle double down' size='small' /></span>
                    </div>
                    
                    <TimelineObserver
                        initialColor="#f5efef"
                        fillColor="#2c2a2b"
                        handleObserve={(setObserver) => (
                        <Timeline
                            callback={onCallback}
                            className="timeline"
                            setObserver={setObserver}/>
                            )}
                        />
                    <div>{message}</div>
            </section>
            <Footer />
        </>
    );
}

export default RoadMap;
