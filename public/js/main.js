/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
    let intViewportWidth = window.innerWidth;
    if (document.body.scrollTop > 30 || (document.documentElement.scrollTop > 30) & (intViewportWidth > 991)) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (document.body.scrollTop < 30 || (document.documentElement.scrollTop < 30) & (intViewportWidth > 991)) {
        document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
}

// NAVBAR ON MOBILE
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// HOVER ON DESKTOP
function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
        function () {
            const shouldOpen = _d.matches(":hover");
            _m.classList.toggle("show", shouldOpen);
            _d.classList.toggle("show", shouldOpen);

            _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );
}

// ON HOVER
const dropdownCheck = document.querySelector(".dropdown");

if (dropdownCheck !== null) {
    document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
    document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

    // ON CLICK
    document.querySelector(".dropdown").addEventListener("click", (e) => {
        const _d = e.target.closest(".dropdown");
        let _m = document.querySelector(".dropdown-menu", _d);
        if (_d.classList.contains("show")) {
            _m.classList.remove("show");
            _d.classList.remove("show");
        } else {
            _m.classList.add("show");
            _d.classList.add("show");
        }
    });
}
