export class Movie{
	constructor(node, data){

		this.node = node
		//var movies = JSON.parse(data)
		//console.log(data[0].category)
		this.setMovies(data)
	}

	setMovies(data){
		const imagesHTML = data.map(Movie.movies).join('')
    	//var activators= document.querySelector('.gallery__activators')
    	this.node.innerHTML = imagesHTML
	}

	static movies({image}){
		return (
			`<img src="${image}" class=".movie__container">`
			)
		
	}
}

export default Movie

