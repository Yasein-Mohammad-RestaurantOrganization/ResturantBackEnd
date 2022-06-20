'use strict';
const drinks = (sequelize, DataTypes) => 
sequelize.define('coffeeHouse', {
    drinkName: {
        type: DataTypes.STRING,
        required: true
    },
    status: {
        type: DataTypes.STRING,
        required: true
    },
    ingredients: {
        type: DataTypes.STRING,
        required: true
    },
    size: {
        type: DataTypes.STRING,
        required: true
    },
    price: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = drinks;