const btnOpen = document.querySelector('.bussines__button')
const modal = document.querySelector('.js-backdrop')
const btnClose = document.querySelector('.modal__close')
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector('.nav')
const menuactive = document.querySelectorAll('.menu .menu__item .menu__link')

function openModal () {
	modal.classList.add('showModal')
}
function closeModal (event) {
	event.preventDefault()
	if (event.target === event.currentTarget) {
		modal.classList.remove('showModal')
	}
}


btnClose.onclick = closeModal
modal.onclick = closeModal
btnOpen.onclick = openModal


if (hamburger !== null) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
			menu.classList.toggle('is-active')
			document.body.classList.toggle('is-active')
		});
		
}

// menuactive.forEach((el) => {
// 	if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
// 			el.classList.add("menu__link-active");
// 	}
// 	console.log(window.location.pathname.indexOf(el.getAttribute("href")) > -1)
// });


