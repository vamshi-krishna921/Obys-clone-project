let main = document.querySelector(".main");
document.addEventListener("DOMContentLoaded", () => {
  LocomotiveScroll();
});

//*Locomotive
function initLocomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  // Sync with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
document.addEventListener("DOMContentLoaded", initLocomotiveScroll);

//* Loader animation
function loaderAnimation() {
  let tl = gsap.timeline();

  tl.from(".loaderWords", {
    y: 100,
    stagger: 0.3,
  });
  tl.from(".counterDiv", {
    y: 100,
    onStart: function () {
      let counter = document.querySelector(".counter");
      let count = 0;
      let clearCounter = setInterval(() => {
        if (count == 100) {
          clearInterval(clearCounter);
        } else {
          count++;
          counter.textContent = count;
        }
      }, 25);
    },
  });
  tl.to(".loader", {
    y: -1200,
    duration: 1,
    delay: 2.3,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
    },
  });
}
loaderAnimation();

//* Cursor animation
function cursorAnimation() {
  window.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
      duration: 0.2,
      ease: "power2.out",
    });
  });
}
cursorAnimation();

//*Page-1
function page1() {
  //* nav magnet effect
  Shery.makeMagnet("nav ul li,svg", {});

  let mainText = document.querySelectorAll(".main-text");
  //* Main-text animation
  gsap.from(mainText, {
    y: 100,
    stagger: 0.1,
  });
}
page1();

//* image-show on hover

function imageMoveOnHover() {
  let imageView = document.querySelector(".image-show");
  let viewImage = document.querySelector(".view-image");
  //* ImageMove
  function imageMove(dets) {
    gsap.to(viewImage, {
      display: "inline-block",
      x: dets.offsetX,
      opacity: 1,
    });
  }

  imageView.addEventListener("mouseenter", () => {
    imageView.classList.remove("overflow-hidden");
    imageView.addEventListener("mousemove", imageMove);
  });
  imageView.addEventListener("mouseleave", () => {
    imageView.removeEventListener("mousemove", imageMove);
    gsap.to(viewImage, {
      opacity: 0,
      top: "-200%",
      left: "10%",
    });
  });
}
imageMoveOnHover();

//* Page-2

//* Video
function playVideo() {
  let playButton = document.querySelector(".playButton");
  let video = document.querySelector(".video");
  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}
playVideo();
//*Mobile video play
let videoContainer = document.querySelector(".videoContainer");
let video = document.querySelector(".video");
videoContainer.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

//* Play Button Move
function playButtonMove() {
  let videoContainer = document.querySelector(".videoContainer");
  let playButton = document.querySelector(".playButton");

  //* Button Move
  function buttonMove(dets) {
    let cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
    gsap.to(playButton, {
      left: dets.offsetX,
      top: dets.offsetY,
      ease: "power2.out",
    });
  }

  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.addEventListener("mousemove", buttonMove);
  });
  videoContainer.addEventListener("mouseleave", () => {
    videoContainer.removeEventListener("mousemove", buttonMove);
    let cursor = document.querySelector(".cursor");
    cursor.style.display = "block";
    gsap.to(playButton, {
      left: "75%",
      top: "-13%",
      ease: "power2.out",
    });
  });
}
playButtonMove();

//* Page-3

//* Line Increase
document.addEventListener("DOMContentLoaded", () => {
  let line = document.querySelector(".line");
  gsap.to(line, {
    width: "70%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-3",
      scroller: ".main",
      start: "top 50%",
    },
  });
});

//* Shery Js Image on hover
function imageShery() {
  Shery.imageEffect(".image-div", {
    style: 4,
    config: {
      uColor: { value: false },
      uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
      uAmplitude: { value: 1.5, range: [0, 5] },
      uFrequency: { value: 3.5, range: [0, 10] },
      geoVertex: { range: [1, 64], value: 32 },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.43, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}
imageShery();

//* Page-4

//* Line increase

document.addEventListener("DOMContentLoaded", () => {
  let line2 = document.querySelector(".line2");
  gsap.to(line2, {
    width: "70%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-4",
      scroller: ".main",
      start: "top 50%",
    },
  });
});

//* Page-5

//* Line increase
document.addEventListener("DOMContentLoaded", () => {
  let line3 = document.querySelector(".line3");
  gsap.to(line3, {
    width: "70%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-4",
      scroller: ".main",
      start: "top 50%",
    },
  });
});
//* page-6

//* Line increase
document.addEventListener("DOMContentLoaded", () => {
  let line4 = document.querySelector(".line4");
  gsap.to(line4, {
    width: "70%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-6",
      scroller: ".main",
      start: "top 50%",
    },
  });
});

//* Textillate js code on hover
let hoverText = document.querySelector(".hover-font");

$(hoverText).textillate({
  autoStart: false, // Don't auto-play on load
  in: {
    effect: 'fadeIn'
  }
});
$(hoverText).textillate('in');
hoverText.addEventListener("mouseenter", () => {
  hoverText.classList.add("text-stroke");

  //* Restart the animation from the beginning
  $(hoverText).textillate('stop');
  $(hoverText).textillate('start');
});

hoverText.addEventListener("mouseleave", () => {
  hoverText.classList.remove("text-stroke");
});