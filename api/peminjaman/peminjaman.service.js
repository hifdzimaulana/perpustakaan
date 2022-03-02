const model = require('../../models/Peminjaman')
const buku = require('../../models/Buku')
const db = require('../../config/database')

module.exports = {

    stok_inc: function (id, callback) {
        buku.increment({ 'stok': 1 }, { where: { id } })
            .then(result => callback(null, result))
            .catch(error => callback(error))
    }
    ,

    stok_dec: async function (id, callback) {
        try {
            let result = await buku.findByPk(id, { attributes: ['stok'] })

            if (result.stok > 0) {
                result = await buku.decrement({ 'stok': 1 }, { where: { id } })
                return callback(null, result)
            }
            else return callback(null, null)
        } catch (error) { return callback(error) }
    }
    ,

    validate_ref_ids: function (data, callback) {
        const params = []
        for (const key in data) {
            const field = `${key.substring(3)}.id`
            data[key] ? params.push(`${field} = ${data[key]}`) : null
        }
        if (params == true) {
            db.query(
                `SELECT * FROM anggota, buku, petugas WHERE ${params.join(" AND ")}`
            )
                .then(result => callback(null, result[0][0]))
                .catch(error => callback(error))
        }
        else return callback(null, 1)
    }
    ,

    add: function (data, callback) {
        model.create(data)
            .then(result => callback(null, result))
            .catch(error => callback(error))
    }
    ,

    get: function (callback) {
        model.findAll()
            .then(result => callback(null, result))
            .catch(error => callback(error))
    }
    ,

    get_by_id: function (id, callback) {
        model.findByPk(id)
            .then(result => callback(null, result))
            .catch(error => callback(error))
    }
    ,

    update: function (data, callback) {
        model.update(data, { where: { id: data.id } })
            .then(result => callback(null, result[0]))
            .catch(error => callback(error))
    }
    ,

    del: function (id, callback) {
        model.destroy({ where: { id } })
            .then(result => callback(null, result))
            .catch(error => callback(error))
    }

}