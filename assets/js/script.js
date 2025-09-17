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