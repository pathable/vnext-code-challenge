# Pathable Code Challenge

Do you want to join Pathable as a developer? Great. Read this document and then submit your solution. Good luck.

## Machine setup

- [Install Meteor](https://www.meteor.com/install)

## Challenge setup

### Repository setup

Please following the instructions here exactly. Getting setup correctly is part of the challenge! ;)

- This git repository needs to be used as your initial state.
- Your solution should not be public.
- When you are done zip your repository and send us a link with proper access to download it.
  - It's better to remove node_modules and .meteor/local before zipping it.

### How to install dependencies

```bash
meteor npm install -g yarn
meteor yarn install
```

### How to run

```bash
meteor yarn start
```

### How to run tests

```bash
meteor yarn cypress
```

## What you need to deliver

A mini-application that allows event hosts to check people into an event.

The home page should show:

- an event selector (`select`) displaying the name of each event, by default displaying `Select an event` (communities collection);
- a list of people registered in the selected event (people collection).

The list of people should allow the event host to:

- see first and last name together (full name), company name, title, check-in date, and check-out date both using `MM/DD/YYYY, HH:mm` format or `N/A`;
- check people into the event by clicking the "Check-in {person firstName and lastName}" button;
- if the user was checked-in over five seconds ago, we want to see a "Check-out {person firstName and lastName}" check-out button .

Between the event selector and the list of people we want to see a summary like this:

- `People in the event right now: 10`;
- `People by company in the event right now: Green Group (10), Hoppe Group (5)`;
- `People not checked-in: 200`;

The page needs to be reactive -- no refresh should be needed to display the latest data.

## Implementation rules

- You must explain your ideas as comments in the code, we want to see how you express yourself in written English;
- You must use Meteor as builder and runner, React as view layer and MongoDB as data layer;
- You must use MongoDB embedded in Meteor, don't configure the project to access a different MongoDB URL;
- You must not insert new documents into communities nor into the people collection;
- You must not change `initial-data.js`;
- You can add new dependencies;
- You can style the application.

## Important

- An automatic process will check your solution -- please follow the requirements as close as possible. Only submissions that pass the tests will be considered;
- We are not going to answer any questions about this challenge, so that all submissions can be fairly compared.

## How to delivery your challenge

Apply to a developer position [here](https://jsco.re/38idf), your zipped repository URL solving this challenge is of one the form fields.
