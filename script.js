/* --- AESTHETIC DESIGN SYSTEM --- */
:root {
    /* Main Accent Colors (Vibrant) */
    --accent-primary: #8b5cf6; /* Indigo */
    --accent-secondary: #ec4899; /* Pink */
    --gradient-start: #8b5cf6;
    --gradient-end: #d946ef;
    
    /* Light Theme Base (Semi-Transparent Glass) */
    --bg-main: #f3f4f6;
    --glass-bg: rgba(255, 255, 255, 0.6);
    --glass-border: rgba(255, 255, 255, 0.4);
    --glass-shadow: rgba(31, 38, 135, 0.1);
    --text-main: #1f2937;
    --text-muted: #6b7280;
    --card-hover-shadow: rgba(139, 92, 246, 0.2);
}

[data-theme="dark"] {
    /* Dark Theme Base (Deeper Glass) */
    --bg-main: #0f172a;
    --glass-bg: rgba(30, 41, 59, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.4);
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
    --card-hover-shadow: rgba(217, 70, 239, 0.3);
}

/* --- CORE RESETS --- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: background-color 0.4s ease;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

/* --- GLASSMORPHISM MIXIN (Mental) --- */
.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.4s ease;
}

/* --- ANIMATED BACKGROUND SHAPES --- */
.circles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.circles div {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    animation: moveCircles 20s linear infinite;
}

[data-theme="dark"] .circles div {
    opacity: 0.08; /* Subtle on dark */
}

.circles div:nth-child(1) { width: 400px; height: 400px; top: -100px; left: -100px; animation-duration: 25s; }
.circles div:nth-child(2) { width: 300px; height: 300px; bottom: -50px; right: -50px; animation-duration: 18s; animation-delay: -5s; }
.circles div:nth-child(3) { width: 200px; height: 200px; top: 40%; left: 50%; animation-duration: 12s; animation-delay: -3s;}
.circles div:nth-child(4) { width: 500px; height: 500px; bottom: 30%; left: -200px; animation-duration: 30s; animation-delay: -7s;}

@keyframes moveCircles {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(-100px) rotate(360deg); }
}

/* --- UI ELEMENTS (TYPOGRAPHY & BUTTONS) --- */
h1 { font-weight: 700; font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; }
h1 span { background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800;}
h2.section-title { font-weight: 600; font-size: 2.2rem; margin-bottom: 1.5rem; border-left: 5px solid var(--accent-primary); padding-left: 1rem; }

p.subtitle { color: var(--text-muted); margin-bottom: 2rem; max-width: 600px; }

/* Global Buttons */
.btn {
    padding: 0.8rem 2.2rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    border: none;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1px;
}

.primary-btn {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    color: white;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.primary-btn:hover {
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
    transform: translateY(-2px);
}

.secondary-btn {
    background: transparent;
    border: 2px solid var(--accent-secondary);
    color: var(--accent-secondary);
}

.secondary-btn:hover {
    background: var(--accent-secondary);
    color: white;
    box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
    transform: translateY(-2px);
}

/* --- LAYOUT --- */
.container {
    max-width: 1000px;
    margin: 100px auto 40px; /* space for fixed nav */
    padding: 0 1rem;
}

.glass-panel {
    padding: 3rem;
    margin-bottom: 3rem;
}

/* --- NAVIGATION --- */
.glass-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 4rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--glass-border);
    box-shadow: 0 2px 10px var(--glass-shadow);
}

.nav-brand {
    font-weight: 700;
    font-size: 1.8rem;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
}

.nav-links a:hover { color: var(--accent-primary); }

.btn-theme-toggle {
    background: transparent;
    border: 2px solid var(--glass-border);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

.btn-theme-toggle:hover {
    border-color: var(--accent-primary);
    background-color: var(--glass-shadow);
    transform: rotate(20deg);
}

/* --- ABOUT SECTION --- */
.hero-section {
    position: relative;
    padding-top: 4rem;
}

.badge {
    display: inline-block;
    background: var(--glass-shadow);
    color: var(--accent-primary);
    padding: 0.3rem 1rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid var(--glass-border);
}

.hero-section p {
    color: var(--text-muted);
    font-size: 1.3rem;
    max-width: 650px;
    margin-bottom: 2rem;
    font-weight: 300;
}

.cta-btns {
    display: flex;
    gap: 1.5rem;
}

/* --- SKILLS SECTION --- */
.skills-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
}

.tag {
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    border: 1px solid transparent;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;
}

