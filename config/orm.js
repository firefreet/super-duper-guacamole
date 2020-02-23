const connection = require('./connection');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }


    // translate array of strings to a single comma-separated string
    return arr.toString();
}

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
    updateOne: (table,objColsVals, burgerID, cb) => {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [table,objToSql(objColsVals), burgerID], (err, result) => {
            cb(err, result);
        });
    }
};

module.exports = orm;