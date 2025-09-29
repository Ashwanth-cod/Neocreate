import { auth, provider } from "./firebase-config.js";
import { onAuthStateChanged, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

AOS.init({ duration: 1000, once: true });

// Scroll buttons
document.querySelectorAll(".secondary-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Start Designing / Login buttons
document.querySelectorAll(".nav-cta, .cta-btn").forEach(btn => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      window.location.href = "/dashboard.html";
    } else {
      try {
        await signInWithPopup(auth, provider);
        window.location.href = "/auth/sign-up.html"; // after login, go to sign-up flow
      } catch (error) {
        console.error("Google Sign-In error:", error);
        alert("Login failed. Please try again.");
      }
    }
  });
});

// Only redirect if logged in AND NOT on the homepage
onAuthStateChanged(auth, user => {
  const isHome = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
  if (user && !isHome) {
    window.location.href = "/dashboard.html";
  }
});
