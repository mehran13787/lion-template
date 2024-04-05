import Splide from "@splidejs/splide";
import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  var productCounter = {
    count: 0,
    incrementCounter: function () {
      if (this.count < 10) {
        return (this.count = this.count + 1);
      } else {
        return this.count;
      }
    },
    decrementCounter: function () {
      if (this.count > 0) {
        return (this.count = this.count - 1);
      } else {
        return (this.count = 0);
      }
    },
    resetCounter: function () {
      return (this.count = 0);
    },
  };

  var displayCout = document.getElementById("displayCounter");
  displayCout.innerHTML = 0;

  document.getElementById("increment").onclick = function () {
    displayCout.innerHTML = productCounter.incrementCounter();
  };
  document.getElementById("decrement").onclick = function () {
    displayCout.innerHTML = productCounter.decrementCounter();
  };

  var splideCheck = document.getElementsByClassName("splide");
  if (splideCheck.length) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // first-carousel
    var splide1 = new Splide("#first-carousel-splide", {
      type: "loop",
      perPage: 6,
      arrows: false,
      pagination: false,
      lazyLoad: "nearby",
      breakpoints: {
        1382: {
          perPage: 5,
        },
        900: {
          perPage: 4,
        },
        570: {
          perPage: 3,
        },
        470: {
          perPage: 2,
          padding: "4rem",
        },
        450: {
          perPage: 2,
          padding: "2rem",
        },
        360: {
          perPage: 2,
          padding: "0rem",
        },
      },
    });

    document
      .querySelector(".first-carousel-next")
      .addEventListener("click", (e) => {
        splide1.go("+1");
      });

    document
      .querySelector(".first-carousel-prev")
      .addEventListener("click", (e) => {
        splide1.go("-1");
      });

    splide1.mount();
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: true,
    arrows: false,
  });
  var tumbnail = new Splide("#thumbnail-carousel", {
    fixedWidth: 90,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    arrows: false,
  });

  tumbnail.mount();
  main.mount();
  main.sync(tumbnail);
});
