const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const explodeable = document.querySelectorAll('.explodeable')
const boom_button = document.getElementById('erase')
const click = new Audio('detonate.m4a')
const explode = new Audio('explosion.mp3')
console.log(click)
open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

 // console.log(container)
boom_button.addEventListener('click',()=>{
	click.play()
	setTimeout(function() {
  		explode.play()
	}, 800);
	setTimeout(function() {
  		explodeable.forEach((node)=>node.classList.add('explode'))
	}, 700);
	
})

