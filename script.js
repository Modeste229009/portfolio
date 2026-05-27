// MENU MOBILE
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// FERMER MENU APRES CLIC
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// MESSAGE CONTACT
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  await fetch("https://formspree.io/f/xvzydpqd", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  alert("Votre message a été envoyé avec succès !");
  form.reset();
});
