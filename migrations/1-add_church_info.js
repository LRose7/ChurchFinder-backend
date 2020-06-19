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
    "name": "add_church_info",
    "created": "2020-06-14T14:42:11.720Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Churches",
            {
                "Id": {
                    "type": Sequelize.INTEGER,
                    "field": "Id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "Name": {
                    "type": Sequelize.STRING(255),
                    "field": "Name",
                    "allowNull": false
                },
                "Description": {
                    "type": Sequelize.BLOB,
                    "field": "Description",
                    "allowNull": true
                },
                "Mailing_One": {
                    "type": Sequelize.STRING(255),
                    "field": "Mailing_One",
                    "allowNull": false
                },
                "Mailing_Two": {
                    "type": Sequelize.STRING(255),
                    "field": "Mailing_Two",
                    "allowNull": true
                },
                "City": {
                    "type": Sequelize.STRING(255),
                    "field": "City",
                    "allowNull": false
                },
                "State": {
                    "type": Sequelize.STRING(255),
                    "field": "State",
                    "allowNull": false
                },
                "PostalCode": {
                    "type": Sequelize.INTEGER,
                    "field": "PostalCode",
                    "allowNull": false
                },
                "Denomination": {
                    "type": Sequelize.STRING(255),
                    "field": "Denomination",
                    "allowNull": true
                },
                "Web_URL": {
                    "type": Sequelize.STRING(255),
                    "field": "Web_URL",
                    "allowNull": true
                },
                "Latitude": {
                    "type": Sequelize.DECIMAL,
                    "field": "Latitude",
                    "allowNull": false
                },
                "Longitude": {
                    "type": Sequelize.DECIMAL,
                    "field": "Longitude",
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
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING(255),
                    "field": "FirstName",
                    "allowNull": false
                },
                "LastName": {
                    "type": Sequelize.STRING(255),
                    "field": "LastName",
                    "allowNull": false
                },
                "Email": {
                    "type": Sequelize.STRING(255),
                    "field": "Email",
                    "unique": true,
                    "allowNull": false
                },
                "Username": {
                    "type": Sequelize.STRING(255),
                    "field": "Username",
                    "unique": true,
                    "allowNull": false
                },
                "Password": {
                    "type": Sequelize.STRING(255),
                    "field": "Password",
                    "allowNull": false
                },
                "Admin": {
                    "type": Sequelize.INTEGER(1),
                    "field": "Admin",
                    "defaultValue": "0",
                    "allowNull": false
                },
                "Deleted": {
                    "type": Sequelize.INTEGER(1),
                    "field": "Deleted",
                    "defaultValue": "0",
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
