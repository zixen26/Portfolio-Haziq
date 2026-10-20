// ===== Get the elements we need =====
const menuBtn  = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const topBtn   = document.getElementById("topBtn");
const links    = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

// ===== Feature 1: Mobile menu open/close =====
menuBtn.addEventListener("click", function () {
	const isOpen = navLinks.classList.toggle("open");
	menuBtn.setAttribute("aria-expanded", isOpen);
});

// ===== Feature 2: Close the mobile menu after clicking a link =====
links.forEach(function (link) {
	link.addEventListener("click", function () {
		navLinks.classList.remove("open");
		menuBtn.setAttribute("aria-expanded", "false");
	});
});

// ===== Feature 3: Show / hide "Back to top" button =====
function toggleTopButton() {
	if (window.scrollY > 300) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
}

// ===== Feature 4: Back to top (smooth scroll) =====
topBtn.addEventListener("click", function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Feature 5: Highlight the nav link of the section you are viewing =====
function highlightNav() {
	let current = "";

	sections.forEach(function (section) {
		if (window.scrollY >= section.offsetTop - 120) {
			current = section.id;
		}
	});

	links.forEach(function (link) {
		link.classList.remove("active");
		if (link.getAttribute("href") === "#" + current) {
			link.classList.add("active");
		}
	});
}

// ===== Run the scroll features whenever the user scrolls =====
window.addEventListener("scroll", function () {
	toggleTopButton();
	highlightNav();
});

// ===== Feature 6: Auto-update the year in the footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// Run once on page load
toggleTopButton();
highlightNav();
