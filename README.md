# aPart

## Overview

  aPart is a cost management app designed to help people living together to keep track of shared expenses, including due dates and who has and has not contributed to an assigned bill.
  
## Using the App

### Signing Up

Upon visiting the app, you will be prompted to log in or to create a new user account. A new user will need to register with a username, a display name that the members of your household will see, a password (hashed and secured using the bCrypt package), and an email address. 

In addition, if you wish to join an existing household, you will need to input their household code. If not, simply leave the household code blank and a new household will be created with you as its first tenant.

### Viewing Bills

The main page of the app houses your household feed: where all of your household's bills are tracked, with the most recent being displayed at the top. Each bill displays its creator, total amount, due date, tenants assigned to pay and their respective share of the bill.

When a tenant assigned to a bill has paid their share, click or tap on their name and, after confirming your choice, they will be marked as having paid. If you need to undo this, simply click on their name again to set their status to unpaid. You can also delete a bill by clicking on the "X" in the upper-righthand corner of its card.

### Creating a Bill

The Create Bill page allows you to create a bill specific to your household and assign tenants who need to pay a share of it. Doing so is as simple as inputting a title, description, amount and due date. Please note that if you're intending to pay your own share of a bill, you'll need to add yourself to the assigned tenants!

### The User Profile Page

This page allows you to view and edit your account information, including your email address and display name. If you need to invite someone to your household, this is also where your household's unique code can be found. Finally, if you need to leave your household and join a new one, you can do so by selecting the "Leave Household" option here.

## Technologies Used

* ReactJS and Create-React-App
* Node.js
* Express
* MongoDB and Mongoose
* Materialize CSS Framework
* PassportJS user authentication
* Bcrypt password hashing
* MomentJS

## Credits

Brian Hoff - Project Lead, Lead ReactJS Development  
https://github.com/bhoff5  
  
Colin Elving - Backend Development, Database and Authentication Management  
https://github.com/celving  
  
Paul David Lampe - UI/UX Design, Brand Management  
https://github.com/pdlampe  
  
Shannon Burke - UI/UX Design, Front-end Development  
https://github.com/shannon-burke  
  
