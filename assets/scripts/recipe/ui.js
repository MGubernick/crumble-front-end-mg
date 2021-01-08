'use strict'

// recipe ui
const store = require('./../store.js')

// create a recipe success and failure
const onCreateRecipeSuccess = function (response) {
  // $('.click-space').on('click', gameEvents.onSpaceClick)
  $('#change-password').hide()
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
      <h5>Recipe Name: ${myRecipes.name}</h5>
      <p>Recipe ID: ${myRecipes._id}</p>
      <h6>Submitted By: ${myRecipes.author}</h6>
      <p>Cookie Type: ${myRecipes.cookieType}</p>
      <p>Ingredients Needed:</p>
      <ul>
        <li>${myRecipes.ingredients}</li>
      </ul>
      <p>Baking Directions: ${myRecipes.directions}</p>
      </div>
      `)
    recipeHTML += currentRecipeHTML
  })
  $('#recipe-display').html(recipeHTML)
  $('#message').text('Drum Roll Please...Here are all of your recipes!:')
  $('#after-create-button-click').hide()
}

const onMyIndexFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

module.exports = {
  onCreateRecipeSuccess: onCreateRecipeSuccess,
  onCreateRecipeFailure: onCreateRecipeFailure,
  onMyIndexSuccess: onMyIndexSuccess,
  onMyIndexFailure: onMyIndexFailure
}
