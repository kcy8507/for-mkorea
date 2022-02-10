console.log("hi");

$(document).ready(function () {
  $("a").smoothScroll();
});

new daum.roughmap.Lander({
  timestamp: "1634509338788",
  key: "27ped",
  // "mapWidth": "1516",
  // "mapHeight": "418"
}).render();
new daum.roughmap.Lander({
  timestamp: "1638322798190",
  key: "289wm",
  // "mapWidth" : "640",
  // "mapHeight" : "360"
}).render();
let width_size;

// if (width_size < 1200)
const headerEl = document.querySelector("header");
const menufontEl = document.querySelectorAll("header .main-menu li a");
const logoEl = document.querySelector(".logo img");
const hamBtn = document.querySelector(".hamburger-btn");
const sideMenu = document.querySelector(".side_bg");
const sideCancelBtn = document.querySelector(".side_cancelBtn");

hamBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

sideCancelBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

window.addEventListener(
  "resize",
  function () {
    console.log("Resizing...");
    width_size = window.outerWidth;
    console.log(width_size);
    if (width_size < 1200) {
      gsap.to(headerEl, 0.6, {
        background: "transparent",
        boxShadow: "none",
      });
      gsap.to(menufontEl, 0.6, {
        color: "#fff",
      });
      gsap.set(logoEl, { attr: { src: "./images/for-m_logo.png" } });
    }
  },
  true
);
width_size = window.outerWidth;
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (width_size > 1200) {
      if (window.scrollY > 500) {
        gsap.to(headerEl, 0.6, {
          background: "#fff",
          boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.1)",
        });
        gsap.to(menufontEl, 0.6, {
          color: "#232323",
        });
        gsap.set(logoEl, { attr: { src: "./images/for-m_logo-b.png" } });
      } else {
        gsap.to(headerEl, 0.6, {
          background: "transparent",
          boxShadow: "none",
        });
        gsap.to(menufontEl, 0.6, {
          color: "#fff",
        });
        gsap.set(logoEl, { attr: { src: "./images/for-m_logo.png" } });
      }
    } else {
      if (window.scrollY > 500) {
        gsap.to(headerEl, 0.6, {
          background: "#fff",
          boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.1)",
        });
        gsap.to(menufontEl, 0.6, {
          color: "#232323",
        });
        gsap.set(logoEl, { attr: { src: "./images/for-m_logo-b.png" } });
        // gsap.set(hamBtn, { attr: { src: "./images/hamburger-b.png" } });
        gsap.set(hamBtn, {
          css: { backgroundImage: "url(./images/hamburger-b.png)" },
        });
      } else {
        gsap.to(headerEl, 0.6, {
          background: "transparent",
          boxShadow: "none",
        });
        gsap.to(menufontEl, 0.6, {
          color: "#fff",
        });
        gsap.set(logoEl, { attr: { src: "./images/for-m_logo.png" } });
        gsap.set(hamBtn, {
          css: { backgroundImage: "url(./images/hamburger.png)" },
        });
      }
    }
  }, 300)
);
