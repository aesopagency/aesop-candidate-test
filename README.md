# Aesop Agency Assessment tests

## Introduction

This repository serves you as a candidate to put at test the skills we're looking for, also it will show roughly the usual stack we're used to work with in the agency so you'll get a practical idea of what you will be working with.

We like people who can work their way through a problem and approach them from different or unusual perspective, a Developer in the creative industry has often to think outside the box and be a quick problem solver, not afraid to experiment and learn from his/her past experiences.

Don't be afraid, the tests are deliberately short and shouldn't take away a lot of your spare time. You can either pick the one you feel looks more interesting and entertaining or even do them all if you would like, we mostly evaluate quality over quantity.

## Setup

To start fork this repository, the fork button in GitHub is on the top right this will make a copy of the entire repository on your GitHub account so that you can get work from and push changes on your version.

Clone the repo you just forked on your local machine and open a new branch, how you want to name the new branch is entirely up to you, use a short but descriptive name.

To start working run the usual commands in your terminal: `npm install` to install the dependencies and `npm start` to start the project. You must have nodejs installed on your machine in order to run these commands.

The repository is a generic stack of Nextjs working in conjuction with React created through the `create-next-app` utility, you shouldn't be involved in changing the basic things and your exercises are self contained in their files, but if you require need any documentation you can [find it here](https://).

After reading the exercises in this readme estimate the time needed for the task you have picked (or all of them), set yourself a time limit which you feel confident with, set an alarm on your computer or phone and compile it down on the file `NOTES.md` attached to this same repo.

Remember: you are allowed to "cheat" (obviously to a certain extent), don't be scared to ask things to Google, Stack Overflow or other documentation online. You will be asked at the end to document your sources if you needed the feel to look up for something.

## Exercise 1: Dancing Element

Your exercise folder is the following: `./src/pages/dancing-element/`

Can you replicate the following wobbly element in this video?

This is an open exercise with multiple possible solutions: you are allowed to use whatever you like. Document everything on the `NOTES.md` file at the end.

## Exercise 2: JSON Parsing

Your exercise folder is the following: `./src/pages/json-parsing/`, node: you need to be connected to the internet for this exercise.

You have a JSON coming from an unknown source, the JSON will be an array that it is used to build pages on your website, each object in the array will be associated with a component which has to print the, eg: you will have an `heading` component which will print `H1`s to `H6`s, 

A visual representation of the incoming array would be something like that:

```json
[
  {
    "_type": "heading",
    "attributes": {
      "id": "welcome",
      "classes": "bg-black text-white",
      "tag": "h3" 
    },
    "data": "Lorem ipsum dolor sit amet",
  },
  {
    "_type": "image",
    "attributes": {
      "id": "",
      "classes": "img-fluid",
      "src": "https://placehold.it/1024x768"
    },
    "data": "",
  },
  ...etc
]
```
The final HTML output should be the following:

```html
<h3 id="welcome" class="bg-black text-white">Lorem ipsum dolor sit amet</h3>
<img class="img-fluid" src="https://placehold.it/1024x768">
```

Do not trust the incoming JSON in any way, expect it to be malformed or with missing data so make sure you do the proper checks.

## Exercise 3: Bug fixing

The last exercise is

## Send the project to review

