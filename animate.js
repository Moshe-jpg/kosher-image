const timeline = gsap.timeline({ defaults: { duration: 1 } });
let mm = gsap.matchMedia();

mm.add("(min-width: 700px)", () => {
   timeline
  .from("header", { y: "-100", ease: "power2", duration: 2 })
  .from(".main-content", { x: "-100vw", ease: "power2", duration: 2 })
  .from(".feature-products", { x: "200vw", ease: "power2", duration: 2 }, "<0")
  .from(".feature-products .prod-title", { opacity: 0, stagger: 0.5 })
  .from(".feature-products li", { x: "200vw", ease: "power2", stagger: 0.3, duration: 2 }); 
});

mm.add("(max-width: 699px)", () => {
    timeline
   .from("header", { y: "-100", ease: "bounce", duration: 1.5})
   .from(".main-content", { y: "200vh", ease: "elastic", duration: 2 })
   .from("header ul li", { opacity: 0, stagger: 0.5 });
});