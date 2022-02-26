const model = require('../../models/Petugas')

module.exports = {

    add: async function (data, callback) {
        const result = await model.create(data)
        if (result) return callback(null, result)
        else return callback(result)
    }
    ,

    get: async function (callback) {
        const result = await model.findAll()
        if (result) return callback(null, result)
        else return callback(result)
    }
    ,

    get_by_id: async function (id, callback) {
        const result = await model.findOne({ where: { id } })
        if (result) return callback(null, result)
        else return callback(result)
    }
    ,

    update: async function (data, callback) {
        const result = await model.update(data, { where: { id: data.id } })
        if (result) return callback(null, result)
        else return callback(result)
    }
    ,

    del: async function (id, callback) {
        const result = await model.destroy({ where: { id }, returning: true })
        if (result) return callback(null, result)
        else return callback(result)
    }
    ,

    get_user_by_email: async function (email, callback) {
        const result = await model.findOne({ where: { email } })
        if (result) return callback(null, result)
        else return callback(result)
    }
}