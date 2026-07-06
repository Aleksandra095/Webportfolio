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
// LIGHTBOX (SAFE)
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");

    if (!lightbox || !lightboxImg || images.length === 0) return;

    let currentIndex = 0;

    function openImage(index) {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => openImage(index));
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    });

});


// =========================
// LANGUAGE SWITCH (FIXED 100%)
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.getElementById("langBtn");

    if (!langBtn) return;

    let currentLang = "en";

    const translations = {
        en: {
            heroText: "I create photorealistic interior and exterior visualizations using 3ds Max, Corona Renderer and Photoshop.",
            aboutTitle: "About Me",
            aboutText: "Hi, I’m a 3D Interior Visualizer. My professional journey uniquely combines a passion for CGI with a background in sales, pedagogy, and psychology. This diverse experience is my greatest asset. It allows me to go beyond just technical execution and deeply understand how people interact with space, lighting, and textures on an emotional level. What does this mean for your project? I create clean, high-end, and atmospheric 3D visualizations that accurately capture the designer's intent, helping clients feel their future space long before construction begins. It’s a powerful tool designed to streamline presentations, minimize revisions, and win project approvals. I am driven by perfection in every detail, highly value your time, and always deliver on schedule.",
            experienceTitle: "Experience",
            skillsTitle: "Skills",
            portfolioTitle: "Portfolio",
            contactTitle: "Contact"
        },
        ua: {
            heroText: "Я створюю фотореалістичні інтер’єрні та екстер’єрні візуалізації.",
            aboutTitle: "Про мене",
            aboutText: "Привіт! Я — художник 3D-візуалізації інтер'єрів. Мій професійний шлях унікально поєднує пристрасть до CGI (комп'ютерної графіки) з досвідом у сферах продажів, педагогіки та психології. Цей різнобічний досвід — моя головна перевага. Він дозволяє мені виходити за межі суто технічного виконання та глибоко розуміти на емоційному рівні, як люди взаємодіють із простором, світлом і текстурами. Що це означає для вашого проекту? Я створюю чисті, висококласні та атмосферні 3D-візуалізації, які точно передають задум дизайнера, допомагаючи клієнтам «відчути» свій майбутній простір задовго до початку будівництва. Це потужний інструмент, розроблений для того, щоб оптимізувати презентації, мінімізувати кількість правок та успішно затверджувати проекти.Я прагну до досконалості в кожній деталі, високо ціную ваш час і завжди здаю роботу вчасно.",
            experienceTitle: "Досвід",
            skillsTitle: "Навички",
            portfolioTitle: "Портфоліо",
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

    function updateLanguage() {
        heroText.textContent = translations[currentLang].heroText;
        aboutTitle.textContent = translations[currentLang].aboutTitle;
        aboutText.textContent = translations[currentLang].aboutText;
        experienceTitle.textContent = translations[currentLang].experienceTitle;
        skillsTitle.textContent = translations[currentLang].skillsTitle;
        portfolioTitle.textContent = translations[currentLang].portfolioTitle;
        contactTitle.textContent = translations[currentLang].contactTitle;
    }

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ua" : "en";
        langBtn.textContent = currentLang === "en" ? "UA" : "EN";
        updateLanguage();
    });

});