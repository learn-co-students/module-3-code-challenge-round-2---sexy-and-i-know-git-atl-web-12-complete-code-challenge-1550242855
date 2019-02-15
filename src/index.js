const theatreId = 196;

const url = 'https://evening-plateau-54365.herokuapp.com/theatres/196';

let showings = document.querySelector("div[class='ui cards showings']")

document.addEventListener('DOMContentLoaded', setupPage)

function setupPage(){
  getShows()
  .then(renderShows)
}

function renderShows(shows){

  console.log(shows)
  const name = document.createElement('h3')
  name.innerHTML = shows.name
  showings.appendChild(name)



  const show = document.createElement('div')
  theaterShows = shows.showings
  theaterShows.forEach((oneShow) => {
    console.log(oneShow)

    let title = document.createElement('h5')
    title.textContent = oneShow.film.title
    showings.appendChild(title)

    let time = document.createElement('p')
    time.textContent = oneShow.film.runtime
    showings.appendChild(time)

    let showTime = document.createElement('p')
    showTime.textContent = oneShow.showtime
    showings.appendChild(showTime)

    let sold = document.createElement('p')
    sold.innerHTML = oneShow.tickets_sold
    showings.appendChild(sold)

    const btn = document.createElement('button')
    btn.textContent = 'Buy ticket'
    btn.id = shows.id
    sold.appendChild(btn)
    btn.addEventListener('click', buyTicket)


  })

  function buyTicket(event){
    let ticketSales = event.target.parentElement
    parseInt(textContent)
    ticketSales = ticketSales -1
    // debugger


  }


}
