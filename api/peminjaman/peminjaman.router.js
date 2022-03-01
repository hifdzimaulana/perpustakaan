const {
    controller_add,
    controller_get,
    controller_get_by_id,
    controller_update,
    controller_delete
} = require('./peminjaman.controller')

const router = require('express').Router()
const checkToken = require('../../auth/token_validation')

router.use(checkToken)

router.route('/')
    .post(controller_add)
    .get(controller_get)
    .patch(controller_update)
    .delete(controller_delete)

router.route('/:id')
    .get(controller_get_by_id)

module.exports = router