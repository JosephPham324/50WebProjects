const sounds = ['goodbyejojo','mrjoestar','yesyesyes','ora','theworld','wry']
var current =''
const mode = document.getElementById('mode')



sounds.forEach(sound=>{
		const btn = document.createElement('button')
		btn.classList.add('btn')
		btn.innerText = sound;

		btn.addEventListener('click',()=>{
			stopSong(current)
			document.getElementById(sound).play()
			current = sound;
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