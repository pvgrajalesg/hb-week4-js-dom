import Movie from './movies.js'
import data from './moviesData.js'
import Control from './controls.js'

new Control(document.querySelector('.controls'), data)

new Movie(document.querySelector('.movies-container'), data)