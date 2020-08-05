curl 'http://localhost:4741/answers' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "answer": {
      "content": "'"${CONTENT}"'",
      "owner":"'"${OWNER}"'"
    }
  }'
