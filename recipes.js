'use strict';

const mongoose = require('mongoose');
const data = require('./data.js');
const Recipe = require('./models/Recipe.js');



mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });



  const createOneRecipe = async () => {
    try {
      await Recipe.create({
        title: 'Brocoli con patatas',
        level: 'UltraPro Chef',
        ingredients: ['Brocoli', 'Patatas', 'Ajo', 'Sal'],
        cuisine: 'Veggie',
        dishType: 'Dish',
        duration: 30,
        creator: 'Anna',
      })
      console.log(response.title)
      // .then((recipe) => {
      //   console.log(recipe)
      // })
      // .catch ((error) => {
      //   console.log(error)
      // })
    }
    catch (error) {
      console.log(error);
    }
  }

  const addManyRecipes = async (data) => {
    try {
      const response = await Recipe.insertMany(data);
      response.forEach((recipe) => console.log(recipe.title))
    }
    
    catch (error) {
      console.log(error);
    }
  }

  Recipe.insertMany(data)
    .then((listOfRecipes) => {
      listOfRecipes.forEach(recipe => console.log(recipe.title))
    })
    .catch((error) => {
      console.log(error);
    })

    createOneRecipe();
    addManyRecipes(data);