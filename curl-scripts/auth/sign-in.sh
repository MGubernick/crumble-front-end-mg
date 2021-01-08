#!/bin/bash
# EMAIL=" " PASSWORD=" " sh curl-scripts/auth/sign-in.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

API="https://fathomless-brook-30890.herokuapp.com"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASS}"'"
    }
  }'

echo
