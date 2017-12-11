export class Movie{
	constructor(node, data){

		this.node = node
		this.setMovies(data)
	}

	setMovies(data){
		const imagesHTML = data.map(Movie.movies).join('')
    	this.node.innerHTML = imagesHTML
	}

	static movies({image}){
		return (
			`<div class="movie__container">
				<img src="${image}">
			</div>`
			)
		
	}
}

export default Movie

