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

  //* image-show on hover
  let imageView = document.querySelector(".image-show");
  let viewImage = document.querySelector(".view-image");

  // imageView.addEventListener("mouseenter", (dets) => {
  //   viewImage.style.display = "block";
  //   gsap.to(viewImage, {
  //     left: dets.x,
  //   });
  // });
}
page1();

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

let videoContainer = document.querySelector(".videoContainer");
videoContainer.addEventListener("mouseenter", (dets) => {
    gsap.to("playButton", {
      right: dets.x,
      top: dets.y,
    });
  });