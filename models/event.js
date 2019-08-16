'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {});
  event.associate = function(models) {
    // event has many networking events
    event.hasMany(models.networking);
  };
  return event;
};