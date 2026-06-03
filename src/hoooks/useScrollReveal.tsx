import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

interface Options {
    y? : number;
    duration?: number;
    stagger?: number;
    start?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const targets = element.querySelectorAll('[data-reveal]');
        const elements = targets.length ? targets : [element];

        gsap.from(elements, {
            scrollTrigger: {
                trigger: element,
                start: options.start ?? 'top 82%',
                },
                y:        options.y        ?? 30,
                opacity:  0,
                duration: options.duration ?? 0.8,
                stagger:  options.stagger  ?? 0.1,
                ease:     'power3.out',
                clearProps: 'all',
        })

        return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()) }
    }, [])

    return ref;
}