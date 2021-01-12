'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const recipeEvents = require('./recipe/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.after-sign-in').hide()
  $('#after-create-button-click').hide()
  $('.after-find-one').hide()
  $('.update-form').hide()
  $('#find-recipe-mine').hide()
  $('#find-recipe-any').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  // $('#message').show()

  // event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.welcome').on('click', authEvents.onWelcome)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-recipe').on('submit', recipeEvents.onCreateRecipe)
  $('.create').on('click', recipeEvents.onShowCreate)
  $('#all-my-recipes').on('click', recipeEvents.onMyIndex)
  $('#all-the-recipes').on('click', recipeEvents.onAllIndex)
  $('#my-favorite-recipes').on('click', recipeEvents.onMyFavorites)
  $('#delete-recipe').on('submit', recipeEvents.onDestroyIt)
  $('.destroy-recipe').on('click', recipeEvents.onDestroyButton)
  $('#find-recipe-mine').on('submit', recipeEvents.onShowIt)
  $('#find-recipe-any').on('submit', recipeEvents.onShowAny)
  $('#show-update').on('click', recipeEvents.onShowUpdate)
  $('#update-recipe').on('submit', recipeEvents.onUpdateOne)
  $('.change-pw-button').on('click', recipeEvents.onShowChangePass)
  $('.back-button').on('click', recipeEvents.onBackToMenu)
  $('.recipe-display').on('click', '.like-1', recipeEvents.onLikeButton)
  $('#createRecipeModal').on('shown.bs.modal', function () {
    $('#createRecipeModal').trigger('focus')
  })
  $('#updateRecipeModal').on('shown.bs.modal', function () {
    $('#updateRecipeModal').trigger('focus')
  })
})
