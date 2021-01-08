
# TOKEN="" ID=" " TITLE=" " DIRECTOR=" " sh curl-scripts/recipes/update.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

curl "https://fathomless-brook-30890.herokuapp.com/recipes/${ID}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "name": "'"${NAME}"'",
      "author": "'"${AUTHOR}"'",
      "cookieType": "'"${TYPE}"'",
      "ingredients": "'"${INGR}"'",
      "directions": "'"${DIR}"'"
    }
  }'

  echo
