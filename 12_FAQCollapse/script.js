const faqs = document.querySelectorAll('.faq')

const buttons = document.querySelectorAll('.faq .faq-toggle')

buttons.forEach(button=>{
	button.addEventListener('click',()=>{
	if (!button.parentElement.classList.contains('active')){
		window.location= `#${button.parentElement.id}`
	}
	button.parentElement.classList.toggle('active')
})
})

