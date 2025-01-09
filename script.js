// GSAP Animation for the Hero Section
gsap.from(".hero-text", { 
    opacity: 0, 
    y: -50, 
    duration: 1, 
    ease: "power2.out" 
});
gsap.from(".hero-image", { 
    opacity: 0, 
    x: 50, 
    duration: 1, 
    delay: 0.5, 
    ease: "power2.out" 
});

// Animation for Menu Items on Scroll
gsap.from(".menu-item", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".menu-items",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

// Footer Social Media Animation
gsap.from(".social-media a", {
    opacity: 0,
    x: -30,
    stagger: 0.3,
    duration: 1,
    delay: 1,
    ease: "power2.out"
});
