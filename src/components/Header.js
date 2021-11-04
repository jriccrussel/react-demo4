import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import imgOne from '../assets/img/menu-img-one.jpg'
import imgTwo from '../assets/img/menu-img-two.jpg'
import imgThree from '../assets/img/menu-img-three.jpg'
import imgFour from '../assets/img/menu-img-four.jpg'
import gsap from 'gsap'
import { TimelineMax } from 'gsap/gsap-core'


const data = [
    {img: imgOne, name: "Home", path: "/",},
    {img: imgTwo, name: "Showcase", path: "/",},
    {img: imgThree, name: "About", path: "/",},
    {img: imgFour, name: "Contact", path: "/",},
]

const Header = () => {

    useEffect(() => {

        // let tl = new TimelineMax({paused: true})
        let tl = gsap.timeline({paused: true})
        
        tl.to(".nav-container", 1, {
            left: 0,
            ease: "expo.easeInOut",
        })

        tl.staggerFrom(".menu > div", 0.8, {
            y: 100,
            opacity: 0,
            ease: "expo.easeInOut",
        }, "0.1", "-=0.4")

        tl.staggerFrom(".socials", 0.8, {
            y: 100,
            opacity: 0,
            ease: "expo.easeInOut",
        }, "0.4", "-=0.6")

        tl.reverse()

        document.querySelector(".menu-open").addEventListener("click", () => tl.reversed(!tl.reversed()))

        document.querySelector(".menu-close").addEventListener("click", () => tl.reversed(!tl.reversed()))

    }, [])

    return (
        <>
            <div className="menu-open">menu</div>

            <div className="nav-container">
                <div className="menu-close">close</div>
                <div className="socials">
                    <span>facebook</span>
                    <span>instagram</span>
                </div>

                <div className="menu">
                    {data.map((item, index) => {
                        const {img, name, path} = item
                        return (
                            <div className="menu__item" key={index}>
                                <Link className="menu__item-link" to={path}>{name}</Link>
                                <img className="menu__item-img" src={img} alt="" />
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>{name} - {name} - {name} - {name} - {name} - Home - Home</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Header
