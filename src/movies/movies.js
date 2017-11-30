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

	document.body.innerHTML=`<select id="movies"></select>`;
	var select= document.querySelector("select");

	var tag= `<option value="">Choose an category:</option>`;
	for (var keyCategories in keysCategories) {
		tag=tag+`<option value="${categories[keysCategories[keyCategories]]}">${categories[keysCategories[keyCategories]]}</option>`;
	}
	select.innerHTML=tag;

	select.addEventListener("change", function(){
		var selectCategory = select.options[select.selectedIndex].value;
		console.log(selectCategory);
		for (var keyMovies in keysMovies) {
			if(peliculas[keysMovies[keyMovies]].category===selectCategory){
				var img = document.createElement("img");
				document.body.appendChild(img);
		}
		console.log(peliculas[keysMovies[keyMovies]].category);
	}
});

	

	

}()); 