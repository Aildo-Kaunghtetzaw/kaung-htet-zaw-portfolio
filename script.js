/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("theme-toggle");


// Get saved theme
const savedTheme =
    localStorage.getItem("theme");


// Apply saved theme
if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

} else {

    themeToggle.textContent = "🌙";

}


// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");


    if (isDark) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =========================
   NAVIGATION
========================= */

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   CURRENT YEAR
========================= */

const currentYear =
    document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================
   INITIALIZE
========================= */

updateActiveNav();