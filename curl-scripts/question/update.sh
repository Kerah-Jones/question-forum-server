# sh curl-scripts/index.sh

curl "http://localhost:4741/questions/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  " question": {
    "question": "'"${QUESTION}"'",
    "description": "'"${DESCRIPTION}"'"
  }
}'
