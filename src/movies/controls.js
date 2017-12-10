export class Control{
	constructor(node, data){

		this.node = node
		//var movies = JSON.parse(data)
		console.log(data[0].category)
		this.setControls(data)
	}

	setControls(data){
		const categories = Control.categories(data)
		const controlsHTML = categories.map(Control.controls.bind(this)).join('')
    	this.node.innerHTML = controlsHTML
	}

	static controls(category){
		console.log(category)
		return (
			`<button class="controls__button"> ${category} </button>`
			)
		
	}

	static categories(data){
		const categories = data.reduce((acc, {category}) =>{
			if(!acc.includes(category)){
				acc.push(category)
				console.log(category)
			}

			return acc;
		},[])

		return categories;
	}
}

export default Control