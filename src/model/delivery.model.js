"use strict";
const deliveryModel = (sequelize, DataTypes) =>
  sequelize.define("delivery", {
    userName: {
      type: DataTypes.STRING,
      required: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      required: true,
    },
    location: {
      type: DataTypes.STRING,
      required: true,
    },
    order: {
      type: DataTypes.STRING,
      required: true,
    },
    notes: {
      type: DataTypes.STRING,
      required: true,
    },
  });

module.exports = deliveryModel;
