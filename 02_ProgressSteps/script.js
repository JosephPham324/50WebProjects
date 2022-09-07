let progress = 0.0
let current = 0

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progressElem = document.getElementById('progress')

prev.addEventListener('click', ()=>{
	progress-=100/3
	circles[current].classList.remove('active')
	current-=1
	if (progress < 0) progress = 0.0
	progressElem.style.width = `${progress}%`
	if (progress == 0.0){
		prev.disabled = true;
	}
})
next.addEventListener('click', ()=>{
	if (progress<100){
		progress+=(100/3)
	} else return;
	current+=1
	circles[current].classList.add('active')
	progressElem.style.width = `${progress}%`
	prev.disabled = false;
})

