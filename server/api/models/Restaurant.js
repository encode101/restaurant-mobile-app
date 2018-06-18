/**
 * Restaurant.js
 */

module.exports = {
  datastore: "restaurant",
  attributes: {
    "name": {
      type: 'string'
    },
    "menuId": {
      model: "menu"
    }
  },
  getRestaurant: async function(restaurantId){
    return await Restaurant.findOne({id: restaurantId}).populate('menuId');
  }
};

