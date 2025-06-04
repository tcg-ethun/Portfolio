       
       gsap.registerPlugin(ScrollTrigger);
        class ScrollAnimator {
            constructor() {
                this.init();
            }

            init() {
                this.animateFadeUp();
                this.animateScale();
                  this.animateFadeLeft();
                this.animateFadeRight();
                   this.animateScale();
                this.animateRotate();
                this.animateSlideDown();
            }
  // Fade Left Animation
            animateFadeLeft() {
                gsap.utils.toArray('.animate-fade-left').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    
                    gsap.to(element, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }
   // Scale Animation
            animateScale() {
                gsap.utils.toArray('.animate-scale').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    
                    gsap.to(element, {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        delay: delay,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }

            // Rotate Animation
            animateRotate() {
                gsap.utils.toArray('.animate-rotate').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    
                    gsap.to(element, {
                        opacity: 1,
                        rotation: 0,
                        duration: 1,
                        delay: delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }

            // Slide Down Animation
            animateSlideDown() {
                gsap.utils.toArray('.animate-slide-down').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }
            // Fade Right Animation
            animateFadeRight() {
                gsap.utils.toArray('.animate-fade-right').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    
                    gsap.to(element, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }

            // Fade Up Animation
            animateFadeUp() {
                gsap.utils.toArray('.animate-fade-up').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            end: "bottom 30%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }

              // Scale Animation
            animateScale() {
                gsap.utils.toArray('.animate-scale').forEach(element => {
                    const delay = element.dataset.delay || 0;
                    
                    gsap.to(element, {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        delay: delay,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }

            customAnimate(selector, fromProps, toProps, triggerOptions = {}) {
                gsap.utils.toArray(selector).forEach(element => {
                    gsap.set(element, fromProps);
                    gsap.to(element, {
                        ...toProps,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                            ...triggerOptions
                        }
                    });
                });
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const animator = new ScrollAnimator();
        });
        // Utility function to add animation to any element
        function addScrollAnimation(selector, animationType = 'fade-up', options = {}) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.classList.add(`animate-${animationType}`));
            ScrollTrigger.refresh();
        }