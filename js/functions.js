(function(){
    var radios= document.querySelectorAll('input');
    var img= document.querySelectorAll('img');
    console.log(radios[0]);

    	for (var i = 0, length = radios.length; i < length; i++)
		{
			radios[i].addEventListener("click", handle(radios[i].getAttribute("id")));
		}

		function handle(id){
			//if(radios[i].checked){
				console.log(id);
    			if(id=="1"){
    				img[0].style.opacity= 1;
    			}else if(id=="2"){
    				img[1].style.opacity= 1;
    			}else if(id=="3"){
    				img[2].style.opacity= 1;
    			}
			//}
		}

    //radios.addEventListener("click", handle);

  /*  var imagenes=["../img/imagen1.jpg", "../img/imagen2.jpg", "../img/imagen3.jpg", "../img/imagen4.jpg", "../img/imagen5.jpg", "../img/imagen6.jpg", "../img/imagen7.jpg"]
    img.src=imagenes[3];*/
}
());
