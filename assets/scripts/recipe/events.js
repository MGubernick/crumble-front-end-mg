'use strict'

// recipe events
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// create functions that will be referenced by event listeners in app.js
const onShowCreate = function (event) {
  $('#after-create-button-click').show()
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

module.exports = {
  onShowCreate: onShowCreate,
  onCreateRecipe: onCreateRecipe,
  onMyIndex: onMyIndex
}
