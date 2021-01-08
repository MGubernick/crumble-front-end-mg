'use strict'

// recipe events
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// create functions that will be referenced by event listeners in app.js
const onShowCreate = function (event) {
  $('#after-create-button-click').show()
  $('#recipe-display').hide()
  $('#recipe-display-header').hide()
  $('form').trigger('reset')
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

module.exports = {
  onShowCreate: onShowCreate,
  onCreateRecipe: onCreateRecipe,
  onMyIndex: onMyIndex,
  onAllIndex: onAllIndex,
  onDestroyIt: onDestroyIt
}
