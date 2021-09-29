import './Home.scss'
import {useEffect, useRef} from 'react'
import { init } from 'ityped'

export default function Home({removeActive}) {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Designer', 'Developer', 'Content Creator' ]
        })
    }, [])

    return (
        <div className="home" id="home" onClick={removeActive}>
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi! there, I'm</h2>
                    <h1>Musaiyib Yakubu Usman</h1>
                    <h3>Freelancer <span ref={textRef}></span></h3>
                    <a href="#contact" className="hireMeBtn">
                        <button className="btn">Hire Me</button>
                    </a>
                    <a href="#projects" className="a">
                        <img src="assets/down.png" alt="downArrow" />
                    </a>
                </div>
            </div>
        </div>
    )
}