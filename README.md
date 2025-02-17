# Take-home test: Flashcards

## Description

This is the starts of a simple flashcards app designed to help early learners of English
to identify some common English phonics sounds.

The app has two components:

* a Rails-based API
* a React-based front-end

See [Installation](#installation) for instructions on setting up the app.

In its current state, the app requests a list of levels from the server and creates a dropdown list of levels. When a
level is selected, the app requests a list of flashcards for that level and displays them. Clicking on a flashcard
displays it in larger size underneath all the flashcards.

Along with the flashcard display are two buttons: **Needs Work** and **Got It**. These are not currently hooked up to
any functionality.

## Your task

Implement the **Needs Work** and **Got It** buttons so that they record the user's response to the flashcard.

When the user clicks either of the buttons, the app should:

* colour the flashcard in the levels list according to the user's response (green for **Got It**, red for **Needs Work**).
* send a request to the server to record the user's response.

The endpoint to update the server does not exist yet. You should create one that records the user's response in the
`ststus` field of the relevant word part record.

When refreshing the page or selecting a different level, the app should correctly colour the user's responses in the
list of word parts.

## Installation

You may download a copy of this repository from the GitHub page, or from [this link](https://github.com/innovationsforlearning/takehome-test/archive/refs/heads/main.zip). 
You can also fork the repoistory if you wish.

You will find the Rails API in the `server` directory and the React front-end in the `client` directory.

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

Both client and server apps will need to running for the app to work, e.g.:

```shell
# Rails
$ cd server
$ bin/dev
$ bundle exec rails s

# React
$ cd client
$ npm run dev
```

### Submitting your work

Either:

* Upload your amended application to a public repository on your GitHub account; or
* Save it as a ZIP file, ensuring that the `.git` directory is included, and email it to your contact.
