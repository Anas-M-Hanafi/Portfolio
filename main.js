    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const textElement = document.getElementById("typing-text");
    const textArray = ["Anas M Hanafi", "Web Developer", "Front-End Web Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];
        if (isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex--);
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), 1000); // توقف قبل المسح
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // تغيير النص بعد المسح
        }

        setTimeout(typeEffect, isDeleting ? 100 : 200); // سرعة الكتابة والمسح
    }

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeEffect, 500);
    });