# socketio-chat

## Send message to all clients connected
```bash
curl --location --request POST 'http://localhost:3000/chat' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "whats up?"
}'
```

## Send message to specific client connected
```bash
curl --location --request POST 'http://localhost:3000/chat' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "whats up?",
    "socketId": "Xxwkbg8N41RL9jr1AAAB"
}'
```

## Start chat with clients connected
[start new web client](http://localhost:3000/front)
