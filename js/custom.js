const btnOpen = document.querySelector('.bussines__button')
const modal = document.querySelector('.js-backdrop')
const btnClose = document.querySelector('.modal__close')
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector('.nav')
const filterBox = document.querySelectorAll('.portfolio__item')

function openModal () {
	modal.classList.add('showModal')
}
function closeModal (event) {

	if (event.target === event.currentTarget) {
		modal.classList.remove('showModal')
	}
}

if (btnOpen != undefined && btnClose != undefined) {
	btnClose.onclick = closeModal
	modal.onclick = closeModal
	btnOpen.onclick = openModal
}



if (hamburger !== null) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
			menu.classList.toggle('is-active')
			document.body.classList.toggle('is-active')
		});
		
}

document.querySelector('.portfolio__top').addEventListener('click', event => {
	if (event.target.tagName !== 'BUTTON') return false
	let filterClass = event.target.dataset['id']
	filterBox.forEach (item => {
		item.classList.remove('hide')
		if (!item.classList.contains(filterClass) && filterClass !== 'all') {
			item.classList.add('hide')
		}
	})
})

