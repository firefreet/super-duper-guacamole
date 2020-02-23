const orm = require('../config/orm');

const burger = {
    selectAllBurgers: (cb) => {
        orm.selectAll("burgers", cb);
    },
    addBurger: (burgerName, cb) => {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, cb);
    },
    updateBurger: (objColsVals, burgerID, cb) => {
        orm.updateOne("burgers", objColsVals, burgerID, cb)
    }
}

module.exports = burger