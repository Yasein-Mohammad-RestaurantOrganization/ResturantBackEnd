"use strict";
require("dotenv").config();
const drinksModel = require("./cafe.model");
const contactModel = require("./contact.model");
const deliveryModel = require("./delivery.model");
const snacksModel = require("./snacks.model");

const Collection = require("./collection");
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./user.model");

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const drinksTable = drinksModel(sequelize, DataTypes);
const contactTable = contactModel(sequelize, DataTypes);
const deliveryTable = deliveryModel(sequelize, DataTypes);
const snacksTable = snacksModel(sequelize, DataTypes);
const userTable = UserModel(sequelize, DataTypes);

const drinksCollection = new Collection(drinksTable);
const contactCollection = new Collection(contactTable);
const deliveryCollection = new Collection(deliveryTable);
const snacksCollection = new Collection(snacksTable);

module.exports = {
  db: sequelize,

  drinks: drinksCollection,
  contact: contactCollection,
  delivery: deliveryCollection,
  snacks: snacksCollection,
  Users: userTable,
};
