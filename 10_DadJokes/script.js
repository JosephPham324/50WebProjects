const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
	const config = {
		headers:{
			'Accept': 'application/json'
		}
	}

	const joke = await fetch('https://icanhazdadjoke.com/',config)

	const data = await joke.json()

	jokeEle.innerHTML = data.joke
}

// function generateJoke(){
// 	const config = {
// 		headers:{
// 			'Accept': 'application/json'
// 		}
// 	}

// 	fetch('https://icanhazdadjoke.com/',config)
// 		.then(response => response.json())
// 		.then(data => {
// 			jokeEle.innerHTML = data.joke
// 		})
// }

