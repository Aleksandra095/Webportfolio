// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "0.6s ease";
    observer.observe(sec);
});


// =========================
// LIGHTBOX WITH ARROWS
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");

    const closeBtn = document.querySelector(".close");
    const leftBtn = document.querySelector(".nav.left");
    const rightBtn = document.querySelector(".nav.right");

    if (!lightbox || !lightboxImg || images.length === 0) return;


    let currentIndex = 0;


    function openImage(index) {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex].src;
    }


    function showNext() {
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        lightboxImg.src = images[currentIndex].src;
    }


    function showPrev() {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        lightboxImg.src = images[currentIndex].src;
    }


    // Відкриття фото
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            openImage(index);
        });
    });


    // Стрілки
    rightBtn.addEventListener("click", showNext);
    leftBtn.addEventListener("click", showPrev);


    // Закриття по Х
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });


    // Закриття кліком поза фото
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });


    // Клавіатура
    document.addEventListener("keydown", (e) => {

        if (lightbox.style.display !== "flex") return;

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

        if (e.key === "ArrowRight") {
            showNext();
        }

        if (e.key === "ArrowLeft") {
            showPrev();
        }

    });

});


// =========================
// LANGUAGE SWITCH (FINAL CLEAN VERSION)
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.getElementById("langBtn");
    if (!langBtn) return;

    const translations = {
        en: {
            heroText: `I create photorealistic interior and exterior visualizations using 3ds Max, Corona Renderer and Photoshop.

Photorealistic interior visualizations crafted at the intersection of technical precision, design, and the psychology of visual perception.

Turning interior concepts into reality.

Photorealistic 3D interior visualization, crafted through technical mastery, meticulous attention to detail, and the psychology of visual perception (3ds Max, Corona Renderer, Photoshop).

A passion for CGI paired with a background in sales, pedagogy, and psychology. Thanks to this insight, I don’t just build digital models — I deeply understand how the human eye perceives space, how lighting shifts mood, and how textures evoke feelings of coziness or luxury.

Combined with my sales experience, this allows me to use composition to highlight the key strengths of your design, ensuring the client falls in love with the project at first sight.

Photorealistic interior visualization (residential and commercial); quick adaptation to new workflows.`,

            aboutTitle: "About Me",
            aboutText: "Hi, I’m a 3D Interior Visualizer. My professional journey uniquely combines a passion for CGI with a background in sales, pedagogy, and psychology. This diverse experience allows me to deeply understand how people perceive space, lighting, and textures emotionally. I create clean, high-end visualizations that help clients feel their future space before it is built.",

            experienceTitle: "Experience",
            skillsTitle: "Skills",
            portfolioTitle: "Portfolio",
            educationTitle: "Education",
            contactTitle: "Contact"
        },

        uk: {
            heroText: `Я створюю фотореалістичні інтер’єрні та екстер’єрні візуалізації.

Фотореалістичні інтер’єри, створені на перетині технічної точності, дизайну та психології сприйняття.

Перетворюю концепти інтер’єру на реальність.

3D-візуалізація інтер’єрів із глибоким опрацюванням деталей, освітлення та матеріалів (3ds Max, Corona Renderer, Photoshop).

Досвід у CGI поєднаний із продажами, педагогікою та психологією дозволяє мені розуміти, як люди емоційно сприймають простір.

Я не просто будую моделі — я допомагаю клієнту “відчути” майбутній інтер’єр ще до будівництва.

Візуалізації житлових і комерційних просторів; швидка адаптація до нових пайплайнів.`,

            aboutTitle: "Про мене",
            aboutText: "Привіт! Я 3D-візуалізатор інтер’єрів. Мій досвід поєднує CGI, продажі, педагогіку та психологію. Це дозволяє мені створювати не просто картинки, а емоційно точні простори, які допомагають клієнтам відчути майбутній інтер’єр ще до реалізації.",

            experienceTitle: "Досвід",
            skillsTitle: "Навички",
            portfolioTitle: "Портфоліо",
            educationTitle: "Освіта",
            contactTitle: "Контакти"
        }
    };

    const heroText = document.querySelector(".hero p");
    const aboutTitle = document.querySelector("#about h2");
    const aboutText = document.querySelector("#about p");
    const experienceTitle = document.querySelector("#experience h2");
    const skillsTitle = document.querySelector("#skills h2");
    const portfolioTitle = document.querySelector("#portfolio h2");
    const contactTitle = document.querySelector("#contact h2");

    let currentLang = localStorage.getItem("lang") || "en";

    function updateLanguage() {

        if (heroText) heroText.innerText = translations[currentLang].heroText;
        if (aboutTitle) aboutTitle.innerText = translations[currentLang].aboutTitle;
        if (aboutText) aboutText.innerText = translations[currentLang].aboutText;
        if (experienceTitle) experienceTitle.innerText = translations[currentLang].experienceTitle;
        if (skillsTitle) skillsTitle.innerText = translations[currentLang].skillsTitle;
        if (portfolioTitle) portfolioTitle.innerText = translations[currentLang].portfolioTitle;
        if (contactTitle) contactTitle.innerText = translations[currentLang].contactTitle;

        langBtn.textContent = currentLang === "en" ? "UA" : "EN";

        localStorage.setItem("lang", currentLang);
    }

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "uk" : "en";
        updateLanguage();
    });

    updateLanguage();
});

// EDUCATION CARDS ANIMATION

const eduCards = document.querySelectorAll(".education-grid .card");

const eduObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150);
        }
    });
});

eduCards.forEach(card => {
    eduObserver.observe(card);
});