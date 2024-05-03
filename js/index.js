window.onload = function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;

    const swiper4 = new Swiper(".card4-swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiperpagination1',
            type: 'bullets',
            clickable: true
        },

    });
    const swiper6 = new Swiper(".card6-swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiperpagination2',
            type: 'bullets',
            clickable: true
        },

    });
    const swiper8 = new Swiper(".card8-swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiperpagination3',
            type: 'bullets',
            clickable: true
        },

    });
    const swiper10 = new Swiper(".card10-swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiperpagination4',
            type: 'bullets',
            clickable: true
        },

    });
    const swiper14 = new Swiper(".card14-swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiperpagination5',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            prevEl: ".prev",
            nextEl: ".next"
        },
    });

    function c1ScrollAni() {
        let lineTl = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none restart none",
                trigger: '.card1',
                start: "-5% top",
                end: 'center top',
            }
        });
        lineTl.to(".js-line_mask_2_1", { strokeDashoffset: 0, duration: 1, })
            .to(".js-line_mask_2_2", { strokeDashoffset: 0, duration: 1, }, '<0.5')
    }
    c1ScrollAni();

    // function c2ScrollAni() {
    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             toggleActions: "play none restart reverse",
    //             trigger: '.card2',
    //             start: "-10% top",
    //             end: 'center',
    //         }
    //     });

    //     tl.to(".js-line_mask_2_1", { strokeDashoffset: 0, duration: 1, })
    // }
    // c2ScrollAni();

    function c5ScrollAni() {
        let lineTl = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none restart reverse",
                trigger: '.card5',
                start: "-30% top",
                end: 'center',
            }
        });
        lineTl
            .to(".c5-line-mask_path", { strokeDashoffset: 0, duration: 0.5, })
            .to(".c5-2-line-mask_path", { strokeDashoffset: 0, duration: 0.6, }, '<0.3')

    }
    c5ScrollAni();

    function c7ScrollAni() {
        let lineTl = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none restart reverse",
                trigger: '.card7',
                start: "-20% top",
                end: '60%',
            }
        });
        lineTl
            .to(".c7-line2-front-mask1", { strokeDashoffset: 0, duration: 1, })
            .to(".c7-line2-back-mask1", { strokeDashoffset: 0, duration: 1, }, '<0.3')
    }
    c7ScrollAni();

    function c9ScrollAni() {
        let lineTl = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none restart reverse",
                trigger: '.card9',
                start: "-20% top",
                end: '60%',
            }
        });
        lineTl
            .to(".c9-line-mask_path", { strokeDashoffset: 0, duration: 0.8, })
            .to(".c9-line-mask2_path", { strokeDashoffset: 0, duration: 0.7, }, '<0.4')
    }
    c9ScrollAni();

    function c13ScrollAni() {
        let lineTl = gsap.timeline({
            scrollTrigger: {
                toggleActions: "play none restart reverse",
                trigger: '.card13',
                start: "-20% top",
                end: '60%',
            }
        });
        lineTl
            .to(".c13-line2-front-mask1", { strokeDashoffset: 0, duration: 1, })
            .to(".c13-line2-back-mask1", { strokeDashoffset: 0, duration: 1, }, '<0.3')
    }
    c13ScrollAni();

}
