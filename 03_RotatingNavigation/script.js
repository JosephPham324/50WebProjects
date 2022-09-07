const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const explodeable = document.querySelectorAll('.explodeable')
const boom_button = document.getElementById('erase')
const click = new Audio('detonate.m4a')
const explode = new Audio('explosion.mp3')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

boom_button.addEventListener('click',()=>{
	boom_button.style.cursor = 'not-allowed'
	boom_button.style.color = 'black'
	boom_button.disabled = true
	click.play()
	setTimeout(function() {
  		explode.play()
	}, 800);
	setTimeout(function() {
  		explodeable.forEach((node)=>node.classList.add('explode'))
	}, 700);
	
})

