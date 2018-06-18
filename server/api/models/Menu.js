/**
 * Menu.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "restaurant",
  attributes: {
    restaurantDetails: {
     model: 'Restaurant'
    }
  },
  createMenuOption: async function(menuObj){
    return await Menu.create(menuObj);
  },
  getRestaurantMenu: async function(restaurantId){
    return await Menu.find({restaurantId: restaurantId}).populate('restaurantDetails')
  }
};

