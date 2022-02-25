const Sequelize = require('sequelize')
const db = require('../config/database')

const Anggota = db.define("anggota", {
    id: {
        type: Sequelize.CHAR,
        allowNull: true,
        primaryKey: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    alamat: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    telepon: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Anggota