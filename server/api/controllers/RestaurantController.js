/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    findOne: async function(req, res) {
        let data = await Restaurant.getRestaurant('5b27653039ffda2f8437fd3e');
        return res.send(data);
        console.log('here')
    }
};

