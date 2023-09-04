import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";
import port06 from "../assets/img/port06.png";
import port07 from "../assets/img/port07.png";
import port08 from "../assets/img/port08.png";


const portText = [
    {
        num: "01",
        title: "게임 음악제작 서비스",
        desc: "HTML, CSS, JS (100%)",
        img: port01,
        code: "https://github.com/kimsangjunv1/-React-Portfolio",
        view: "https://portfoliosj-react.netlify.app",
       
    },
    {
        num: "02",
        title: "콤마존",
        desc: "HTML, CSS, JS (100%)",
        img: port02,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://portfolio-313.web.app/",
     
    },
    {
        num: "03",
        title: "KT 통합광고플랫폼 서비스",
        desc: "HTML, CSS, JS (50%)",
        img: port03,
        code: "https://github.com/smartmin2/kt",
        view: "https://portfolio-313.web.app/",
      
    },
    {
        num: "04",
        title: "FISS 서비스",
        desc: "HTML, CSS, JS (35%)",
        img: port04,
        code: "https://github.com/dlgnsrb227/portfolio-next",
        view: "https://hoongportfolio-next.netlify.app/",
       
    },
    {
        num: "05",
        title: "U2 콜라보 비디오협업플랫폼 서비스",
        desc: "HTML, CSS, JS (35%)",
        img: port05,
        code: "/",
        view: "https://junseungpark.github.io/portfolio/index3.html",
        
    },
    {
        num: "06",
        title: "캐논코리아 MPS웹",
        desc: "HTML, CSS, JS (25%)",
        img: port06,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/DavidYang/index.html",
       
    },
    {
        num: "07",
        title: "U2 Drive 서비스",
        desc: "HTML, CSS, JS (유지보수)",
        img: port07,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/TaeyongLee/index.html",
       
    },
    {
        num: "08",
        title: "ADID관리 시스템",
        desc: "HTML, CSS, JS (리뉴얼)",
        img: port08,
        code: "/",
        view: "https://webstoryboy.github.io/port2023/portfolio-student/HyunroKim/index.html",
        
    },
    
];

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
         
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                portfolio <em>퍼블리싱 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article 
                            className={`port__item p${key + 1}`} 
                            key={key} 
                            ref={(el) => (sectionsRef.current[key] = el)
                        }>
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img}  />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;