const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
	button.addEventListener('click', (e)=>{
		const x = e.clientX
		const y = e.clientY
		const buttonTop = e.target.offsetTop
		const buttonLeft = e.target.offsetLeft

		const position = insidePosition(x,y,buttonLeft,buttonTop)

		const span = document.createElement('span')
		span.classList.add('circle')
		span.style.top = position[1]
		span.style.left = position[0]

		button.appendChild(span)
		setTimeout(()=>button.removeChild(span),2000)
	})
})

function insidePosition(clickX,clickY,buttonLeft,buttonTop){
	return [`${clickX - buttonLeft}px`,`${clickY - buttonTop}px`]
}