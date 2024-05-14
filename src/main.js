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
  if (document.getElementById("main-page")) {
    const categoryButton = document.getElementById("header-category");
    const categorySection = document.getElementById("category-section");
    categoryButton.addEventListener("click", () => {
      if (categorySection.classList.contains("hidden")) {
        categorySection.classList.replace("hidden", "block");
      } else {
        categorySection.classList.replace("block", "hidden");
      }
    });
    categorySection.addEventListener("click", (e) => {
      if (e.target.nodeName === "DIV") return;
      if (categorySection.classList.contains("hidden")) {
        categorySection.classList.replace("hidden", "block");
      } else {
        categorySection.classList.replace("block", "hidden");
      }
    });
  }

  const categoryCards = document.querySelectorAll(".category-card");

  function reset() {
    categoryCards.forEach((item) => {
      const firstlayerText = item.querySelector(".layer-text");

      firstlayerText.classList.replace("text-[#256CFA]", "text-[#0F1729]");
      item.classList.replace("open", "close");
      item.classList.remove(
        "bg-gradient-to-l",
        "from-[#FFFFFF1F]",
        "to-[#FFFFFF]",
        "border-[1px]",
        "border-t-transparent",
        "border-l-transparent",
        "border-[#0000001F]"
      );
    });
  }
  categoryCards.forEach((item) => {
    item.addEventListener("click", () => {
      reset();

      const firstlayerText = item.querySelector(".layer-text");

      if (item.classList.contains("close")) {
        firstlayerText.classList.replace("text-[#0F1729]", "text-[#256CFA]");
        item.classList.replace("close", "open");
        item.classList.add(
          "bg-gradient-to-l",
          "from-[#FFFFFF1F]",
          "to-[#FFFFFF]",
          "border-[1px]",
          "border-t-transparent",
          "border-l-transparent",
          "border-[#0000001F]"
        );
      } else {
        firstlayerText.classList.replace("text-[#256CFA]", "text-[#0F1729]");
        item.classList.replace("open", "close");
        item.classList.remove(
          "bg-gradient-to-l",
          "from-[#FFFFFF1F]",
          "to-[#FFFFFF]",
          "border-[1px]",
          "border-t-transparent",
          "border-l-transparent",
          "border-[#0000001F]"
        );
      }
    });
  });
});
