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

  // event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-recipe').on('submit', recipeEvents.onCreateRecipe)
  $('.create-button').on('click', recipeEvents.onShowCreate)
  $('#index-my-recipes').on('click', recipeEvents.onMyIndex)
  // $('.all-the-recipes').on('click', recipeEvents.onRecipeIndexAll)
})
