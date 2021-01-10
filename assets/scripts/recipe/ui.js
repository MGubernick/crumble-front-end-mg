'use strict'

// recipe ui
const store = require('./../store.js')

// create a recipe success and failure
const onCreateRecipeSuccess = function (response) {
  $('#message').text('Created Your Recipe! Let\'s bake!')
  store.recipe = response.recipe
  // console.log(store.recipe)
  $('.create-button').show()
  $('#index-recipes').show()
  $('#create-recipe').hide()
  $('form').trigger('reset')
}

const onCreateRecipeFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

// index all of a users recipes success and Failure
const onMyIndexSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  console.log('these are all of my recipes ', myRecipes)
  // myRecipes = an array of objects
  // console.log('these are my recipes ', myRecipes)
  let recipeHTML = ''
  myRecipes.forEach(function (currentRecipe) {
    let ingredientHTML = ''
    currentRecipe.ingredients.forEach(ing => {
      ingredientHTML += `<li>${ing}</li>`
    })
    // console.log('current recipe ingredients', currentRecipe.ingredients)
    const currentRecipeHTML = (`
      <br>
      <div class="each-response">
      <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
      <p><b>Recipe ID:</b> ${currentRecipe._id}</p>
      <h6><b>Submitted By:</b> ${currentRecipe.author}</h6>
      <p><b>Cookie Type:</b> ${currentRecipe.cookieType}</p>
      <p><b>Ingredients Needed:</b></p>
      <ul>
        ${ingredientHTML}
      </ul>
      <p><b>Baking Directions:</b> ${currentRecipe.directions}</p>
      </div>
      <br>
      `)
    recipeHTML += currentRecipeHTML
  })
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text(`Drum Roll Please...Here are all ${myRecipes.length} of your recipes!:`)
  $('#after-create-button-click').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('#find-recipe').show()
  $('#delete-recipe').show()
  $('#find-recipe').show()
  $('#message').text(' ')
}

const onMyIndexFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

// index all recipes from all users

const onAllIndexSuccess = function (response) {
  // console.log(response)
  store.recipe = response.recipe
  const myRecipes = store.recipe
  // myRecipes = an array of objects
  console.log('these are all of the recipes ', myRecipes)
  let recipeHTML = ''
  myRecipes.forEach(function (currentRecipe) {
    let ingredientHTML = ''
    currentRecipe.ingredients.forEach(ing => {
      ingredientHTML += `<li>${ing}</li>`
    })
    // console.log('current recipe ingredients', currentRecipe.ingredients)
    const currentRecipeHTML = (`
      <br>
      <div class="each-response">
      <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
      <p><b>Recipe ID:</b> ${currentRecipe._id}</p>
      <h6><b>Submitted By:</b> ${currentRecipe.author}</h6>
      <p><b>Cookie Type:</b> ${currentRecipe.cookieType}</p>
      <p><b>Ingredients Needed:</b></p>
      <ul>
        ${ingredientHTML}
      </ul>
      <p><b>Baking Directions:</b> ${currentRecipe.directions}</p>
      </div>
      <br>
      `)
    recipeHTML += currentRecipeHTML
  })
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text(`Drum Roll Please...Here are all ${myRecipes.length} of the recipes!:`)
  $('#after-create-button-click').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('#find-recipe').show()
  $('#delete-recipe').show()
  $('#find-recipe').show()
  $('#message').text(' ')
}

const onAllIndexFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

// destroy a recipe success and failure
const destroyRecipeSuccess = function () {
  $('.recipe-display').hide()
  $('.recipe-display-header').hide()
  $('#message').text('Recipe Burnt! It\'s gone!')
  $('form').trigger('reset')
}

const destroyRecipeFailure = function (error) {
  $('#message').text('Uh Oh! Your burnt recipe is still here...Error: ' + error.responseJSON.message)
}

const showOneRecipeSuccess = function (response) {
  store.recipe = response.recipe
  const thisRecipe = store.recipe
  let ingredientHTML = ''
  thisRecipe.ingredients.forEach(ing => {
    ingredientHTML += `<li>${ing}</li>`
  })
  let recipeHTML = thisRecipe
  recipeHTML = (`
      <br>
      <div class="each-response">
      <h4><b>Recipe Name:</b> ${thisRecipe.name}</h4>
      <p><b>Recipe ID:</b> ${thisRecipe._id}</p>
      <h6><b>Submitted By:</b> ${thisRecipe.author}</h6>
      <p><b>Cookie Type:</b> ${thisRecipe.cookieType}</p>
      <p><b>Ingredients Needed:</b></p>
      <ul>
        ${ingredientHTML}
      </ul>
      <p><b>Baking Directions:</b> ${thisRecipe.directions}</p>
      </div>
      <br>
      `)
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('#show-update').show()
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text('Hot from the oven, here is your recipe!:')
  $('#after-create-button-click').hide()
  $('.after-find-one').show()
  $('#delete-recipe').show()
  $('#message').text(' ')
  $('form').trigger('reset')
}

const showOneRecipeFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

// Figure out why updatedRecipe.ingredients.forEach isn't a function....
const updateRecipeSuccess = function (response) {
  store.recipe = response.recipe
  const updatedRecipe = store.recipe
  let ingredientHTML = ''
  updatedRecipe.ingredients.forEach(ing => {
    ingredientHTML += `<li>${ing}</li>`
  })
  let recipeHTML = updatedRecipe
  recipeHTML = (`
      <br>
      <div class="each-response">
      <h4><b>Recipe Name:</b> ${updatedRecipe.name}</h4>
      <p><b>Recipe ID:</b> ${updatedRecipe._id}</p>
      <h6><b>Submitted By:</b> ${updatedRecipe.author}</h6>
      <p><b>Cookie Type:</b> ${updatedRecipe.cookieType}</p>
      <p><b>Ingredients Needed:</b></p>
      <ul>
        ${ingredientHTML}
      </ul>
      <p><b>Baking Directions:</b> ${updatedRecipe.directions}</p>
      </div>
      <br>
      `)
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('.recipe-display-header').text('Hot from the oven, here is your updated recipe!:')
  $('.recipe-display').html(recipeHTML)
  $('#update-recipe').hide()
  $('#message').text(' ')
  $('form').trigger('reset')
}

const updateRecipeFailure = function (error) {
  $('#message').text('Uh Oh, something went wrong! Couldn\'t Update that because: ' + error.responseJSON)
}

module.exports = {
  onCreateRecipeSuccess: onCreateRecipeSuccess,
  onCreateRecipeFailure: onCreateRecipeFailure,
  onMyIndexSuccess: onMyIndexSuccess,
  onMyIndexFailure: onMyIndexFailure,
  onAllIndexSuccess: onAllIndexSuccess,
  onAllIndexFailure: onAllIndexFailure,
  destroyRecipeSuccess: destroyRecipeSuccess,
  destroyRecipeFailure: destroyRecipeFailure,
  showOneRecipeSuccess: showOneRecipeSuccess,
  showOneRecipeFailure: showOneRecipeFailure,
  updateRecipeSuccess: updateRecipeSuccess,
  updateRecipeFailure: updateRecipeFailure
}
