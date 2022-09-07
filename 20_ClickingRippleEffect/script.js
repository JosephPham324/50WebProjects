const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
	button.addEventListener('click', (e)=>{
		const x = e.clientX
		const y = e.clientY
		const buttonTop = e.target.offsetTop
		const buttonLeft = e.target.offsetLeft

		const position = insidePosition(x,y,buttonLeft,buttonTop)
		console.log(x + ' ' + y + ' ' + buttonLeft + ' ' + buttonTop)
		console.log(position[0] + ' ' + position[1])
		const span = document.createElement('span')
		span.classList.add('circle')
		span.style.top = `${position[1]}px`
		span.style.left = `${position[0]}px`
		button.append(span)
		setTimeout(()=>button.removeChild(span),2000)
	})
})

function insidePosition(clickX,clickY,buttonLeft,buttonTop){
	return [clickX - buttonLeft, clickY - buttonTop]
}