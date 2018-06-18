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
    },
    MenuDetails: {
      model: 'Menu'
     }
  },
  getRestaurant: async function(restaurantId){
    return await Restaurant.findOne({"id": restaurantId}).populate('MenuDetails');
   }
//   getRestaurantMenu: async function(req, res){
//     const resData = await Menu.getRestaurantMenu(req.params.restaurant);
//     return res.send(resData);
// }
};

