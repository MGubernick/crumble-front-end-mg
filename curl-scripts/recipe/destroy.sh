# TOKEN=" " ID=" " sh curl-scripts/recipes/destroy.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

curl "https://fathomless-brook-30890.herokuapp.com/recipes/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
