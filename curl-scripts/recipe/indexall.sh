# TOKEN=" " sh curl-scripts/recipes/index.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

curl 'https://fathomless-brook-30890.herokuapp.com/recipes/all' \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
