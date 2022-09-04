const rates = [0.2, 0.1, 0.33, 0.15, 0.4, 0.53, 0.24, 0.45, 0.3, 0.36];

const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{
	counter.innerText = '0'

	let rate = rates[Math.floor(Math.random() * 10)]

	const updateCounter = () =>{
		const target =+ counter.getAttribute('data-target')
		const c =+ counter.innerText

		const increment = target / 200 * rate + rate * 10 

		if (c<target){
			counter.innerText = `${Math.ceil(c + increment)}`
			setTimeout(updateCounter, rate * 1000)
		} else {
			counter.innerText = target
		}
	}

	updateCounter()
})