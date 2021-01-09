'use strict'

// recipe events
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('./../store.js')

// create functions that will be referenced by event listeners in app.js
const onShowCreate = function (event) {
  $('#after-create-button-click').show()
  $('#create-recipe').show()
  $('#change-password').hide()
  $('.change-pw-button').show()
  $('#recipe-display').hide()
  $('#recipe-display-header').hide()
  $('.update-form').hide()
  $('#index-recipes').hide()
  $('#delete-recipe').hide()
  $('#find-recipe').hide()
  $('form').trigger('reset')
}

const onShowChangePass = function (event) {
  $('#change-password').show()
  $('.change-pw-button').hide()
}

const onShowUpdate = function (event) {
  $('.update-form').show()
  $('#recipe-display').hide()
  $('#recipe-display-header').hide()
  $('#after-create-button-click').hide()
  $('#find-recipe').hide()
  $('#delete-recipe').hide()
  $('form').trigger('reset')
}

const onBackToMenu = function (event) {
  $('#after-create-button-click').hide()
  $('#index-recipes').show()
  $('.change-pw-button').show()
  $('#change-password').hide()
  $('#find-recipe').hide()
  $('#delete-recipe').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('#recipe-display').hide()
  $('#recipe-display-header').hide()
}

const onCreateRecipe = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)
  // console.log(recipeData)
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

const onDestroyIt = function (event) {
  event.preventDefault()

  const form = event.target
  const recipeData = getFormFields(form)

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

const onUpdateOne = function (event) {
  event.preventDefault()
  // console.log(store)
  const form = event.target
  const recipeData = getFormFields(form)

  api.updateRecipe(recipeData)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
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
  onBackToMenu: onBackToMenu
}
