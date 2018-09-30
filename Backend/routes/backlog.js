var express = require('express');
var router = express.Router();
const database = require('../database')
const code = require('../ResponseCode');

router.get('/backlogs', function (req, res, next) {
  let userId;
  try {
    userId = req.query.userId;
  } catch (err) {
    res.status(200).send({ code: code.INPUT_ERROR, message: 'Input error' });
    return;
  }

  if (userId) {
    database.getBacklogs(userId).then(result => {
      const s = result.map(item => {
        item.id = item._id;
        item._id = undefined;
        return item;
      });
      res.status(200).send({
        code: code.SUCCESS,
        message: 'Backlogs',
        data: result
      });
    })
      .catch(err => {
        res.status(200).send({
          code: code.DATABASE_ERROR,
          message: 'Can\'t get backlogs',
          data: err
        });
      });
    return;
  } else{
    res.status(200).send({ code: code.INPUT_ERROR, message: 'Input error' });
  }

  // res.status(200).send({ code: code.SERVER_ERROR, message: 'Server error' });
});

router.post('/create-backlog', function (req, res, next) {
  // console.log(req);
  const data = req.body;
  console.log(data);
  if (data && data.userId && data.data) {
    const item = data.data;
    item.userId = data.userId;
    database.insertBacklog(item).then(_ => {
      res.status(200).send({ code: code.SUCCESS, message: 'Create backlog successfully.' });
    })
      .catch(err => {
        res.status(200).send({ code: code.DATABASE_ERROR, message: 'Database error' });
      });
  } else {
    res.status(200).send({ code: code.INPUT_ERROR, message: 'Input error' });
  }
});


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
