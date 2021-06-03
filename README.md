# Soamee Full-stack web developer challenge

In this test, you are expected to write a small web application to manage a list of Books. Each book has a name, ISBN, and an author. The test consists of two parts, a RESTful API as the **backend** and the Javascript based **frontend** application.

There is no need to create a PR back to this repository once completed, please provide a link to your project repository for review.

## Backend implementation

Use the following structure to model the data

```
Author(Model):
    first_name: TextField
    last_name: TextField
```

```
Book(Model):
    name: TextField
    isbn: TextField
    author: ForeignKey(Author)
```

Implement the following API endpoints:

* **GET /books/** - Returns a list of books in the database in JSON format
* **GET /book/{{id}}/** - Returns a detail view of the specified book id. Nest author details in JSON format
* **GET /authors/** - Returns a list of authors in the database in JSON format
* **GET /author/{{id}}/** - Returns a detail view of the specified author id
* **POST /author/** - Creates a new author with the specified details - Expects a JSON body
* **POST /book/** - Creates a new book with the specified details - Expects a JSON body

_Optional_: You can go a step further by implementing API endpoints to update existing records if you like.

eg:
* **PUT /author/{{id}}** - Updates an existing author - Expects a JSON body
* **PUT /book/{{id}}** - Updates an existing book - Expects a JSON body

You are recommended to use **Node.js** to implement your backend and API layer, but you are free to use a different language/framework/libraries you are comfortable with.


## Frontend implementation

Implement a small frontend application to consume the API you developed above.

The frontend should be able to show a list of names of the books available in the database. Upon clicking the name of a book on the list, the user should be navigated to a more detailed view of the selected book, where they are presented with the ISBN and the author details. You should also implement two forms where the user is able to create/update authors and books (using the POST and PUT endpoints)
You are recommended to use **ReactJS** to create the frontend, but you are free to use a different Javascript framework.

## Purpose

* Evaluate your coding abilities
* Judge your technical experience
* Understand how you design a solution

## How you will be judged

You will be scored on,

* Coding standard, comments and style
* Overall solution design
* Appropriate use of source control
* Unit testing strategy (if present)

### Notes and recommendations

* Fork the repo and start working on yours
* The languages, frameworks and libraries mentioned are recommendations only, you are free to use whatever you are comfortable with.
* The project structure is up to you to decide
* You are recommended to use git commits in a logical manner to demonstrate the development progress
* Deploying to a PAAS like Heroku would be awesome to check how it works
* Writing tests and adhering to development standards/conventions will let you gain extra points :)
