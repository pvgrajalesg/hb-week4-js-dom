(function () {
var jsonMovies = `{
	"categories": {
		"1" : "Terror",
		"2" : "Comedia"
	},

	"movies" : [ 
		{
			"name": "It",
			"image": "https://www.ecartelera.com/carteles/10000/10014/004_p.jpg",
			"review": "hola",
			"category": "Fantasía"
		},
		{
			"name": "sgfd",
			"image": "shgd",
			"review": "sfcd",
			"category": "Terror"
		},
		{
			"name": "gvdv",
			"image": "gsfd",
			"review": "gdv",
			"category": "Ciencia ficción"
		},
		{
			"name": "gdfv",
			"image": "fadd",
			"review": "gfdv",
			"category": "Terror"
		},
		{
			"name": "gdfv",
			"image": "fadd",
			"review": "gfdv",
			"category": "Comedia"
		}
		]
}`

	var movies = JSON.parse(jsonMovies);
	var categories= movies.categories;
	var keysCategories = Object.keys(categories);
	var peliculas= movies.movies;
	var keysMovies = Object.keys(peliculas);

	document.body.innerHTML=`<select class="moviesSelect"></select>`;
	var select= document.querySelector("select");

	var tag= `<option value="">Choose an category:</option>`;
	for (var keyCategories in keysCategories) {
		tag=tag+`<option value="${categories[keysCategories[keyCategories]]}">${categories[keysCategories[keyCategories]]}</option>`;
	}
	select.innerHTML=tag;

	var divContainer=document.createElement("div");
	divContainer.classList.add("movies-container");
	document.body.appendChild(divContainer);

	select.addEventListener("change", function(){
		var selectCategory = select.options[select.selectedIndex].value;
		for (let keyMovies in keysMovies) {
			if(peliculas[keysMovies[keyMovies]].category===selectCategory){
				let div=document.createElement("div");
				let img = document.createElement("img");
				div.classList.add("movie__container");
				img.src='../images/image1.jpg';
				div.appendChild(img);
				divContainer.appendChild(div);
			}
			console.log(peliculas[keysMovies[keyMovies]].category);
		}
	});

	

	

}()); 