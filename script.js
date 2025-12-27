const realEmail = "oladejokhadijat1999@gmail.com";
const emailInput = document.getElementById("email");
const toggleBtn = document.getElementById("toggleEmail");

let masked = true;

function maskEmail(email) {
    const [name, domain] = email.split("@");
    return name.slice(0, 2) + "*".repeat(name.length - 2) + "@" + domain;
}

emailInput.value = maskEmail(realEmail);

toggleBtn.onclick = () => {
    masked = !masked;
    emailInput.value = masked ? maskEmail(realEmail) : realEmail;
    toggleBtn.textContent = masked ? "Show" : "Hide";
};

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

function saveProfile() {
    localStorage.setItem("profile", JSON.stringify({
        first: firstName.value,
        last: lastName.value
    }));
    alert("Profile saved!");
}

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "Light Mode";
}

themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });
});