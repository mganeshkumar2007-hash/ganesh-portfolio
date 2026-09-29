const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = themeToggleBtn.querySelector(".icon");

const savedTheme = localStorage.getItem("siteTheme") || "light";
document.body.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", nextTheme);
    localStorage.setItem("siteTheme", nextTheme);
    updateThemeIcon(nextTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const message = document.getElementById("userMessage").value.trim();
    const timestamp = new Date().toLocaleString();

    const newResponse = { name, email, message, timestamp };

    const existingResponses = JSON.parse(localStorage.getItem("contactResponses")) || [];
    existingResponses.push(newResponse);
    localStorage.setItem("contactResponses", JSON.stringify(existingResponses));

    contactForm.reset();
    formStatus.textContent = "Thank you! Your message has been saved.";
    setTimeout(() => (formStatus.textContent = ""), 4000);
});

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

const adminLoginForm = document.getElementById("adminLoginForm");
const adminLoginSection = document.getElementById("adminLoginSection");
const adminResponsesSection = document.getElementById("adminResponsesSection");
const loginError = document.getElementById("loginError");
const responsesContainer = document.getElementById("responsesContainer");
const logoutBtn = document.getElementById("logoutBtn");

adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = document.getElementById("adminUsername").value.trim();
    const p = document.getElementById("adminPassword").value.trim();

    if (u === ADMIN_USER && p === ADMIN_PASS) {
        loginError.textContent = "";
        adminLoginForm.reset();
        showAdminDashboard();
    } else {
        loginError.textContent = "Access Denied: Invalid Credentials.";
    }
});

logoutBtn.addEventListener("click", () => {
    adminResponsesSection.classList.add("hidden");
    adminLoginSection.classList.remove("hidden");
});

function showAdminDashboard() {
    adminLoginSection.classList.add("hidden");
    adminResponsesSection.classList.remove("hidden");
    renderResponses();
}

function renderResponses() {
    const responses = JSON.parse(localStorage.getItem("contactResponses")) || [];

    if (responses.length === 0) {
        responsesContainer.innerHTML = "<p class='no-messages'>No submissions yet.</p>";
        return;
    }

    responsesContainer.innerHTML = responses
        .slice()
        .reverse()
        .map(
            (item) => `
                <div class="response-card">
                    <p><strong>Sender:</strong> ${escapeHtml(item.name)}</p>
                    <p><strong>Contact:</strong> ${escapeHtml(item.email)}</p>
                    <p><strong>Message:</strong> ${escapeHtml(item.message)}</p>
                    <p class="timestamp">Received: ${item.timestamp}</p>
                </div>
            `
        )
        .join("");
}

function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}
