import Movie from './movies.js'
import data from './moviesData.js'
import Control from './controls.js'
import indexCSS from '../index.scss'

/* eslint-disable */
new Control(document.querySelector('.controls-container'), data)

new Movie(document.querySelector('.controls-container'), document.querySelector('.cards-container'), data)
