//IIFE: immediately invoked function expression
(function () {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
})();

let cursor = document.querySelector(".cursor");

let main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  // console.log(dets);
});

document
  .querySelector(".page1 video")
  .addEventListener("mouseenter", function () {
    cursor.style.width = `${70}px`;
    cursor.style.height = `${20}px`;
    cursor.style.borderRadius = `${10}px`;
  });
document
  .querySelector(".page1 video")
  .addEventListener("mouseleave", function () {
    cursor.style.width = `${15}px`;
    cursor.style.height = `${15}px`;
    cursor.style.borderRadius = `${50}%`;
  });

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h2",
    scroller: ".main",
    start: "top 25%",
    end: "top 0",
    // markers: true,
    scrub: 3,
  },
});
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    scroller: ".main",
    start: "top 50%",
    end: "top 20%",
    // markers: true,
    scrub: 3,
  },
});
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -75%",
    end: "top -80%",
    // markers: true,
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -80,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);

tl1.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
tl2.to(".main", {
  backgroundColor: "#dffffbff",
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -360%",
    end: "top -380%",
    // markers: true,
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#0f0d0d",
});

let boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let imgURL = elem.getAttribute("image-data");
    cursor.style.height = "300px";
    cursor.style.width = "350px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${imgURL})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    cursor.style.height = "15px";
    cursor.style.width = "15px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`;
  });
});

let nav = document.querySelector("nav");
var h4 = document.querySelectorAll(".nav-p2 h4");
var purple = document.querySelector(".purple");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let text = elem.textContent;
    console.log();

    purple.style.opacity = "1";
    purple.style.display = "flex";
    purple.style.alignItems = "center";
    purple.style.justifyContent = "center";
    purple.innerHTML = `<marquee style="font-size:200px; align-self: center; color: #111" behaviour="scroll" scrollamount= "30" direction="left"> ${text.repeat(
      10
    )}</marquee>`;
  });
  nav.addEventListener("mouseleave", function () {
    purple.innerHTML = "";
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});
