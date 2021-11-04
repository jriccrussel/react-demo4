import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { TweenLite } from 'gsap/gsap-core'

const Content = () => {

    useEffect(() => {
        let counter = document.querySelector(".percent")

        // let tl = new TweenLite()
        // let tl = gsap.timeline()

        TweenLite.set(counter, {
            xPercent: -5,
            yPercent: -5,
        });

        window.addEventListener("mousemove", moveCounter);

        function moveCounter(e) {
            TweenLite.to(counter, 0.5, {
                x: e.clientX,
                y: e.clientY,
            });
        }

        // Mouse Move Setup
        // let moveCounter = (e) => {
        //     TweenLite.set(counter, {
        //         xPercent: -5,
        //         yPercent: -5,
        //     })
        // }

        let progress = () => {
            let windowScrollTop = document.documentElement.scrollTop
            let docHeight = document.documentElement.offsetHeight   
            let windowHeight = window.innerHeight
            let progress = (windowScrollTop / (docHeight - windowHeight)) * 100

            let bgColor = progress > 99 ? "#fff" : "#fff"
            let txtColor = progress > 99 ? "#fff" : "#333"

            // document.querySelector("h1").text(Math.round(progress) + "%").css({ color: $txtColor })

            // document.querySelector(".fill").text(Math.round(progress) + "%").css({ color: $bgColor })      
            
            let text = document.querySelector("h1")
            let fill = document.querySelector(".fill")

            document.querySelector("h1").innerHTML = Math.round(progress) + "%" 
            document.querySelector("h1").style.color = bgColor
            
            document.querySelector(".fill").innerHTML = Math.round(progress) + "%"     
            document.querySelector(".fill").style.color = txtColor
            
        }

        progress()

        document.addEventListener("scroll", progress)

    }, [])

    return (
        <>
            <div className="percent">
                <div className="fill"></div>
                <div className="counter"><h1></h1></div>
            </div>
            <div className="container">
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus enim
                        dolorem quod asperiores quam. Itaque obcaecati blanditiis ut. Nobis vel illo
                        amet fugiat rerum distinctio placeat ratione et! Adipisci voluptates est nulla,
                        nostrum nesciunt nisi placeat recusandae! Consequatur, rem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, minima accusamus
                        odit voluptas cumque et maxime. Non nam minima tempora nemo assumenda fugit
                        illum repellendus facilis. Placeat possimus tempora sapiente, pariatur nisi rem
                        voluptatibus quaerat nulla, dolorem sunt maiores, itaque illum nam neque!
                        Inventore optio repellat fugit vel odit ea.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit inventore quam
                        est, illo rem voluptatem neque incidunt quos eos? Quis ex minima quam autem et
                        odit at dolores officia modi.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Content