.tag:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Colorful Tag Variants */
.tag.html { border-color: #f06529; color: #f06529; background-color: rgba(240, 101, 41, 0.08); }
.tag.css { border-color: #2965f1; color: #2965f1; background-color: rgba(41, 101, 241, 0.08); }
.tag.js { border-color: #f7df1e; color: #ccb818; background-color: rgba(247, 223, 30, 0.08); }
.tag.react { border-color: #61dbfb; color: #1fb9e1; background-color: rgba(97, 219, 251, 0.08); }
.tag.git { border-color: #f05032; color: #f05032; background-color: rgba(240, 80, 50, 0.08); }
.tag.sheets { border-color: #0f9d58; color: #0f9d58; background-color: rgba(15, 157, 88, 0.08); }

/* --- PROJECTS SECTION --- */
.projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.project-card {
    background: var(--glass-shadow);
    border: 1px solid var(--glass-border);
    border-radius: 15px;
    padding: 2rem;
    flex: 1 1 calc(50% - 1rem); /* 2 columns */
    min-width: 300px;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px) scale(1.01);
    background: var(--glass-bg);
    border-color: var(--accent-primary);
    box-shadow: 0 10px 30px var(--card-hover-shadow);
}

.project-card h3 { margin-bottom: 0.8rem; font-weight: 600; }
.project-card p { color: var(--text-muted); font-weight: 300; margin-bottom: 1.5rem; flex-grow: 1; }

.project-card .proj-tag {
    font-size: 0.8rem;
    color: var(--accent-primary);
    background: var(--glass-shadow);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-weight: 600;
    align-self: flex-start;
}

.coming-soon { opacity: 0.6; border-style: dashed;}
.coming-soon:hover { border-color: var(--accent-secondary); box-shadow: 0 10px 30px var(--card-hover-shadow); }

/* --- CONTACT SECTION & FORMS --- */
.contact-section form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    max-width: 800px;
}

.input-group.full-width { grid-column: span 2; }
.submit-btn { justify-self: start; }

/* Floating Label Inputs */
.input-group {
    position: relative;
    margin-bottom: 0.5rem;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 1.1rem 1.2rem;
    background: var(--glass-shadow);
    border: 1px solid var(--glass-border);
    border-radius: 10px;
    color: var(--text-main);
    font-size: 1rem;
    transition: 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
    background: var(--glass-bg);
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.1);
}

.input-group label {
    position: absolute;
    left: 1.2rem;
    top: 1.1rem;
    color: var(--text-muted);
    pointer-events: none;
    transition: 0.3s ease;
    font-weight: 300;
}

/* Labels move up on focus/content */
.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label,
.input-group textarea:focus + label,
.input-group textarea:not(:placeholder-shown) + label {
    top: -0.6rem;
    left: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-primary);
    background: var(--glass-bg);
    padding: 0 0.4rem;
    border-radius: 4px;
}

/* Form Status Messages */
.error-msg { color: #ec4899; margin-top: 0.5rem; font-size: 0.9rem; font-weight: 600; }
.status-msg { color: #10b981; margin-top: 1rem; font-size: 1rem; font-weight: 600; text-align: center; }

/* --- ADMIN RESPONSES GRID --- */
.admin-responses-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

#responsesContainer {
    display: grid;
    gap: 1.5rem;
}

.no-messages { color: var(--text-muted); text-align: center; padding: 2rem; border-style: dotted; border-radius: 10px; border-color: var(--glass-border);}

.response-card {
    background: var(--glass-shadow);
    border: 1px solid var(--glass-border);
    border-radius: 10px;
    padding: 1.5rem;
}

.response-card p { margin-bottom: 0.3rem; }
.response-card strong { color: var(--accent-primary); font-weight: 600; }
.response-card .timestamp { font-size: 0.8rem; opacity: 0.7; color: var(--text-muted);}

/* --- MOBILE RESPONSIVENESS (AESTHETIC ADAPTATION) --- */
@media (max-width: 800px) {
    h1 { font-size: 2.5rem; }
    
    .glass-nav {
        padding: 1rem 1.5rem;
    }

    .nav-links {
        display: none; /* simple hides nav links on mobile for clarity */
    }

    .glass-panel { padding: 2rem; }
    
    .contact-section form {
        grid-template-columns: 1fr;
    }
    .input-group.full-width { grid-column: auto; }
}

/* Visibility Utilities */
.hidden { display: none !important; }
