export class Control{
	constructor(node, data){

		this.node = node
		this.setControls(data)
	}

	setControls(data){
		const categories = Control.categories(data)
		const controlsHTML = categories.map(Control.controls.bind(this)).join('')
    	this.node.innerHTML = controlsHTML
	}

	static controls(category){
		return (
			`<button class="controls-container__button" id=${category}> ${category} </button>`
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

}

export default Control
