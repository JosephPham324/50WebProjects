const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties){
	empty.addEventListener('dragover',dragOver)
	empty.addEventListener('dragenter',dragEnter)
	empty.addEventListener('drop', dragDrop)
	empty.addEventListener('dragleave',dragLeave)
}
//fill
function dragStart(){
	this.className+=' hold'
	setTimeout(()=>this.className = 'invisible', 0)
}
//fill
function dragEnd(){
	this.className = 'fill'
}

//empties
function dragEnter(e){
	e.preventDefault()
	this.className+=' hover'
}

function dragOver(e){
	e.preventDefault()
}

function dragLeave(){
	this.className = 'empty'
}

function dragDrop(){
	this.className = 'empty'
	this.append(fill)
}