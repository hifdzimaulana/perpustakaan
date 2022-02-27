const Sequelize = require('sequelize')
const db = require('../config/database')

const Petugas = db.define("petugas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    jabatan: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telepon: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Petugas