const roles = [
    "Interactive Web Developer",
    "Frontend Engineer",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

const projects = [
    {
        title: "AI Resume Analyzer",
        description: "NLP based resume analysis tool.",
        tech: ["Python", "Flask", "JS"]
    },
    {
        title: "Bank Churn Predictor",
        description: "ANN based prediction model.",
        tech: ["Python", "TensorFlow"]
    }
];

function loadProjects() {
    const container = document.getElementById("project-container");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small>${project.tech.join(" | ")}</small>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);

function animateSkills() {
    const skillSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
}

window.addEventListener("scroll", animateSkills);


const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});