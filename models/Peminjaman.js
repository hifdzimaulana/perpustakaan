const Sequelize = require('sequelize')
const db = require('../config/database')

const Peminjaman = db.define('peminjaman', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_anggota: {
        type: Sequelize.INTEGER({ length: 11 }),
        allowNull: false
    },
    id_petugas: {
        type: Sequelize.INTEGER({ length: 11 }),
        allowNull: false
    },
    id_buku: {
        type: Sequelize.INTEGER({ length: 11 }),
        allowNull: false
    },
    tanggal_pinjam: {
        type: Sequelize.DATE,
        allowNull: false
    },
    tanggal_kembali: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Peminjaman