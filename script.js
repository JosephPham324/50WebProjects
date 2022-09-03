const links = ['1_ExpandingCards', '2_ProgressSteps', '3_RotatingNavigation', '4_HiddenSearchWidget', '#', '6_ScrollAnimation',
'7_SplitLandingPage', '8_FormWaveAnimation', '9_SoundBoard', '10_DadJokes', 

'#', '#', '#', '#', '#', '#', '#', '#', '#', '#',

'#', '#', '#', '#', '#', '#', '#', '#', '#', '#',

'#', '#', '#', '#', '#', '#', '#', '#', '#', '#',

'#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
]

const button = document.getElementById('go')
const select = document.getElementById('select')
button.href = links[select.value-1] + '/index.html'
button.target = '_blank'


select.addEventListener('change',()=>{
	button.href = links[select.value-1] + '/index.html'
	if (links[select.value-1]!='#'){
		button.target = '_blank'
	} else {
		button.target = ''
	}
}) 