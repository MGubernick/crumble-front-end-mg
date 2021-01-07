'use strict'

// Auth ui
const store = require('./../store.js')

// Sign Up Success and Failrue functions.
const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful!')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Oops! Sign Up Failed...because Error: ' + error.responseJSON.message)
}

// Sign In Success and Failure functions.
const signInSuccess = function (response) {
  $('#message').text('Sign In Successful! Make Some Cookies!')

  store.user = response.user
  // console.log('store after is: ', store)
  $('.before-sign-in').hide()
  $('.after-sign-in').show()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Oops! Sign In Failed...because Error: ' + error.responseJSON.message)
}

// change password success and failure
const changePasswordSuccess = function () {
  $('#message').text('Changed Your Password Successfully!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Ooops! Your Password Didn\'t Change...because Error: ' + error.responseJSON.message)
}

// sign out success and failure
const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully! See Ya Next Time!')
  $('.before-sign-in').show()
  $('.after-sign-in').hide()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Uh Oh! Sign Out Failed...because: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
