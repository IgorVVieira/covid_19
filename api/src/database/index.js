const { Sequelize } = require('sequelize');
const config = require('../config/database');

const Patient = require('../models/Patient');
const Region = require('../models/Region');

const connection = new Sequelize(config);

Patient.init(connection);
Region.init(connection);

Patient.associate({ Region });

module.exports = connection;