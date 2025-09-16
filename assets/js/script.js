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

    openBtn.addEventListener("click", () => {
        drawer.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        drawer.classList.remove("active");
    });
});