// const theatreId = 195;
// let theatreURL = 'https://evening-plateau-54365.herokuapp.com/theatres/195'
// let cardContainer = document.querySelector('.ui cards showings')

document.addEventListener('DOMContentLoaded', setupPage)
const theatreId = 195;
let theatreURL = 'https://evening-plateau-54365.herokuapp.com/theatres/195'
let cardContainer = document.querySelector('.ui-cards-showings')

function setupPage() {
	renderAllMovies()
	// addFormHandler()
}

function renderAllMovies() {
	fetch(theatreURL)
	.then(res => res.json())
	.then(res => {
		res.showings.forEach(renderMovie)
  })
}

function renderMovie(movie) {

	let element = document.createElement('div')
	element.className = 'card'
	element.dataset.id = movie.id

	let movieName = document.createElement('h4')
	movieName.textContent = movie.film.title
	element.appendChild(movieName)

	let movieLength = document.createElement('h4')
	movieLength.textContent = movie.film.runtime + " minutes"
	element.appendChild(movieLength)

	let movieTime = document.createElement('h4')
	movieTime.textContent = movie.showtime
	element.appendChild(movieTime)

	let remainingTickets = document.createElement('p')
	remainingTickets.textContent = movie.tickets_sold + " remaining tickets"
	element.appendChild(remainingTickets)

	let button = document.createElement('button')
	button.textContent = "Buy Ticket"
	button.addEventListener('click', () => buyTicket(movie))
	element.appendChild(button)

	cardContainer.appendChild(element)

}

function buyTicket(movie) {
	// event.preventDefault()
	let remainingTickets = parseInt(event.target.parentElement.querySelector('p').innerText)
	let id = movie.id
	remainingTickets = remainingTickets - 1
	let capacity = movie.capacity
	let ticketsSold = capacity - remainingTickets
	// debugger

	event.target.parentElement.querySelector('p').innerText = remainingTickets + " remaining tickets"


	if (remainingTickets < 1) {
		event.target.textContent = "Sold Out"
		event.target.remove()
	}

	changeTicket(remainingTickets, id)
}

function changeTicket(remainingTickets, id) {
	return fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, {
		method: "POST",
		headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
			tickets_sold: remainingTickets,
			showing_id: id
		})
})
}
