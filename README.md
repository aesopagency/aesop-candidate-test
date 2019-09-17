# Aesop Agency Assessment tests

## Introduction

This repository serves you as a candidate to put at test the skills we're looking for, also it will show roughly the usual stack we're used to work with in the agency so you'll get a practical idea of what you will be working with.

We like people who can work their way through a problem and approach them from different or unusual perspective, a Developer in the creative industry has often to think outside the box and be a quick problem solver, not afraid to experiment and learn from his/her past experiences.

Don't be afraid, the tests are deliberately short and shouldn't take away a lot of your spare time. You can either pick the one you feel looks more interesting and entertaining or even do them all if you would like, we mostly evaluate quality over quantity.

## Setup

To start fork this repository, the fork button in GitHub is on the top right this will make a copy of the entire repository on your GitHub account so that you can get work from and push changes on your version.

Clone the repo you just forked on your local machine and open a new branch for each exercise you want to do, how you want to name the new branch is entirely up to you, use a short but descriptive name.

To start working run the usual commands in your terminal: `npm install` to install the dependencies and `npm start` to start the project. You must have nodejs >12 installed on your machine in order to run these commands.

The repository is a generic scaffolding of the Nextjs/React framework created through the `create-next-app` utility, you shouldn't be involved in changing the basic things and your exercises are self contained in their files, but if you require need any documentation you can [find it here](https://github.com/zeit/next.js).

After reading the exercises in this readme estimate the time needed for the task you have picked (or all of them), set yourself a time limit which you feel confident with, set an alarm on your computer or phone and start working on the exercise. 

If you do exceed your initial time limit stop and re-evaluate: 
- Is the exercise in a demonstrable state (MVP) and can committed as is? 
- Can you bring up a working prototype in the next 5 minutes or the exercise will be taking more of your time?

We will appreciate if the exercise is taking longer than expected, at this point if you think the exercises are taking too long it's better to stop and send even partially working code, 

Remember: you are allowed to "cheat" (obviously to a certain extent), don't be scared to ask things to Google, Stack Overflow or other documentation online. You will be asked at the end to comment on the exercise and document your sources if you needed to search up for something.

## Exercise 1: Dancing Element

Your exercise folder is the following: `./exercises/1-dancing-element/`

Can you replicate the following [dancing element in this video](https://i.imgur.com/Ew7bnTB.gifv)? 

Here are the following specs:

- The text should be Montserrat with colour #000000 
- The element background is HSL 57/100%/50%
- The element wobbles back and forth in a repeat loop each second
- The text slides in and out four times slower than the wobbly animation

This is an open exercise with multiple possible solutions: you are allowed to use whatever you like or reach the quickest solution you feel more comfortable with. You can install extra libraries off from `npm` if you wish. 

Document your findings and add any comments of your researches on the `NOTES.md` file at the end of the exercise. 

## Exercise 2: JSON Parsing

Your exercise folder is the following: `./exercises/2-json-parsing/`.

You will have a JSON coming from an unknown source, the JSON will be an array that it is used to build pages on your website, each object in the array will be associated with a component which has to print the, eg: you will have an `heading` component which will print `H1`s to `H6`s, an `image` component that prints `img` tags and so on.

An example representation of the incoming array would be something like that:

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

Of which the final HTML output should be the following:

```html
<h3 id="welcome" class="bg-black text-white">Lorem ipsum dolor sit amet</h3>
<img class="img-fluid" src="https://placehold.it/1024x768">
...etc
```

The scope is to find a solution on the main `Serializer` component inside the exercise folder to process the incoming JSON and call the appropriate sub-components (already included in the exercise) so that you will be able to render an HTML page from different JSON inputs.

Do not trust the incoming JSON in any way, expect it to be malformed or with missing data so make sure you do the proper checks wherever you feel more appropriate (you can edit the sub-components if you wish to do so).

Document your findings and add any comments of your researches on the `NOTES.md` file at the end of the exercise

## Exercise 3: Troubleshooting code

Your exercise folder is the following: `./exercises/3-troubleshoot/`.

The last exercise is a 3D scene built on top of [three.js](https://threejs.org/) (used as the renderer) and [DAT.gui](https://github.com/dataarts/dat.gui) as the control panel.

The 3D scene has few issues, your users submit these issues on your bug tracker:

- "Whenever I click the slider on dat.gui the control panel will resize following my cursor until I reload the page"
- "The rotation parameters on the control panel don't work correctly, if I put 90 degrees it doesn't look like it's rotating 90 degrees"
- "I tried to click on the 'Animate rotation' check box but the rotation isn't animating as it should"

Document your findings and add any comments of your researches on the `NOTES.md` file at the end of the exercise

## Send the project to review

To submit your exercises for a code review please open up a Pull Request from your forked repo to our original one.
If you forked through the Github web dashboard as instructed at the start of this document then you should be suggested from the web dashboard to open a PR pointing the parent repository.