import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("product-detail")) {
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
  }
});
