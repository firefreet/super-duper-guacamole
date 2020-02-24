const connection = require('./connection');

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??", table, (err, result) => {
            cb(err, result);
        });
    },
    insertOne: (table, fieldOne, fieldTwo, valueOne, valueTwo, cb) => {
        connection.query("INSERT INTO ?? (??,??) VALUES(?,?)", [table, fieldOne, fieldTwo, valueOne, valueTwo], (err, result) => {
            cb(err, result);
        });
    },
    updateOne: (table, devoured, burgerID, cb) => {
        connection.query("UPDATE ?? SET devoured = ? WHERE id = ?", [table, devoured, burgerID], (err, result) => {
            cb(err, result);
        });
    },
    deleteOne: (table, burgerID, cb) => {
        connection.query("DELETE FROM ?? WHERE id = ?", [table, burgerID], (err, result) => { cb(err, result) });
    }
};

module.exports = orm;