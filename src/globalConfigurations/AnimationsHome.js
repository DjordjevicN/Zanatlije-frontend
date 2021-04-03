

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// HOME PAGE ANIMATIONS
export const heroAnimation = (homeHeroText, homeHeroImage, homeAboutUs, newJobs, howToCards) => {
    gsap.fromTo(homeHeroText.current, {
        autoAlpha: 0
    }, {
        delay: .3,
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
    })
    gsap.from(homeHeroImage.current, {
        delay: .3,
        duration: .3,
        autoAlpha: 0,
        ease: 'none',
    })

    gsap.fromTo(homeAboutUs.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: homeAboutUs.current,
            start: 'top-=700',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })

    gsap.fromTo(newJobs.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: newJobs.current,
            start: 'top-=500',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })

    gsap.fromTo(howToCards.current, {
        autoAlpha: 0
    }, {
        duration: .3,
        autoAlpha: 1,
        y: -30,
        ease: 'none',
        scrollTrigger: {
            id: 1,
            trigger: howToCards.current,
            start: 'top-=500',
            end: "+=500",
            toggleActions: 'play none none reverse',
            // markers: true
        }
    })
}