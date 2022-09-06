const content = document.getElementById('textarea')

const tags = document.getElementById('tags')

content.addEventListener('input', ()=>{
	const value = content.value

	const choices = value.split(',')
	tags.innerHTML = choices.map((choice)=>{if (choice.trim()!='')	return `<span class = "tag">${choice}</span>`})
					   		.join('')
})

content.addEventListener('keydown', (key)=>{
	if (key.keyCode == '13'){
		setTimeout(()=>{
			key.target.value = ''
		},10)
		randomSelect()
	}

})

function randomSelect(){
	const times = 30

	const interval = setInterval(()=>{
		const tag = selectTag()

		highlightTag(tag)

		setTimeout(()=>{
			unhighlightTag(tag)
		},100)
	},100)

	setTimeout(()=>{
		clearInterval(interval)

		highlightTag(selectTag())
	},times * 100)
}

function selectTag(){
	const tags = document.querySelectorAll('.tag')

	return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
	tag.classList.add('highlight')
}

function unhighlightTag(tag){
	tag.classList.remove('highlight')
}
