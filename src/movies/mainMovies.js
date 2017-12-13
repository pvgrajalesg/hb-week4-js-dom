import Movie from './movies.js'
import data from './moviesData.js'
import Control from './controls.js'

new Control(document.querySelector('.controls-container'), data)

new Movie(document.querySelector('.controls-container'), document.querySelector('.movies-container'), data)

//Movie.eventRotate