const orm = require('../config/orm');

const burger = {
    selectAllBurgers: (cb) => {
        orm.selectAll("burgers", cb);
    },
    addBurger: (burgerName, cb) => {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, cb);
    },
    updateBurger: (devoured, burgerID, cb) => {
        orm.updateOne("burgers", devoured, burgerID, cb);
    },
    deleteBurger: (burgerID, cb) => {
        orm.deleteOne("burgers", burgerID, cb);
    }
};

module.exports = burger;