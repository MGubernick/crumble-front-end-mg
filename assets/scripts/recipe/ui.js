'use strict'

// recipe ui
const store = require('./../store.js')

// create a recipe success and failure
const onCreateRecipeSuccess = function (response) {
  $('#message').text('Created Your Recipe! Let\'s bake!')
  store.recipe = response.recipe
  console.log(store.recipe)
  $('.create-button').show()
  $('form').trigger('reset')
}

const onCreateRecipeFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

// index all of a users recipes success and Failure
const onMyIndexSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  // myRecipes = an array of objects
  console.log('these are my recipes ', myRecipes)
  let recipeHTML = ''
  myRecipes.forEach(function (currentRecipe) {
    const currentRecipeHTML = (`
      <div>
      <h5>Recipe Name: ${currentRecipe.name}</h5>
      <p>Recipe ID: ${currentRecipe._id}</p>
      <h6>Submitted By: ${currentRecipe.author}</h6>
      <p>Cookie Type: ${currentRecipe.cookieType}</p>
      <p>Ingredients Needed:</p>
      <ul>
        <li>${currentRecipe.ingredients}</li>
      </ul>
      <p>Baking Directions: ${currentRecipe.directions}</p>
      </div>
      `)
    recipeHTML += currentRecipeHTML
  })
  $('#recipe-display').show()
  $('#recipe-display-header').show()
  $('#recipe-display').html(recipeHTML)
  $('#recipe-display-header').text('Drum Roll Please...Here are all of your recipes!:')
  $('#after-create-button-click').hide()
  $('#message').text(' ')
}

const onMyIndexFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

// index all recipes from all users

const onAllIndexSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  // myRecipes = an array of objects
  console.log('these are my recipes ', myRecipes)
  let recipeHTML = ''
  myRecipes.forEach(function (currentRecipe) {
    const currentRecipeHTML = (`
      <div>
      <h5>Recipe Name: ${currentRecipe.name}</h5>
      <p>Recipe ID: ${currentRecipe._id}</p>
      <h6>Submitted By: ${currentRecipe.author}</h6>
      <p>Cookie Type: ${currentRecipe.cookieType}</p>
      <p>Ingredients Needed:</p>
      <ul>
        <li>${currentRecipe.ingredients}</li>
      </ul>
      <p>Baking Directions: ${currentRecipe.directions}</p>
      </div>
      `)
    recipeHTML += currentRecipeHTML
  })
  $('#recipe-display').show()
  $('#recipe-display-header').show()
  $('#recipe-display').html(recipeHTML)
  $('#recipe-display-header').text('Drum Roll Please...Here are all of the recipes!:')
  $('#after-create-button-click').hide()
  $('#message').text(' ')
}

const onAllIndexFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

// destroy a recipe success and failure
const destroyRecipeSuccess = function () {
  $('#recipe-display').hide()
  $('#recipe-display-header').hide()
  $('#message').text('Recipe Burnt! It\'s gone!')
  $('form').trigger('reset')
}

const destroyRecipeFailure = function (error) {
  $('#message').text('Uh Oh! Your burnt recipe is still here...Error: ' + error.responseJSON.message)
}

module.exports = {
  onCreateRecipeSuccess: onCreateRecipeSuccess,
  onCreateRecipeFailure: onCreateRecipeFailure,
  onMyIndexSuccess: onMyIndexSuccess,
  onMyIndexFailure: onMyIndexFailure,
  onAllIndexSuccess: onAllIndexSuccess,
  onAllIndexFailure: onAllIndexFailure,
  destroyRecipeSuccess: destroyRecipeSuccess,
  destroyRecipeFailure: destroyRecipeFailure
}
