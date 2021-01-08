# ID="" sh curl-scrips/recipes/show.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

curl   "https://fathomless-brook-30890.herokuapp.com/recipes/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

  echo
