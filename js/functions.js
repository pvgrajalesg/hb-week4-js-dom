(function(){
    var radios= document.querySelectorAll('input');
	var img= document.querySelectorAll('img');
	var labelBackward= document.querySelector('.gallery__control--backward');
	var labelForward= document.querySelector('.gallery__control--forward');
	img[0].style.opacity= 1;

	labelBackward.addEventListener("click", function(){
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
	});

	labelForward.addEventListener("click", function(){
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
	});
}
());
