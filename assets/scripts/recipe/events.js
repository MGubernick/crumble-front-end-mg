'use strict'

// recipe events
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

// create functions that will be referenced by event listeners in app.js
const onShowCreate = function (event) {
  $('#after-create-button-click').show()
  $('#create-recipe').show()
  $('#change-password').hide()
  $('.change-pw-button').hide()
  $('.recipe-display').hide()
  $('.recipe-display-header').hide()
  $('.update-form').hide()
  // $('#delete-recipe').hide()
  $('#find-recipe-mine').hide()
  $('#find-recipe-any').hide()
  $('#show-update').hide()
  $('form').trigger('reset')
}

const onShowChangePass = function (event) {
  $('#change-password').show()
  $('.change-pw-button').hide()
}

const onShowUpdate = function (event) {
  $('.update-form').show()
  $('#after-create-button-click').hide()
  $('.change-pw-button').hide()
  $('#find-recipe-mine').hide()
  $('#find-recipe-any').hide()
  // $('#delete-recipe').hide()
  $('form').trigger('reset')
}

const onBackToMenu = function (event) {
  $('#after-create-button-click').hide()
  $('#index-recipes').show()
  $('.change-pw-button').show()
  $('#change-password').hide()
  $('#find-recipe-mine').hide()
  $('#find-recipe-any').hide()
  // $('#delete-recipe').hide()
  $('.destroy-recipe').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('.recipe-display').hide()
  $('.recipe-display-header').hide()
  $('#message').text('Welcome Back To The Menu:')
}

const onDestroyButton = function (event) {
  // $('#delete-recipe').show()
}

const onCreateRecipe = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)

  api.createRecipe(recipeData)
    .then(function (response) {
      return response
    })
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onCreateRecipeFailure)
}

const onMyIndex = function (event) {
  const form = event.target
  const recipeData = getFormFields(form)

  api.myRecipeIndex(recipeData)
    .then(ui.onMyIndexSuccess)
    .catch(ui.onMyIndexFailure)
}

const onAllIndex = function (event) {
  const form = event.target
  const recipeData = getFormFields(form)

  api.recipeIndex(recipeData)
    .then(ui.onAllIndexSuccess)
    .catch(ui.onAllIndexFailure)
}

const onMyFavorites = function (event) {
  const form = event.target
  const recipeData = getFormFields(form)

  api.myFavorites(recipeData)
    .then(ui.onMyFavoritesSuccess)
    .catch(ui.onMyFavoritesFailure)
}

const onDestroyIt = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)
  recipeData.recipe._id = store.recipe._id

  api.destroyRecipe(recipeData)
    .then(ui.destroyRecipeSuccess)
    .catch(ui.destroyRecipeFailure)
}

const onShowIt = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)
  api.showOneRecipe(recipeData)
    .then(ui.showOneRecipeSuccess)
    .catch(ui.showOneRecipeFailure)
}

const onShowAny = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)

  api.showAnyRecipe(recipeData)
    .then(ui.showAnyRecipeSuccess)
    .catch(ui.showAnyRecipeFailure)
}

const onUpdateOne = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)
  // recipeData.recipe.ingredients = store.recipe.ingredients
  recipeData.recipe._id = store.recipe._id

  api.updateRecipe(recipeData)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

const onLookAtUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)
  recipeData.recipe._id = store.recipe._id

  api.showOneRecipe(recipeData)
    .then(ui.lookAtUpdateSuccess)
    .catch(ui.lookAtUpdateFailure)
}

const onLikeButton = function () {
  store.recipe.liked = true

  api.likeButtonClick(store)
    .then(ui.onLikeButtonSuccess)
    .catch(ui.onLikeButtonFailure)
}

module.exports = {
  onShowCreate: onShowCreate,
  onCreateRecipe: onCreateRecipe,
  onMyIndex: onMyIndex,
  onAllIndex: onAllIndex,
  onDestroyIt: onDestroyIt,
  onShowIt: onShowIt,
  onShowUpdate: onShowUpdate,
  onUpdateOne: onUpdateOne,
  onShowChangePass: onShowChangePass,
  onBackToMenu: onBackToMenu,
  onShowAny: onShowAny,
  onDestroyButton: onDestroyButton,
  onLikeButton: onLikeButton,
  onMyFavorites: onMyFavorites,
  onLookAtUpdate: onLookAtUpdate
}
