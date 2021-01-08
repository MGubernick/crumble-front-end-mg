#!/bin/bash
# TOKEN= sh curl-scripts/auth/sign-out.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

API="https://fathomless-brook-30890.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
