export class Movie{
	constructor(nodeControl, nodeMovie, data){

		this.nodeControl = nodeControl
		this.nodeMovie = nodeMovie
		this.filter(data)
		//this.setMovies(data)
		//this.eventRotate(data)
	}

	setMovies(data){
		const imagesHTML = data.map(Movie.movies).join('')
    	this.nodeMovie.innerHTML = imagesHTML
    	this.eventRotate(data)
	}

	static movies(movie){
		return (
			`<button class="movie__container">
				<h3 class="movie__container__title">${movie.title}</h3>
				<img class="movie__container__img" src="${movie.image}">
			</button>
				`
			)
		
	}

	filter(data){
		const buttons = this.nodeControl.querySelectorAll('.controls-container__button')
		for (const button of buttons){
			button.addEventListener("click", this.moviesSelect.bind(this, data))
		}
	}

	moviesSelect(data,event){
		const moviesFilter = data.filter(this.moviesChoose.bind(this, event.currentTarget.id))  
		this.setMovies(moviesFilter)
		
	}

	moviesChoose(buttonId, movie){
		if(movie.category===buttonId){
			return true
		}
	}

	eventRotate(data){
		const moviesContainer = this.nodeMovie.querySelectorAll('.movie__container')
		for (const movieContainer of moviesContainer){
			movieContainer.addEventListener("click", function(){
				movieContainer.classList.toggle("movie__container--rotate")
			})
		}
	}
}

export default Movie

