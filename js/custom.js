const btnOpen = document.querySelector('.bussines__button')
const modal = document.querySelector('.js-backdrop')
const btnClose = document.querySelector('.modal__close')

function openModal () {
	modal.classList.add('showModal')
}
function closeModal (event) {
	if (event.target === event.currentTarget) {
		modal.classList.remove('showModal')
	}
}


btnClose.onclick = closeModal
modal.onclick = closeModal
btnOpen.onclick = openModal