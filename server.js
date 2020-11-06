const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('hi')
})

app.get('/apps', (req, res) => {
  res.json(appList)
})

app.get('/skills', (req, res) => {
  res.json(skillList)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const skillList = [
  { 
    id: 1, 
    skill: 'Charting',
    options: [
      'https://www.chartjs.org/',
      'https://d3js.org/',
      'https://www.highcharts.com/'
    ]
  },
  { 
    id: 2, 
    skill: 'Analytics',
    options: [
      'https://developers.google.com/analytics',
      'https://matomo.org/docs/'
    ]
  },
  { 
    id: 3, 
    skill: 'Authentication/Authorization',
    options: ['https://auth0.com/docs/']
  },
  { 
    id: 4, 
    skill: 'Payment',
    options: [
      'https://stripe.com/docs',
      'https://developers.braintreepayments.com/',
      'https://developer.authorize.net/api/reference/index.html'
    ]
  },
  { 
    id: 5, 
    skill: 'Search',
    options: ['https://www.algolia.com/doc/']
  },
  {
    id: 6,
    skill: 'Critical thinking / Problem solving',
  }
]

const appList = [
  {
    id: 1,
    app: 'Trello clone',
    instructions: 'Your application should include allow users to create, read, update, and delete the following: boards, columns, and individual cards. Once the foundation is set, you should implement dragging and dropping for the cards. Finally, require users to sign in and only allow them to access resources that they own.',
    skills: [3]
  },
  {
    id: 2,
    app: 'Shopping cart',
    instructions: 'Create a simple list of products that users can choose from to add to their cart. The user should be able to click on the cart icon and see the items, price of each item, and total price. Next, integrate the given payment processor option so that the user can check out. You should also implement authentication and authorization if you want to save the user information.',
    skills: [3, 4]
  },
  {
    id: 3,
    app: 'Calculator',
    instructions: 'Create a grid for your calculator with the following buttons: 0-9, +, -, /, *, ., =, and clear. Users should be able to perform addition, subtraction, multiplication, and division. You will also need to display the values as the user is typing.',
    skills: [6]
  },
  {
    id: 4,
    app: 'Blog',
    instructions: 'Your blog should allows users to create, read, update, and delete new posts. You should require them to sign in to access and manipulate their own posts. Any posts marked as published should be visible to everyone, but posts saved as drafts should only be visible to the post owner. Optionally, you can add a search feature to search for published posts and integrate analytics to see post performance.',
    skills: [1, 2, 3, 5]
  },
  {
    id: 5,
    app: 'Sudoku',
    instructions: 'Start by creating a 9x9 grid. Within the 9x9 grid, there will be 9 squares (3x3) outlined. The goal is for each row, column, and 3x3 square to contain the numbers 1-9 with no repeats. Your application should include a button that lets users generate starter boards with pre-filled numbers. Users can then fill out the board with their solution and submit for evaluation. You must check if their solution is correct and highlight problem areas if incorrect.',
    skills: [6]
  },
  {
    id: 6,
    app: 'Twitter clone',
    instructions: 'Your Twitter clone should require users to sign up for an account and log in to post a new tweet. They should be allowed to create, read, and delete a tweet. You should also include a search box where users can search for words that appear in other users tweets.',
    skills: [3, 5]
  },
  {
    id: 7,
    app: 'Admin dashboard',
    instructions: 'The admin dashboard will rely heavily on working with and displaying data. You can either integrate an analytics library and work with that data, pull data from an open API, or create your own mock data. Your dashboard should display this data using a charting library. The type of data is not important, so don\'t overthink that step. Search for public APIs on GitHub if you need data.',
    skills: [1, 2, 3]
  },
];
