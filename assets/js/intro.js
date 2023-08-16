const animationOptions = {
    ease: "expo.inOut"
  };
  
 
  
  const skewInElements = (elements) => {
    const tl = gsap.timeline();
  
    tl.from(elements, {
      duration: 1,
      ease: animationOptions.ease,
      autoAlpha: 0,
      y: 40
    });
  
    return tl;
  };
  
  const fadeInElements = (elements) => {
    const tl = gsap.timeline();
  
    tl.from(elements, {
      duration: 1,
      ease: animationOptions.ease,
      y: "20px",
      autoAlpha: 0
    });
  
    return tl;
  };
  
  const master = gsap.timeline({
    paused: false,
    delay: 0.2
  });

  master
    .add(fadeInElements("#header "))
    .add(skewInElements("#banner h1,#banner p"), "-=1");
    
  

  