export class Control{
	constructor(node, data){

		this.node = node
		this.setControls(data)
		this.filter(data)
	}

	setControls(data){
		const categories = Control.categories(data)
		const controlsHTML = categories.map(Control.controls.bind(this)).join('')
    	this.node.innerHTML = controlsHTML
	}

	static controls(category){
		return (
			`<button class="controls__button" id=${category}> ${category} </button>`
			)
		
	}

	static categories(data){
		const categories = data.reduce((acc, {category}) =>{
			if(!acc.includes(category)){
				acc.push(category)
			}

			return acc;
		},[])

		return categories;
	}

	filter(data){
		var buttons = this.node.querySelectorAll('.controls__button')
		for (const button of buttons){
			button.addEventListener("click", this.moviesSelect.bind(this, data, button.id))
		}
	}

	moviesSelect(data, buttonId){
		const moviesFilter = data.filter(this.moviesChoose.bind(this, buttonId))  
		console.log(moviesFilter[0])
		
	}

	moviesChoose(buttonId, movie){
		if(movie.category===buttonId){
			return true
		}
	}
}

export default Control
