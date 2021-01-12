# Project 2: Crumble-front-end-mg

The second project for the course is to build a full stack application.  This app is called Crumble and is a cookie recipe sharing application. The application allows a user to create, search for, update, delete and like various cookie recipes!

## Link to Crumble-API-Repo
- [Crumble-API-Repo](https://github.com/MGubernick/crumble-API-mg)

## Other Important Links & Resources Used:

**Specific Links**
- [full-stack project repo](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project)
- [browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)

**Website Resources**
- [w3schools](w3schools.com)
- [developer.mozilla](developer.mozilla.org)
- [stackOverflow](stackOverflow.com)

**Other Resources**
- Classmate collabs!

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- The planning process for this project began with brinstorming ideas an landing on one that I thought could be a fun, interactive app for a user. The next step in the process included completing the full-stack-project-practice, this included drawing a wireframe.

### Authentication:
- The first part of the front-end building process included authentication functions on the app.  This part is started by writing curl-scripts to test the API connection and HTML to create the needed elements for the authentication process including: sign-up, sign-in, change-password and sign-out. Once I finished with the HTML, I created event listeners in my app.js file, event handlers in events.js, an ajax call to communicate with the API and return data to the user which is handled by the success and failure functions in ui.js.

### CRUD Recipes:
- This process began similar to the Authentication process.  First, I wrote curl-scripts to test the API and make sure the user will be able to properly CRUD a resource of their own. Once I tested all of the curl-scripts, I wrote the HTML that was needed to create the elements required for functions including: Create New Recipe (POST Method), Index My Recipe (GET Method - for all of the users recipes), Index All Recipes (GET Method - for all of the recipes in the db), Find One Recipe (GET Method - find one recipe based on it's id), Update a Recipe (PATCH - update recipe based on a specific id) and Delete Recipe (DELETE - delete based on a specific id)

### Problem-Solving:
- My **problem-solving strategy** bigan with spending a little bit of time trying to figure out how to solve a problem on my own, depending on what it was. I did this by working through any ideas that I could come up with right away.  Then, I would start to reference back to our lesson repos and use google as needed to search for resource like stackOverflow or other documentation that could help understand how to solve the problem at hand.  While troubleshooting on my own, I utilized zoom breakout rooms to work with fellow classmates to collaborate and brainstorm ideas.  After ~20 - 30minutes of brainstorming, if I was still stuck with no progress, I would submit an issue to the issues page on the projct repo.

### Everything Else:
- As I worked on my application's functionality, I would take breaks at the end of the day and work a little on my CSS, bootstrap and other styling features.  Its nice to see the style develop right along with the application itlself.  Once I had the required functionality completed, I had the opportunity to work on a reach goal function and create a 'like' button.  This function will allow the user to like recipes and then search by their favorites. When I finished this functionality, I went through and tested my app one step at a time and then wrote my README.md documentation. 

## User Stories:

- As a user, I want to create an account

- As a user, I want to log in to my account and change my password

- As a user, I want to submit a recipe of my own

- As a user, I want to check out all of my recipes

- As a user, I want to check out one of my recipes

- As a user, I want to like my own and other's recipes

## Technologies Used:
- HTML/CSS
- Bootstrap
- Javascript
- jQuery
- AJAX
- Crumble API
- Google

## Unsolved Problems:
- The problem that I am currently working on is a part of my Find My Favorites function.  Currently, this will display all of the recipes that have the 'liked' key's value set to 'true'.  This part works great but I want to only select the liked recipes by the specific user.
- I would like to eventually create a feature that allows the users to leave a review on other user's recipes.

## Wireframes
![Wireframe_v2](https://imgur.com/QF6dctW.png)
