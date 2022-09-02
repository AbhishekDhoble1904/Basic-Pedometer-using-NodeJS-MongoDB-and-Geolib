const express = require('express');
const router = express();
const create = require('../controller/fit');
const view = require('../controller/fit');
const update = require('../controller/fit');
const remove = require('../controller/fit');



router.delete('/:id', remove.remove);
router.post('/create', create.create);
router.get('/', view.view);
router.put('/:id', update.update);

module.exports = router;