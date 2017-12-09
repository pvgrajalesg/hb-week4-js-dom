export class Gallery{

	constructor(node, data){
		this.node = node
		this.elements = {}

		this.setActivators(data)
		this.setImages(data)
		Gallery.controls
		
		this.setElement()
		this.setEvents()

	}

	setActivators (data) {
    	const activatorsHTML = data.map(Gallery.activators).join('')
    	var activators= document.querySelector('.gallery__activators')
    	activators.innerHTML = activatorsHTML
  	}

  	setImages (data) {
    	const imagesHTML = data.map(Gallery.images).join('')
    	var images= this.node.querySelector('.gallery__images')
    	images.innerHTML = imagesHTML
  	}

	static images({url}){
		return (
			`<img src="${url}">`
			)
	}

	static activators(){
		return (
			`<input type="radio" name="activator" class="gallery__activator"/>`
			)
	}

	static get controls(){
		var controls= document.querySelector('.gallery__controls');
		controls.innerHTML =`<label class="gallery__control gallery__control--backward"></label>
					<label class="gallery__control gallery__control--forward"></label>`;
	}

	setElement(){
		this.elements.activators = this.node.querySelector('.gallery__activators')
		this.elements.images=this.node.querySelector('.gallery__images')
		this.elements.controls= this.node.querySelector('.gallery__controls')
		this.elements.radios= this.elements.activators.querySelectorAll('input')
		this.elements.img=this.elements.images.querySelectorAll('img')
		this.elements.labelBackward = this.elements.controls.querySelector('.gallery__control--backward')
		this.elements.labelForward = this.elements.controls.querySelector('.gallery__control--forward')

		this.elements.radios[0].checked=true
		this.elements.img[0].style.opacity = 1
	}

	setEvents(){

		//Change image with the keyboard
		window.addEventListener('keydown', this.moveSelection.bind(this));
	
		//Change image with the arrows
		this.elements.labelBackward.addEventListener("click", this.moveLeft.bind(this));
		this.elements.labelForward.addEventListener("click", this.moveRight.bind(this));
	
		//Change image with the radio button
		for (let index = 0; index < this.elements.radios.length; index++){
			this.elements.radios[index].addEventListener("click", this.imageSelection.bind(this, index))
		}

	}

	moveSelection(event) {
		switch (event.keyCode) {
			case 37:
			this.moveLeft()
			break
			case 39:
			this.moveRight()
			break
		}
	};

	moveLeft(){
		for (let index = 1; index < this.elements.radios.length; index++){
			if(this.elements.radios[index].checked){
				this.imageSelection(index-1)
			}			
		}
	}

	moveRight(){
		for (let index = 0; index < this.elements.radios.length-1; index++){
			if(this.elements.radios[index].checked){
				this.imageSelection(index+1)
			}			
		}
	}

	imageSelection(id){
		this.elements.radios[id].checked=true
		for (let index = 0; index < this.elements.img.length; index++) {
			this.elements.img[index].style.opacity=0
			
		}
		this.elements.img[id].style.opacity=1
	}
	
}

export default Gallery
