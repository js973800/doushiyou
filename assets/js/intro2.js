const animationOptions1 = {
    ease: "expo.inOut"
  };
  
  const introAnimation = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: animationOptions1.ease,
        duration: 1
      }
    });
  
    tl.to(".intro__title", {
      duration: 0.4,
      y: 0,
      autoAlpha: 1,
      delay: 0.5
    })
      
      .to(".intro__title", {
        duration: 0.4,
        y: -60,
        autoAlpha: 0
      })
      .to(".intro", {
        y: "-100%"
      });
  
    return tl;
  };
  const master2 = gsap.timeline({
    paused: false,
    delay: 0.2
  });
  master2
  .add(introAnimation());