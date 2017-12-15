export class Movie {
  constructor (nodeControl, nodeMovie, data) {
    this.nodeControl = nodeControl
    this.nodeMovie = nodeMovie
    this.setMovies(data)
    this.filter(data)
  }

  setMovies (data) {
    const imagesHTML = data.map(Movie.movies).join('')
    this.nodeMovie.innerHTML = imagesHTML
    this.eventRotate(data)
  }

  static movies (movie) {
    return (
      `<div class="card">
        <button class="card__front">
          <h3 class="card__front__title">${movie.title}</h3>
          <img class="card__front__img" src="${movie.image}">
        </button>
        <button class="card__back">
          <h3 class="card__back__title">${movie.title}</h3>
          <p class="card__back__review">${movie.review}</p>
        </button>
      </div>`)
  }

  filter (data) {
    const buttons = this.nodeControl.querySelectorAll('.controls-container__button')
    for (const button of buttons) {
      button.addEventListener('click', this.moviesSelect.bind(this, data))
    }
  }

  moviesSelect (data, event) {
    if (event.currentTarget.id === 'Reset') {
      this.setMovies(data)
    } else {
      const moviesFilter = data.filter(this.moviesChoose.bind(this, event.currentTarget.id))
      this.setMovies(moviesFilter)
    }
  }

  moviesChoose (buttonId, movie) {
    if (movie.category === buttonId) {
      return true
    }
  }

  eventRotate (data) {
    const moviesContainer = this.nodeMovie.querySelectorAll('.card')
    for (const movieContainer of moviesContainer) {
      movieContainer.addEventListener('click', function () {
        for (const movieContainer of moviesContainer) {
          movieContainer.classList.remove('card--rotate')
        }
        movieContainer.classList.toggle('card--rotate')
      })
    }
  }
}

export default Movie
