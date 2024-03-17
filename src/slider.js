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
        },
        360: {
          perPage: 1,
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
    // seconde-carousel
    var splide2 = new Splide("#seconde-carousel-splide", {
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
        450: {
          perPage: 1,
          padding: "4rem",
        },
      },
    });

    document
      .querySelector(".seconde-carousel-next")
      .addEventListener("click", (e) => {
        splide2.go("+1");
      });

    document
      .querySelector(".seconde-carousel-prev")
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
  }

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
});
