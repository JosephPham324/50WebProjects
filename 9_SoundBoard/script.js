const sounds = ['goodbyejojo','mrjoestar','yesyesyes','ora','theworld','wry']
var current =''
const mode = document.getElementById('mode')
const select = document.getElementById('track')
let play = document.getElementById('play')

play.addEventListener('click',()=>playOne())
mode.addEventListener('click',()=>{
	if (mode.innerText == 'PLAY ONE'){
		stopSongs()
		mode.innerText = 'PLAY ALL'
		play = cloneNode('play')
		play.addEventListener('click',()=>playAll())
		select.style.display = 'none'
	} else {
		stopSongs()
		clearTimeouts()
		mode.innerText = 'PLAY ONE'
		play = cloneNode('play')
		play.addEventListener('click',()=>playOne())
		select.style.display = 'inline-block'
	}
})



function playOne(){
	let track = document.getElementById(select.value)
		stopSong(current)
		track.play()
		current = select.value
}

function playAll(){
	var prevDuration = 0

	for (let i in sounds){
		const song = document.getElementById(sounds[i])
		current = sounds[i]
		setTimeout(()=>{song.play()}, `${prevDuration*1000}`)
		prevDuration+= song.duration + 1
	}
}

sounds.forEach(sound=>{
		const btn = document.createElement('button')
		btn.classList.add('btn')
		btn.innerText = sound;

		btn.addEventListener('click',()=>{
			stopSong(current)
			document.getElementById(sound).play()
			current = sound
		})

		document.getElementById('buttons').appendChild(btn)

})

function stopSong(current){
	if (current!=''){
		const song = document.getElementById(current);
		song.pause()
		song.currentTime = 0
	}
}

function stopSongs(){
	sounds.forEach(sound=>{
		const song = document.getElementById(sound);
		song.pause()
		song.currentTime = 0;
	})
}

function clearTimeouts(){
	var id = window.setTimeout(function() {}, 0);

	while (id--) {
	    window.clearTimeout(id); // will do nothing if no timeout with id is present
	}
}

function cloneNode(nodeID){
	let old_element = document.getElementById(nodeID);
	let new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
	return new_element;
}