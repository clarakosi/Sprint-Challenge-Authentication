# Questions 

1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    * In express, middlewares are functions that have access to `req`, `res`, and `next` in the request-response cycle.
    * Express-session acts like cookies on the server by saving information on the session ID.
    * bcrypt is a hashing function that transforms strings into hashed strings. The function also includes salt rounds which determines how many hashed strings should be performed per second.
    * JWT is a web token that is generated by the server once a user is logged in and stored in the local storage. It can then be used for authentication purposes by the client-server. 
1. What does bcrypt do in order to prevent attacks?
    * bcrypt uses salt rounds to decrease the amount of hash strings created per second. This technique makes it harder for attackers to create rainbow tables. 
1. What are the three parts of the JSON Web Token?
    * header, payload, signature 