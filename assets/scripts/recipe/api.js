'use strict'

// recipe API
const config = require('./../config.js')
const store = require('./../store.js')

const createRecipe = function (recipeData) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: recipeData
  })
}

// api call for finding all of a users recipes
const myRecipeIndex = function (recipeData) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    data: recipeData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const recipeIndex = function (recipeData) {
  return $.ajax({
    url: config.apiUrl + '/recipes/all',
    method: 'GET',
    data: recipeData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createRecipe: createRecipe,
  myRecipeIndex: myRecipeIndex,
  recipeIndex: recipeIndex
}
