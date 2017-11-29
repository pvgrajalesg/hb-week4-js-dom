(function(){
    var radios= document.querySelectorAll('input');
	var img= document.querySelectorAll('img');
	var labelBackward= document.querySelector('.gallery__control--backward');
	var labelForward= document.querySelector('.gallery__control--forward');
	img[0].style.opacity= 1;

	window.addEventListener('keydown', moveSelection);
	labelBackward.addEventListener("click", moveLeft);
	labelForward.addEventListener("click", moveRight);

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
			img[0].style.opacity= 1;
			radios[1].checked=false;
			radios[0].checked=true;
			img[1].style.opacity= 0;
			img[2].style.opacity= 0;
			img[3].style.opacity= 0;
		}else if(radios[2].checked){
			img[1].style.opacity= 1;
			radios[2].checked=false;
			radios[1].checked=true;
			img[0].style.opacity= 0;
			img[2].style.opacity= 0;
		}else if(radios[3].checked){
			img[2].style.opacity= 1;
			radios[3].checked=false;
			radios[2].checked=true;
			img[0].style.opacity= 0;
			img[1].style.opacity= 0;
			img[3].style.opacity= 0;
		}
	}

	function moveRight(){
		if(radios[0].checked){
			img[1].style.opacity= 1;
			radios[0].checked=false;
			radios[1].checked=true;
			img[0].style.opacity= 0;
			img[2].style.opacity= 0;
			img[3].style.opacity= 0;
		}else if(radios[1].checked){
			img[2].style.opacity= 1;
			radios[1].checked=false;
			radios[2].checked=true;
			img[0].style.opacity= 0;
			img[1].style.opacity= 0;
			img[3].style.opacity= 0;
		}else if(radios[2].checked){
			img[3].style.opacity= 1;
			radios[2].checked=false;
			radios[3].checked=true;
			img[0].style.opacity= 0;
			img[1].style.opacity= 0;
			img[2].style.opacity= 0;
		}
	}

	radios[0].addEventListener("click", function(){
		radios[1].checked=false;
		radios[2].checked=false;
		radios[3].checked=false;
		radios[0].checked=true;
		img[0].style.opacity= 1;
		img[1].style.opacity= 0;
		img[2].style.opacity= 0;
		img[3].style.opacity= 0;
	});

	radios[1].addEventListener("click", function(){
		radios[0].checked=false;
		radios[2].checked=false;
		radios[3].checked=false;
		radios[1].checked=true;
		img[0].style.opacity= 0;
		img[1].style.opacity= 1;
		img[2].style.opacity= 0;
		img[3].style.opacity= 0;
	});

	radios[2].addEventListener("click", function(){
		radios[0].checked=false;
		radios[1].checked=false;
		radios[3].checked=false;
		radios[2].checked=true;
		img[0].style.opacity= 0;
		img[1].style.opacity= 0;
		img[2].style.opacity= 1;
		img[3].style.opacity= 0;
	});

	radios[3].addEventListener("click", function(){
		radios[0].checked=false;
		radios[1].checked=false;
		radios[2].checked=false;
		radios[3].checked=true;
		img[0].style.opacity= 0;
		img[1].style.opacity= 0;
		img[2].style.opacity= 0;
		img[3].style.opacity= 1;
	});
}
());
