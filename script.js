const links = [
	'1_ExpandingCards',
	'2_ProgressSteps',
	'3_RotatingNavigation',
	'4_HiddenSearchWidget',
	'#',
	'6_ScrollAnimation',
	'7_SplitLandingPage',
	'8_FormWaveAnimation',
	'9_SoundBoard'
]

const button = document.getElementById('go')
const select = document.getElementById('select')
button.href = links[select.value-1] + '/index.html'



select.addEventListener('change',()=>{
	button.href = links[select.value-1] + '/index.html'
})