# TOKEN=" " NAME=" " AUTHOR=' ' TYPE='' INGREDIENTS={} DIRECTIONS='' sh curl-scripts/recipes/create.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

curl 'https://fathomless-brook-30890.herokuapp.com/recipes' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
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
