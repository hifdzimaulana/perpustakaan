const Sequelize = require('sequelize')
const db = require('../config/database')


const Buku = db.define("buku", {
    id: {
        type: Sequelize.INTEGER({ length: 11 }),
        primaryKey: true,
        autoIncrement: true
    },
    judul: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pengarang: {
        type: Sequelize.STRING,
        allowNull: false
    },
    penerbit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stok: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Buku