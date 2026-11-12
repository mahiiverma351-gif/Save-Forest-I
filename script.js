
// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

});

// Close Menu After Clicking a Link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// Green Pledge Button

const pledgeBtn = document.getElementById("pledgeBtn");
const pledgeMessage = document.getElementById("pledgeMessage");

pledgeBtn.addEventListener("click", function () {

    pledgeMessage.textContent =
        "Thank you! You have taken a pledge to protect nature. 🌳";

    pledgeBtn.textContent = "Pledge Taken!";

});
