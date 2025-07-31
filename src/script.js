let main = document.querySelector(".main");

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
  main.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
      duration: 0.2,
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

//* Play Button Move
function playButtonMove() {
  let videoContainer = document.querySelector(".videoContainer");
  let playButton = document.querySelector(".playButton");

  //* Button Move
  function buttonMove(dets) {
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
document.addEventListener("DOMContentLoaded", ()=>{
  let line = document.querySelector(".line");
  gsap.to(line, {
    width: "70%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-3",
      start: "top 50%"
    }
  });
})

//* Page-4

//* Line increase

document.addEventListener("DOMContentLoaded", ()=>{
  let line2 = document.querySelector(".line2");
  gsap.to(line2, {
    width: "70%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page-4",
      start: "top 50%"
    }
  });
})
