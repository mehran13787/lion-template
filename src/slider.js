import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  var splideCheck = document.getElementsByClassName("splide");
  if (splideCheck.length) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // zero-carousel
    var splide0 = new Splide("#zero-carousel-splide", {
      type: "loop",
      perPage: 1,
      arrows: false,
      autoplay: true,
      lazyLoad: "nearby",
    });

    splide0.mount();

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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // second-carousel
    var splide2 = new Splide("#second-carousel-splide", {
      type: "loop",
      perPage: 4,
      arrows: false,
      pagination: false,
      lazyLoad: "nearby",
      breakpoints: {
        1400: {
          perPage: 3,
          padding: "2rem",
        },
        1100: {
          perPage: 2,
          padding: "2rem",
        },
        569: {
          perPage: 2,
          padding: "0rem",
        },
        410: {
          perPage: 1,
          padding: "5rem",
        },
        390: {
          perPage: 1,
          padding: "3.5rem",
        },
      },
    });

    document
      .querySelector(".second-carousel-next")
      .addEventListener("click", (e) => {
        splide2.go("+1");
      });

    document
      .querySelector(".second-carousel-prev")
      .addEventListener("click", (e) => {
        splide2.go("-1");
      });

    splide2.mount();

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // third-carousel
    var splide3 = new Splide("#third-carousel-splide", {
      type: "loop",
      perPage: 7,
      arrows: false,
      pagination: false,
      lazyLoad: "nearby",
      padding: "1rem",
      breakpoints: {
        900: {
          perPage: 5,
        },
        700: {
          perPage: 4,
        },
        570: {
          perPage: 3,
        },
        470: {
          perPage: 2,
        },
        360: {
          perPage: 1,
        },
      },
    });

    document
      .querySelector(".third-carousel-next")
      .addEventListener("click", (e) => {
        splide3.go("+1");
      });

    document
      .querySelector(".third-carousel-prev")
      .addEventListener("click", (e) => {
        splide3.go("-1");
      });

    splide3.mount();

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // fourth-carousel
    var splide4 = new Splide("#fourth-carousel-splide", {
      type: "loop",
      perPage: 4,
      arrows: false,
      pagination: false,
      lazyLoad: "nearby",
      breakpoints: {
        900: {
          perPage: 3,
        },
        700: {
          perPage: 2,
        },
        570: {
          perPage: 1,
        },
      },
    });

    document
      .querySelector(".fourth-carousel-next")
      .addEventListener("click", (e) => {
        splide4.go("+1");
      });

    document
      .querySelector(".fourth-carousel-prev")
      .addEventListener("click", (e) => {
        splide4.go("-1");
      });

    splide4.mount();
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
});
