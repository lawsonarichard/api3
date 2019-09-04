## steps

- create repository
- clone repository
- cd into folder
- npm init -y
- npx gitignore node or npm i -g gitignore and then gitignore node.
- git add .
- git commit -m "message"
- git push -u origin master

React appllications are broken up into componetns

Express APIS are bbroken up tino Express Routers

When we do npm i axious the axios package goes into the node_modules folder.

## client server architecture

[client] <network (JSON)> [api] <> [data sources]

## request response cycle

client makes a request to a server

server produces a response and sends it to the client

[client] > request > [mw > mw > mw] > responds [client]

## Middleware

- can see the request and do something with the information from request
- can stop the request and produce a response
- can do nothing
- can do the same with the response object
- can modify the request or response objects

three types.

- built-in: no need to npm install
- thrid party : need to install using yarn or npm
- custom: we build it

can be used:

- globally with server.us()
- locally at a request handler.
