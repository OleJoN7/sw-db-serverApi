# sw-db-serverApi
# This is server RESTful Api for starwars-db project - without communication with database(just simulate my own database in this file)
- In this api i am using 'express' server for deploying a server,'bodyParser' module to have access to "request body" from frontend.
- 'cors' module - its a middleware,to let browser know that our server is secured and we can communicate our frontend part with backend.(can make request and get response).

#  Processing such requests:
 - / -> GET -> res = return db users(for testing that server response),
 - /signin -> POST -> res = resolve/reject,
 - /register -> POST -> res = return new user object

Also for testing - connection server with db, for making requests and getting response i used 'Postman' tool.
