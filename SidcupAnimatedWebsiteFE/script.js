let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 10 + "px";
  cursor.style.top = dets.y - 10 + "px";
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    // cursor.style.width = "70px";
    // cursor.style.height = "70px";
    cursor.style.border = "0.01px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    // cursor.style.width = "20px";
    // cursor.style.height = "20px";
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#95c11e";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "85px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1, // speed of arrival
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -40%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  // stagger: 0.4, //one by one arrive
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -40,
  x: -40,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // marker: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 3,
  },
});
gsap.to("#colon2", {
  y: -40,
  x: -40,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // marker: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 3,
  },
});

gsap.from("#page-4 h1", {
  y: 20,
  scrollTrigger: {
    trigger: "#page-4 h1",
    scroller: "body",
    // marker: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
