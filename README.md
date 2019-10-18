# Pathable Code Challenge

Do you want to join Pathable as a developer? Great. Read this document and then submit your solution. Good luck.

## Machine setup

- [Install Meteor](https://www.meteor.com/install)

## Challenge setup

### Repository setup

Please following the instructions here exactly. Getting setup correctly is part of the challenge! ;)

- This git repository needs to be used as your initial state.
- Please publish your version of this repository somewhere private
  - IMPORTANT: Your solution should not be public.
    - You can publish it anywhere you prefer. Gitlab and Bitbucket are free for private repository with a single developer
  - Please add these public SSH keys:

    ```bash
        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCqQZDC4RV1Zyw7f1XFYAiaEYFXD8j2cHi5Sg/eVyq8ts3WIdEqRET0Vgdu52cAQdhq12FBMOEklqki2szid+8woIBcevwz+6wo19WNt7JHXWFuic+oR39Bplw41elKoAx7APo135nP/z1BolcywXBFUlA72PPytrpbgeic6ZYRk2Df+DRq+o0Jl0wexs7E9F0AK6B4oRQ8Ybq6I8odT7Hl5jIW0sXQzzGvdgOsaV4W+SqzPFai2y1FZs5A0bA/3JRhielLR8Hyin2lp6FTom7TrSbWCbRj+PUX4mGs3tHYydl+m4rFC4F/CPtxnrcbGog6wtCgmNCifXe9d/TY/AtH jenkins@ip-172-31-91-146 
    ```

    ```bash
        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDQFVf3TXBOoUyw3GXCRCkM85JYnSx+MT4W7d3bm7RZ7p9xZG9QcQRSvVDg3uc0Fjt2ujzxditMW6epcn5irtByuW55TnKSbCUl9Xl0jlqgCW3GDtP1BCE6xH2iuUjQSSHCFSD7CqjgK4zAdgpOY3r3oZtMoOmHrQDyOGBG4XAQz6LE9u+E3NBLf5STBpR+uvuFAzIimcGVhyeznbyPtUELgHDyNFIlMqzAr7chl8m/x/zm808FLnE3oIUgg+80IbgbF3fmktiNdNgCE6gWwZniVe3avDUX1o2g8BqtYuyFgETugQBy31Y/mZoPfzl2DE7nR8+QF/l4IAW4Owt4XJS5 filipe-macbook 
    ```

- Remember to push everything that you have locally before submitting your challenge. We will only use content that is available in your published repository.

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

Apply to a developer position [here](https://jsco.re/38idf), your repository SSH URL solving this challenge is of one the form fields.
