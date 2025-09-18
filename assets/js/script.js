Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: {
        autoStart: true,
    },
    Toolbar: {
        display: ["zoom", "close"],
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.querySelector(".headerLinksMobileDrawer");
    const openBtn = document.querySelector(".menuDrawerOpen");
    const closeBtn = document.querySelector(".menuDrawerClose");
    const overlay = document.querySelector(".mobileDrawrLayer");

    openBtn.addEventListener("click", () => {
        drawer.classList.add("active");
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const loadReviewBtn = document.querySelector(".loadMoreReviews .ReviewsBtn");
  const spinner = document.querySelector(".load-more_spinner");
  const detCrdMn = document.querySelectorAll(".detCrdMn"); 

  let visibleCount = 3;

  console.log("Total Boxes:", detCrdMn.length);

  detCrdMn.forEach((box, index) => {
    box.style.display = index < visibleCount ? "block" : "none";
  });

  loadReviewBtn.addEventListener("click", () => {
    loadReviewBtn.style.display = "none";
    spinner.style.display = "block";

    setTimeout(() => {
      for (let i = visibleCount; i < visibleCount + 3; i++) {
        if (detCrdMn[i]) {
          detCrdMn[i].style.display = "block";
        }
      }
      visibleCount += 3;

      if (visibleCount >= detCrdMn.length) {
        loadReviewBtn.parentElement.style.display = "none";
      } else {
        loadReviewBtn.style.display = "inline-block";
        spinner.style.display = "none";
      }
    }, 600);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const drawerBtn = document.querySelector(".drawerForFilter");
  const colAllMebLeft = document.querySelector(".colAllMebLeft");
  const closeBtn = document.querySelector(".filterDrawerCross");
  const overlay = document.querySelector(".filterDrawerLayer");

  // Open drawer
  drawerBtn.addEventListener("click", () => {
    colAllMebLeft.classList.add("active");
  });

  // Close drawer on cross button
  closeBtn.addEventListener("click", () => {
    colAllMebLeft.classList.remove("active");
  });

  // Close drawer on overlay click
  overlay.addEventListener("click", () => {
    colAllMebLeft.classList.remove("active");
  });
});
