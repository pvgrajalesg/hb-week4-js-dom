(function(){
    var radios= document.querySelectorAll('input');
	var img= document.querySelectorAll('img');
	var labelBackward= document.querySelector('.gallery__control--backward');
	var labelForward= document.querySelector('.gallery__control--forward');
	img[0].style.opacity= 1;

	//Cambio de imagen con el teclado
	window.addEventListener('keydown', moveSelection);

	//Cambio de imagen con flechas
	labelBackward.addEventListener("click", moveLeft);
	labelForward.addEventListener("click", moveRight);

	//Cambio de imagen con radio button
	radios[0].addEventListener("click", imageSelectionButton);
	radios[1].addEventListener("click", imageSelectionButton);
	radios[2].addEventListener("click", imageSelectionButton);
	radios[3].addEventListener("click", imageSelectionButton);

	function moveSelection(evt) {
		switch (evt.keyCode) {
			case 37:
			moveLeft();
			break;
			case 39:
			moveRight();
			break;
			}
		};

	function moveLeft(){
		if(radios[1].checked){
			imageSelectionArrow(0);
		}else if(radios[2].checked){
			imageSelectionArrow(1);
		}else if(radios[3].checked){
			imageSelectionArrow(2);
		}
	}

	function moveRight(){
		if(radios[0].checked){
			imageSelectionArrow(1);
		}else if(radios[1].checked){
			imageSelectionArrow(2);
		}else if(radios[2].checked){
			imageSelectionArrow(3);
		}
	}

	function imageSelectionArrow(id){
		radios[id].checked=true;
		for (let index = 0; index < img.length; index++) {
			img[index].style.opacity=0;
			
		}
		img[id].style.opacity=1;
	}

	function imageSelectionButton(evt){
		var id = event.currentTarget.getAttribute("id");
		radios[id].checked=true;
		for (let index = 0; index < img.length; index++) {
			img[index].style.opacity=0;
			
		}
		img[id].style.opacity=1;
	}

}
());
