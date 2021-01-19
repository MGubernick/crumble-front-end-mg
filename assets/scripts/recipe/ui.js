'use strict'

// recipe ui
const store = require('./../store.js')

// const api = require('./api')

// create a recipe success and failure
const onCreateRecipeSuccess = function (response) {
  $('#message').text('Created Your Recipe! Let\'s bake!')
  store.recipe = response.recipe
  $('.create-button').show()
  $('#index-recipes').show()
  $('.change-pw-button').hide()
  $('.destroy-recipe').hide()
  $('form').trigger('reset')
}

const onCreateRecipeFailure = function (error) {
  $('#message').text(`Uh Oh..Something went wrong, take a look. Error: ${error.responseJSON.message}`)
}

// index all of a users recipes success and Failure
const onMyIndexSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  const myRecipesReverse = myRecipes.reverse()

  // myRecipes = an array of objects

  let recipeHTML = ''
  myRecipesReverse.forEach(function (currentRecipe) {
    let ingredientHTML = ''
    currentRecipe.ingredients.forEach(ing => {
      ingredientHTML += `<li>${ing}</li>`
    })
    if (currentRecipe.liked === true) {
      const currentRecipeHTML = (`
        <br>
        <div class="each-response">
        <div class="display-toprow">
          <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
          <small>(liked)</small>
        </div>
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
    } else {
      const currentRecipeHTML = (`
        <br>
        <div class="each-response">
        <div class="display-toprow">
          <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
        </div>
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
    }
  })
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text(`Drum Roll Please...Here are all ${myRecipes.length} of your recipes!:`)
  $('#after-create-button-click').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('#find-recipe-mine').show()
  $('#find-recipe-any').hide()
  $('.change-pw-button').hide()
  $('.destroy-recipe').hide()
  $('#find-recipe-mine').show()
  $('#message').text(' ')
}

const onMyIndexFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong...Error: ${error.responseJSON.message}`)
}

// index all recipes from all users

const onAllIndexSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  const myRecipesReverse = myRecipes.reverse()
  let recipeHTML = ''
  myRecipesReverse.forEach(function (currentRecipe) {
    let ingredientHTML = ''
    currentRecipe.ingredients.forEach(ing => {
      ingredientHTML += `<li>${ing}</li>`
    })

    if (currentRecipe.liked === true) {
      const currentRecipeHTML = (`
        <br>
        <div class="each-response">
        <div class="display-toprow">
          <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
          <small>(liked)</small>
        </div>
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
    } else {
      const currentRecipeHTML = (`
        <br>
        <div class="each-response">
        <div class="display-toprow">
          <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
        </div>
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
    }
  })
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text(`Drum Roll Please...Here are all ${myRecipes.length} of the recipes!:`)
  $('#after-create-button-click').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('#find-recipe-mine').hide()
  $('#find-recipe-any').show()
  // $('#delete-recipe').hide()
  $('.destroy-recipe').hide()
  $('.change-pw-button').hide()
  $('#message').text(' ')
}

const onAllIndexFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong...Error: ${error.responseJSON.message}`)
}

// find favorites success and failure

const onMyFavoritesSuccess = function (response) {
  store.recipe = response.recipe
  const myRecipes = store.recipe
  const myRecipesReverse = myRecipes.reverse()
  // filter for recipies that have liked key set to 'true'
  // add .reverse() to show newest first!
  const myFavorites = myRecipesReverse.filter(each => each.liked === true).map(function (favorites) {
    return favorites
  })
  let recipeHTML = ''
  myFavorites.forEach(function (currentRecipe) {
    let ingredientHTML = ''
    currentRecipe.ingredients.forEach(ing => {
      ingredientHTML += `<li>${ing}</li>`
    })

    if (currentRecipe.liked === true) {
      const currentRecipeHTML = (`
        <br>
        <div class="each-response">
        <div class="display-toprow">
          <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
          <small>(liked)</small>
        </div>
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
    } else {
      const currentRecipeHTML = (`
        <br>
        <div class="each-response">
        <div class="display-toprow">
          <h4><b>Recipe Name:</b> ${currentRecipe.name}</h4>
        </div>
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
    }
  })
  $('.recipe-display').show()
  $('.recipe-display-header').show()
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text(`Drum Roll Please...Here are ${myFavorites.length} of the communities favorites!:`)
  $('#after-create-button-click').hide()
  $('#show-update').hide()
  $('.update-form').hide()
  $('#find-recipe-mine').hide()
  $('#find-recipe-any').show()
  // $('#delete-recipe').hide()
  $('.destroy-recipe').hide()
  $('.change-pw-button').hide()
  $('#message').text(' ')
}

const onMyFavoritesFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong...Error: ${error.responseJSON.message}`)
}

// destroy a recipe success and failure
const destroyRecipeSuccess = function () {
  $('.recipe-display').hide()
  $('.recipe-display-header').hide()
  $('.destroy-recipe').hide()
  $('#show-update').hide()
  $('#find-recipe-mine').hide()
  $('#message').text('Recipe Burnt! It\'s gone!')
  $('form').trigger('reset')
}

const destroyRecipeFailure = function (error) {
  $('#message').text(`Uh Oh! Your burnt recipe is still here...Error: ${error.statusText}`)
}

const showOneRecipeSuccess = function (response) {
  // console.log('this is respone for showOne')
  store.recipe = response.recipe
  const thisRecipe = store.recipe
  // console.log('this is show one Recipe store.recipe', thisRecipe)

  let ingredientHTML = ''
  thisRecipe.ingredients.forEach(ing => {
    ingredientHTML += `<li>${ing}</li>`
  })
  let recipeHTML = thisRecipe
  recipeHTML = (`
      <br>
      <div class="each-response">
      <div class="display-toprow">
        <h4><b>Recipe Name:</b> ${thisRecipe.name}</h4>
        <button type="button" class="like-1">Like</button>
      </div>
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
  $('.change-pw-button').hide()
  $('.after-find-one').show()
  $('.destroy-recipe').show()
  // $('#delete-recipe').hide()
  $('#message').text(' ')
  $('form').trigger('reset')
}

const showOneRecipeFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong...Error: ${error.statusText}`)
  $('form').trigger('reset')
}

// show anyone's recipe success and failure functions
const showAnyRecipeSuccess = function (response) {
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
      <div class="display-toprow">
        <h4><b>Recipe Name:</b> ${thisRecipe.name}</h4>
        <button type="button" class="like-1">Like</button>
      </div>
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
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display-header').text('Hot from the oven, here is the recipe!:')
  $('#after-create-button-click').hide()
  $('.after-find-one').show()
  // $('#delete-recipe').hide()
  $('.destroy-recipe').hide()
  $('.change-pw-button').hide()
  $('#message').text(' ')
  $('form').trigger('reset')
}

const showAnyRecipeFailure = function (error) {
  $('#message').text('Oops! That Attempt Failed...because Error: ' + error.statusText)
  $('form').trigger('reset')
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
      <div class="display-toprow">
        <h4><b>Recipe Name:</b> ${updatedRecipe.name}</h4>
      </div>
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
  $('#updateRecipeModal').modal('toggle')
  $('.recipe-display').show()
  $('#find-recipe-mine').show()
  $('.recipe-display-header').show()
  // $('.recipe-display-header').text('Hot from the oven, here is your updated recipe!:')
  $('.recipe-display-header').text('Your update is baking!')
  $('.recipe-display').html(recipeHTML)
  $('.recipe-display').html(' ')
  $('.change-pw-button').hide()
  $('.destroy-recipe').show()
  $('.updateRecipeId').hide()
  $('.update-button-div').show()
  $('#message').text(' ')
  $('form').trigger('reset')
}

const updateRecipeFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong! Couldn't Update that because: ${error.responseJSON.message}`)
}

// show update success and failure

const lookAtUpdateSuccess = function (response) {
  store.recipe = response.recipe
  const thisRecipe = store.recipe
  // console.log('this is show one Recipe store.recipe', thisRecipe)

  let ingredientHTML = ''
  thisRecipe.ingredients.forEach(ing => {
    ingredientHTML += `<li>${ing}</li>`
  })
  let recipeHTML = thisRecipe
  recipeHTML = (`
      <br>
      <div class="each-response">
      <div class="display-toprow">
        <h4><b>Recipe Name:</b> ${thisRecipe.name}</h4>
        <button type="button" class="like-1">Like</button>
      </div>
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
  $('.change-pw-button').hide()
  $('.after-find-one').show()
  $('.destroy-recipe').show()
  $('.update-button-div').hide()
  // $('#delete-recipe').hide()
  $('#message').text(' ')
  $('form').trigger('reset')
}

const lookAtUpdateFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong...Error: ${error.statusText}`)
  $('form').trigger('reset')
}

// like button click success and Failure

const onLikeButtonSuccess = function (response) {
  store.recipe = response.recipe
  $('#message').text('Thanks for liking the recipe!')
  $('.like-1').hide()
  $('.display-toprow').append('<small>(liked)</small>')
}

const onLikeButtonFailure = function (error) {
  $('#message').text(`Uh Oh, something went wrong! Couldn't Update that because: ${error.responseJSON.message}`)
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
  updateRecipeFailure: updateRecipeFailure,
  showAnyRecipeSuccess: showAnyRecipeSuccess,
  showAnyRecipeFailure: showAnyRecipeFailure,
  onLikeButtonSuccess: onLikeButtonSuccess,
  onLikeButtonFailure: onLikeButtonFailure,
  onMyFavoritesSuccess: onMyFavoritesSuccess,
  onMyFavoritesFailure: onMyFavoritesFailure,
  lookAtUpdateSuccess: lookAtUpdateSuccess,
  lookAtUpdateFailure: lookAtUpdateFailure
}
