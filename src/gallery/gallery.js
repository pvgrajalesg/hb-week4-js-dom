export class Gallery{

	constructor(node){
		this.node = node

		Gallery.images
		Gallery.activators
		Gallery.constrols

		var activators= node.querySelector('.gallery__activators')
		var radios= activators.querySelectorAll('input')
		var gallery__images= node.querySelector('.gallery__images')
		var img = gallery__images.querySelectorAll('img')
		var controls= this.node.querySelector('.gallery__controls');
		var labelBackward= controls.querySelector('.gallery__control--backward')
		var labelForward= controls.querySelector('.gallery__control--forward')
		img[0].style.opacity = 1;

		this.setEvents()

	}

	static get images(){
		var gallery= document.querySelector('.gallery__images')
		gallery.innerHTML =`<img src="../images/image1.jpg"> 
		<img src="../images/image2.jpg"> 
		<img src="../images/image3.jpg"> 
		<img src="../images/image4.jpg">`
	}

	static get activators(){
		var activators= document.querySelector('.gallery__activators')
		activators.innerHTML =`<input type="radio" id="0" name="activator" checked="checked" class="gallery__activator"/>
					<input type="radio" id="1" name="activator" class="gallery__activator"/>
					<input type="radio" id="2" name="activator" class="gallery__activator"/>
					<input type="radio" id="3" name="activator" class="gallery__activator"/>`
	}


	static get constrols(){
		var controls= document.querySelector('.gallery__controls');
		controls.innerHTML =`<label class="gallery__control gallery__control--backward"></label>
					<label class="gallery__control gallery__control--forward"></label>`;
	}

	setEvents(){
		var activators= document.querySelector('.gallery__activators')
		var radios= activators.querySelectorAll('input')
		var gallery__images= document.querySelector('.gallery__images')
		var img = gallery__images.querySelectorAll('img')
		var controls= document.querySelector('.gallery__controls');
		var labelBackward= controls.querySelector('.gallery__control--backward')
		var labelForward= controls.querySelector('.gallery__control--forward')
		console.log(2);
		//Change image with the keyboard
		window.addEventListener('keydown', this.moveSelection.bind(this));
	
		//Change image with the arrows
		labelBackward.addEventListener("click", this.moveLeft.bind(this));
		labelForward.addEventListener("click", this.moveRight.bind(this));
	
		//Change image with the radio button
		radios[0].addEventListener("click", this.imageSelectionButton.bind(this));
		radios[1].addEventListener("click", this.imageSelectionButton.bind(this));
		radios[2].addEventListener("click", this.imageSelectionButton.bind(this));
		radios[3].addEventListener("click", this.imageSelectionButton.bind(this));

	}

	moveSelection(event) {
		switch (event.keyCode) {
			case 37:
			this.moveLeft.bind(this);
			break;
			case 39:
			this.moveRight.bind(this);
			break;
			}
		};

	moveLeft(){
		var activators= document.querySelector('.gallery__activators')
		var radios= activators.querySelectorAll('input')
		if(radios[1].checked){
			this.imageSelectionArrow(0);
		}else if(radios[2].checked){
			this.imageSelectionArrow(1);
		}else if(radios[3].checked){
			this.imageSelectionArrow(2);
		}
	}

	moveRight(){
		var activators= document.querySelector('.gallery__activators')
		var radios= activators.querySelectorAll('input')
		if(radios[0].checked){
			this.imageSelectionArrow(1);
		}else if(radios[1].checked){
			this.imageSelectionArrow(2);
		}else if(radios[2].checked){
			this.imageSelectionArrow(3);
		}
	}

	imageSelectionArrow(id){
		var activators= document.querySelector('.gallery__activators')
		var radios= activators.querySelectorAll('input')
		var gallery__images= document.querySelector('.gallery__images')
		var img = gallery__images.querySelectorAll('img')
		radios[id].checked=true;
		for (let index = 0; index < img.length; index++) {
			img[index].style.opacity=0;
			
		}
		img[id].style.opacity=1;
	}

	imageSelectionButton(event){
		var activators= document.querySelector('.gallery__activators')
		var radios= activators.querySelectorAll('input')
		var gallery__images= document.querySelector('.gallery__images')
		var img = gallery__images.querySelectorAll('img')
		var id = event.currentTarget.getAttribute("id");
		radios[id].checked=true;
		for (let index = 0; index < img.length; index++) {
			img[index].style.opacity=0;
			
		}
		img[id].style.opacity=1;
	}



	
}
