const faqs = document.querySelectorAll('.faq')

const buttons = document.querySelectorAll('.faq .faq-toggle')

buttons.forEach(button=>{
	button.addEventListener('click',()=>{
	button.parentElement.classList.toggle('active')
})
})

