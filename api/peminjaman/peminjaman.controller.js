const {
    validate_ref_ids,
    stok_dec,
    stok_inc,
    add,
    get,
    get_by_id,
    update
} = require('./peminjaman.service')
const { service_callback, response_format } = require('../_utils')

module.exports = {

    controller_add: function (req, res) {
        const { id_anggota, id_petugas, id_buku, tanggal_pinjam, tanggal_kembali } = req.body
        validate_ref_ids({ id_anggota, id_petugas, id_buku }, (error, result) => {
            if (result) {
                stok_dec(id_buku, (error, result) => {
                    if (result) {
                        add({ id_anggota, id_petugas, id_buku, tanggal_pinjam, tanggal_kembali }, (error, result) => {
                            return service_callback(error, result, res)
                        })
                    }
                    else return response_format(res, 0, !result ? `Buku with id ${id_buku} is run out of stock!` : {}, error || {})
                })
            }
            else return response_format(res, 0, !result ? "Couldn't find the reference id." : {}, error || {})
        })
    }
    ,

    controller_get: function (req, res) {
        get((error, result) => service_callback(error, result, res))
    }
    ,

    controller_get_by_id: function (req, res) {
        get_by_id(req.params.id, (error, result) => service_callback(error, result, res))
    }
    ,

    controller_update: function (req, res) {
        const { id, id_anggota, id_petugas, id_buku, tanggal_pinjam, tanggal_kembali } = req.body
        const data = { id, id_anggota, id_petugas, id_buku, tanggal_pinjam, tanggal_kembali }
        validate_ref_ids({ id_anggota, id_petugas, id_buku }, (error, result) => {
            if (result) {
                update(data, (error, result) => {
                    if (result) {
                        get_by_id(id, (error, result) => {
                            if ((id_buku) && (result.id_buku != id_buku)) {
                                stok_inc(result.id_buku)
                                stok_dec(id_buku)
                            }
                            else return service_callback(error, result, res)
                        })
                    }
                    else return response_format(res, 0, !result ? `Couldn't find peminjaman row with id ${id}` : {}, error || {})
                })

            }
            else return response_format(res, 0, !result ? "Couldn't find the reference id." : {}, error || {})
        })
    }
    ,

    controller_delete: function (req, res) {
        del(req.body.id, (err, result) => {
            if (!result) {
                return response_format(res, 0, `Couldn't find peminjaman with id ${req.body.id}`).status(404)
            }
            else return service_callback(err, result, res)
        })
    }

}