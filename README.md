## Description
Virtual closet application that lets you create a user profile and keep track of the items in your closet. Inspired by the movie Clueless!

## User Story
```md
AS a person interested in fashion
I WANT a site to keep track of my clothes
SO THAT I don't have to dig through my closet to figure out what I own and always have my clothing inventory at my fingertips
```

## Acceptance Criteria
```md
GIVEN a closet inventory site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which explains the mission and vision for the site
WHEN I click on the login 
THEN I am prompted to sign-up by creating a username, password and entering an email
THEN my user credentials are saved and I am logged into the site
WHEN I click on the profile in the NAV
THEN I am taken to my user profile and can view existing clothing items, if any, or add new clothing items to my closet
WHEN I click on the option to add a new clothing item
THEN I am taken to a form where I can input type, brand, date purchased, description and image name
WHEN I click add item 
THEN I am taken back to my profile and the new item is added
WHEN I click on any of the clothing items in my profile
THEN I am able to see the details of the item and the option to delete the item
WHEN I click on the delete button
THEN I am taken back to my profile and the item is removed from my closet
WHEN I click on the logout option in the navigation
THEN I aam signed out of the site
```

## Installation
Follow the below steps to use the app:
1. Clone the repo into a local directory
2. Open a terminal in the correct directory and run 
```
npm install
```
3. Create a MySQL database using MySQL Workbench and run the schema in the db folder
4. Create a .env file 
```
DB_NAME=closet_db
DB_USER =root
DB_PASS = // your password
```
5. Run 
```
npm start
```

## Mock-up
Video of functionality: 
https://drive.google.com/file/d/17vae-jWNKdTYm8O0F1-65R2WZBe9bHYW/view 

A user profile:
![Profile view](/public/images/profile-view.png)
Clothing detail:
![Clothes detail view](/public/images/detail-view.png)
Add new item:
![Add clothing view](/public/images/add-view.png)

## Deployed link

## Key Focus of Project

* [Model-View-Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

* [Sequelize model](https://sequelize.org/master/class/lib/model.js~Model.html)

* [Handlebars.js](https://www.npmjs.com/package/express-handlebars)

* [Expressions](https://handlebarsjs.com/guide/expressions.html)

* [Built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

* [Custom helpers](https://www.npmjs.com/package/express-handlebars#helpers)

* [express-session](https://www.npmjs.com/package/express-session)

* [connect-session-store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize) 

* [Express.js session cookie](https://github.com/expressjs/session#cookie)

* [Express.js middleware](https://expressjs.com/en/guide/using-middleware.html)
