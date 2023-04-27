import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

export const useLinkDownfall =(arr)=>{
  useEffect(()=>{
    const el = arr.map(item => item.current);
    
    gsap.fromTo(el, {
      y: -500,
    }, {
      y:0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
    })
  }, [arr]);

}

export const useLineForword =(arr)=>{
  useEffect(()=>{
    const el = arr.map(item => item.current);
    
    gsap.fromTo(el, {
      width: 0,
    }, {
      width: "100%",
      duration: 2,
      delay: 1,
      ease: "power4.out",
      stagger: 0.2,
    })
  }, [arr]);

}

export const useTextUpward =(arr)=>{
  useEffect(()=>{
    const el = arr.map(item => item.current);
    
    gsap.fromTo(el, {
      y: 600,
    }, {
      y: 0,
      duration: 1.5,
      delay: 1,
      ease: "power4.out",
      stagger: 0.2,
    })
  }, [arr]);

}

export const useBoxScaling =(arr)=>{
  useEffect(()=>{
    const el = arr.map(item => item.current);
    
    gsap.fromTo(el, {
      scale: 0,
    }, {
      scale: 1,
      duration: 1,
      delay: 2.5,
      ease: "power4.out",
      stagger: 0.2,
    })
  }, [arr]);

}

export const useTitlesDownfall =(arr, trig)=>{
  useEffect(()=>{
    const el = arr.map(item => item.current);
    const trigEl = trig.current;
    
    gsap.fromTo(el, {
      y: -500,
    }, {
      y:0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger:{
        trigger: trigEl,
        start: "top center"
      }
    })
  }, [arr, trig]);

}

export const useProjectLine =(arr, trig)=>{
  useEffect(()=>{
    const el = arr;
    const trigEl = trig.current;
    
    gsap.fromTo(el, {
      width: 0,
    }, {
      width: "100%",
      duration: 1.5,
      delay: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger:{
        trigger: trigEl,
        start: "top center"
      }
    })
  }, [arr, trig]);
}
export const useProjectText =(arr, trig, delay = 1)=>{
  useEffect(()=>{
    const el = arr;
    const trigEl = trig.current;
    
    gsap.fromTo(el, {
      y: 500,
    }, {
      y: 0,
      duration: 2,
      delay: delay,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger:{
        trigger: trigEl,
        start: "top center"
      }
    })
  }, [arr, trig, delay]);
}
export const useProjectNumber =(arr, trig)=>{
  useEffect(()=>{
    const el = arr;
    const trigEl = trig.current;
    
    gsap.fromTo(el, {
      y: -500,
    }, {
      y: 0,
      duration: 1.5,
      delay: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger:{
        trigger: trigEl,
        start: "top center"
      }
    })
  }, [arr, trig]);
}
export const useProjectDate =(arr, trig, delay = 1.5)=>{
  useEffect(()=>{
    const el = arr;
    const trigEl = trig.current;
    
    gsap.fromTo(el, {
      y: 500,
    }, {
      y: 0,
      duration: 1.5,
      delay: delay,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger:{
        trigger: trigEl,
        start: "top center"
      }
    })
  }, [arr, trig, delay]);
}
export const useProjectTools =(arr, trig, delay = 2)=>{
  useEffect(()=>{
    const el = arr;
    const trigEl = trig.current;
    
    gsap.fromTo(el, {
      y: 500,
    }, {
      y: 0,
      duration: 1.5,
      delay: delay,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger:{
        trigger: trigEl,
        start: "top center"
      }
    })
  }, [arr, trig, delay]);
}