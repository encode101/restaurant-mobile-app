/**
 * Restaurant.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "restaurant",
  attributes: {
    "name": {
      type: 'string'
    }
  },
  getRestaurant: async function(restaurantId){
    return await Restaurant.findOne(restaurantId);
  }
};

