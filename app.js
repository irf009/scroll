const btn = document.querySelector(`.fa-bars`);
const navLinks = document.querySelector(`.nav-links`);
const date = document.querySelector(`.date`);
const nav = document.querySelector(`#nav`);
const topLink = document.querySelector(`.back-to-top-btn`);
//set date
btn.addEventListener(`click`, function (e) {
	navLinks.classList.toggle(`show-links`);
	navLinks.classList.toggle(`ul-top-border`);
});
date.innerHTML = new Date().getFullYear();
//
//nav scroll change
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener(`scroll`, function () {
	if (window.pageYOffset > navHeight) {
		nav.style.background = `#ff85a1`;
		navLinks.style.background = `#ff85a1`;
	} else {
		nav.style.background = `#fbb1bd`;
		navLinks.style.background = `#fbb1bd`;
	}
	if (window.pageYOffset > 700) {
		topLink.style.opacity = 1;
	} else {
		topLink.style.opacity = 0;
	}
});
//
//smooth scroll fixed
const scrollLinks = document.querySelectorAll(`.scroll-link`);
scrollLinks.forEach(function (scrollLink) {
	scrollLink.addEventListener(`click`, function (e) {
		e.preventDefault();
		navLinks.classList.remove(`show-links`);
		const id = e.currentTarget.getAttribute(`href`).slice(1);
		const element = document.getElementById(id);
		const containerHeight = navLinks.getBoundingClientRect().height;
		let position = element.offsetTop - navHeight;
		if (navHeight > 82) {
			position = position + containerHeight;
		}
		window.scrollTo({
			left: 0,
			top: position,
		});
	});
});
