const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  let tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1.3,
      stagger: 0.2,
    })
    .from("#hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.2,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

let timeout;
let xscale = 1;
let yscale = 1;
let xprev = 0;
let yprev = 0;

function narrowCircle() {
  const circle = document.querySelector("#mini-circle");

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.7, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.7, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    // update transform with scale
    circleMouseFollower(xscale, yscale);

    // reset scale smoothly
    timeout = setTimeout(function () {
      circle.style.transform = `translate(${dets.clientX - 6}px, ${
        dets.clientY - 6
      }px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  const circle = document.querySelector("#mini-circle");
  window.addEventListener("mousemove", function (dets) {
    circle.style.transform = `translate(${dets.clientX - 6}px, ${
      dets.clientY - 6
    }px) scale(${xscale},${yscale})`;
  });
}

narrowCircle();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let rotatediff;

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    rotatediff = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, rotatediff),
    });

    gsap.to(document.querySelector("#mini-circle"), {
      width: "55px",
      height: "55px",
      opacity: 0.5,
      ease: Power1,
      innerHTML: `
      <a href="#" style="text-decoration:none; color: black; font-size:20px; font-weight:bold">
        <i class="ri-arrow-right-up-line"></i>
      </a>
    `,
    });
  });

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });

    gsap.to(document.querySelector("#mini-circle"), {
      width: "15px",
      height: "15px",
      opacity: 1,
      ease: Power1,
      innerHTML: "",
    });
  });
});
