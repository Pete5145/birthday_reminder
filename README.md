# Birthday Tracker
This is a simple React application that allows users to keep track of their friends and family's birthdays.

## Features
Displays a list of friends and family with their name, age, and profile picture
Shows the total number of birthdays for the current day
Provides a button to clear all birthdays from the list
Installation
To use this application, follow these steps:

Clone this repository to your local machine

`git clone`

https://github.com/Pete5145/birthday_reminder/tree/main

Install the necessary dependencies

`npm install`

Run the application in development mode

`npm start`

The application will now be running at http://localhost:3000

## Usage
The application displays a list of friends and family with their name, age, and profile picture. At the top of the list, the total number of birthdays for the current day is shown.

To clear all birthdays from the list, click the "Clear All" button. This will remove all entries from the list and reset the birthday count to 0.

## Data
The initial data for the application is stored in the data.js file in the src directory. This file exports an array of objects, each representing a person with their name, age, and profile picture file name.

The data can be modified by editing the data.js file and restarting the application.

## Components
The application is composed of several components:

App: This is the root component of the application. It manages the state for the list of users and the birthday count, and renders the other components.
Profile: This component displays the name, age, and profile picture for a single user.
Header: This component displays the total number of birthdays for the current day.
Button: This component is a simple button that allows the user to clear all birthdays from the list.
Styling
The styles for the application are defined in the index.css file in the src directory. The styles use CSS Flexbox for layout and are written in a mobile-first approach.


| Technologies used |
|-------------------|
| React             |
| CSS               |
| Vite              |


## Author

[Peter Imade](https://github.com/Pete5145) is the author of this project.


## Contributors

- [Ifeanyi Kalu](https://github.com/fazzy12) has contributed to this project.


