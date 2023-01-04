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
    const [message5, setMessage5] = useState("");
    const [message6, setMessage6] = useState("");

  
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);

    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    const circle4 = useRef(null);
    const circle5 = useRef(null);
    const circle6 = useRef(null);

  
    const someCallback = () => {
        setMessage1("MINT + WEBSITE");
        callback();
    };
  
    const someCallback2 = () => {
        setMessage2("CONVERTOR SHA-256");
    };

    const someCallback3 = () => {
        setMessage3("PLATFORM CHARITY");
    };

    const someCallback4 = () => {
      setMessage4("STREETWEAR + SHOP");
    };

    const someCallback5 = () => {
      setMessage5("SOCIAL PLATFORM");
    };
  
    const someCallback6 = () => {
        setMessage6("INFINITY");
        fireConfetti();
    };
  
    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(timeline4.current);
      setObserver(timeline5.current);
      setObserver(timeline6.current);

      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
      setObserver(circle4.current, someCallback4);
      setObserver(circle5.current, someCallback5);
      setObserver(circle6.current, someCallback6);
      
      window.scrollTo(0, 0);
    });
  
    return (
      <div className="road-map_wrapper">
        <div id="timeline1" ref={timeline1} className="road-map_wrapper--timeline" />
        <div className="road-map_wrapper_contain">
          <div id="circle1" ref={circle1} className="road-map_wrapper_contain--circle">
            1
          </div>
          <div className="message-left">{message1}</div>
        </div>
        <div id="timeline2" ref={timeline2} className="road-map_wrapper--timeline" />
        <div className="road-map_wrapper_contain">
          <div id="circle2" ref={circle2} className="road-map_wrapper_contain--circle">
            2
          </div>
          <div className="message-right">{message2}</div>
        </div>
        <div id="timeline3" ref={timeline3} className="road-map_wrapper--timeline" />
        <div className="road-map_wrapper_contain">
          <div id="circle3" ref={circle3} className="road-map_wrapper_contain--circle">
            3
          </div>
          <div className="message-left">{message3}</div>
        </div>
        <div id="timeline4" ref={timeline4} className="road-map_wrapper--timeline" />
        <div className="road-map_wrapper_contain">
          <div id="circle4" ref={circle4} className="road-map_wrapper_contain--circle">
            4
          </div>
          <div className="message-right">{message4}</div>
        </div>
        <div id="timeline5" ref={timeline5} className="road-map_wrapper--timeline" />
        <div className="road-map_wrapper_contain">
          <div id="circle5" ref={circle5} className="road-map_wrapper_contain--circle">
            5
          </div>
          <div className="message-left">{message5}</div>
        </div>
        <div id="timeline6" ref={timeline6} className="road-map_wrapper--timeline" />
        <div className="road-map_wrapper_contain">
          <div id="circle6" ref={circle6} className="road-map_wrapper_contain--circle">
            6
          </div>
          <div className="message-right">{message6}</div>
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
