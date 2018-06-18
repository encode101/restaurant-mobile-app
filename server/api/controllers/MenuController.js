/**
 * MenuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res){
        const menuObj = req.body;
        var menuItem = await Menu.createMenuOption(menuObj);
        return res.send(menuItem);
    },
    getRestaurantMenu: async function(req, res){
        const resData = await Menu.getRestaurantMenu(req.params.restaurant);
        return res.send(resData);
    }
};

