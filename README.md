# Take-home test: Flashcards

## Description

This is the start of a simple flashcard app designed to help early learners of English
to identify some common English phonics sounds.

The app has two components:

* a Rails-based API
* a React-based front-end

See [Installation](#installation) for instructions on setting up the app.

Currently, the app requests a list of levels from the server and creates a dropdown list of levels. When a
level is selected, the app requests a list of flashcards for that level and displays them. Clicking on a flashcard
displays it in larger size underneath all the flashcards.

Along with the flashcard display are two buttons: **Needs Work** and **Got It**.

## Installation

You can clone or fork the repository if you wish.

You will find the Rails API in the `server` directory and the React front end in the `client` directory.

### Setting up the Rails app

```shell
$ cd server
$ bundle install
$ bin/setup
```

NB: The app's `.ruby-version` is currently set to Ruby 3.2.0. If you don't have this version installed, you can change
the `.ruby-version` file to a version you have installed.

### Setting up the React app

```shell
$ cd client
$ npm install
```

NB: Use a Node.js version above 18; otherwise, you may encounter issues running the client with Vite

## Running the app

Both client and server apps will need to run for the app to work, e.g.:

```shell
# Rails
$ cd server
$ bin/dev
$ bundle exec rails s

# React
$ cd client
$ npm run dev
```
