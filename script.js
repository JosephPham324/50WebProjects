const links = ['01_ExpandingCards', '02_ProgressSteps', '03_RotatingNavigation', '04_HiddenSearchWidget', 'https://josephpham324.github.io/HBD-TQT', '06_ScrollAnimation',
'07_SplitLandingPage', '08_FormWaveAnimation', '09_SoundBoard', '10_DadJokes', 

'11_EventKeyCodes', '12_FAQCollapse', '13_RandomChoicePicker', '14_AnimatedNavigation', '15_IncrementingCounter',
 '20_ClickingRippleEffect', '#', '#', '#', '#',

'21_DragNDrop', '#', '#', '#', '#', '#', '#', '#', '#', '#',

'#', '#', '#', '#', '#', '#', '#', '#', '#', '#',

'#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 

'#'
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