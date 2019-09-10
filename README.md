## TSF TASK 2(Phase1)

Task Details:

* Create a simple dynamic website which has the following specs.
* Start with creating dummy data in database for upto 10 users.
Database options: Mysql, Mongo, Postgres, etc. User table will
have basic fields such as name, email, current credit etc. Transfers
table will record all transfers happened.
* Flow: Home Page > View all Users > Select and View one User >
Transfer Credit > Select user to transfer to > View all Users. Credit
is sort of points which can be transferred from one user to another
user.
* No Login Page. No User Creation. Only transfer of credit between
multiple users.
* Host the website at 000webhost, github.io, heroku app or any
other free hosting provider. Check in code in gitlab.

## Demo

The site is deployed at ```https://creditmanager.herokuapp.com/```

## Built With

* Nodejs(Express)
* Mysql Database(Sequelize ORM) 

## HOW TO RUN ON LOCALHOST

* Clone The Repository
* run ```npm install``` to install all dependencies
* run ```node server.js``` to run the server
* Run ```http://localhost:3000``` to view the app
