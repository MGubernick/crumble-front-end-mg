'use strict'

// recipe API
const config = require('./../config.js')
const store = require('./../store.js')

const createRecipe = function (recipeData) {
  const newIngArr = recipeData.recipe.ingredients.split(',')
  recipeData.recipe.ingredients = newIngArr
  // console.log(recipeData)
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

// api call for deleting a recipe
const destroyRecipe = function (recipeData) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + recipeData.recipe._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showOneRecipe = function (recipeData) {
  return $.ajax({
    url: config.apiUrl + '/recipes/' + recipeData.recipe._id,
    method: 'GET',
    data: recipeData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showAnyRecipe = function (recipeData) {
  return $.ajax({
    url: config.apiUrl + '/recipes/any/' + recipeData.recipe._id,
    method: 'GET',
    data: recipeData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateRecipe = function (recipeData) {
  const newIngArr = recipeData.recipe.ingredients.split(',')
  recipeData.recipe.ingredients = newIngArr
  return $.ajax({
    url: config.apiUrl + '/recipes/' + store.recipe._id,
    method: 'PATCH',
    data: recipeData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Like Button

const likeButtonClick = function (recipeData) {
  console.log('this is store for like ', store.recipe)
  return $.ajax({
    url: config.apiUrl + '/recipes/like/' + store.recipe._id,
    method: 'PATCH',
    data: {
      recipe: {
        name: store.recipe.name,
        author: store.recipe.author,
        cookieType: store.recipe.cookieType,
        ingredients: store.recipe.ingredients,
        directions: store.recipe.directions,
        liked: true
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createRecipe: createRecipe,
  myRecipeIndex: myRecipeIndex,
  recipeIndex: recipeIndex,
  destroyRecipe: destroyRecipe,
  showOneRecipe: showOneRecipe,
  updateRecipe: updateRecipe,
  showAnyRecipe: showAnyRecipe,
  likeButtonClick: likeButtonClick
}
