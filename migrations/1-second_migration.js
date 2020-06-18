'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "churches", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "second_migration",
    "created": "2020-06-17T23:22:20.105Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "churches",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "Name": {
                    "type": Sequelize.STRING,
                    "field": "Name",
                    "allowNull": false
                },
                "Description": {
                    "type": Sequelize.BLOB,
                    "field": "Description",
                    "allowNull": true
                },
                "Mailing_One": {
                    "type": Sequelize.STRING,
                    "field": "Mailing_One",
                    "allowNull": false
                },
                "Mailing_Two": {
                    "type": Sequelize.STRING,
                    "field": "Mailing_Two",
                    "allowNull": true
                },
                "City": {
                    "type": Sequelize.STRING,
                    "field": "City",
                    "allowNull": false
                },
                "State": {
                    "type": Sequelize.STRING,
                    "field": "State",
                    "allowNull": false
                },
                "PostalCode": {
                    "type": Sequelize.INTEGER,
                    "field": "PostalCode",
                    "allowNull": false
                },
                "Denomination": {
                    "type": Sequelize.STRING,
                    "field": "Denomination",
                    "allowNull": true
                },
                "Web_URL": {
                    "type": Sequelize.STRING,
                    "field": "Web_URL",
                    "allowNull": true
                },
                "Latitude": {
                    "type": Sequelize.DECIMAL(10, 8),
                    "field": "Latitude",
                    "allowNull": true
                },
                "Longitude": {
                    "type": Sequelize.DECIMAL(11, 8),
                    "field": "Longitude",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName",
                    "allowNull": false
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName",
                    "allowNull": false
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email",
                    "unique": true,
                    "allowNull": false
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true,
                    "allowNull": false
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password",
                    "allowNull": false
                },
                "Admin": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Admin",
                    "defaultValue": false,
                    "allowNull": false
                },
                "Deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Deleted",
                    "defaultValue": false,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
