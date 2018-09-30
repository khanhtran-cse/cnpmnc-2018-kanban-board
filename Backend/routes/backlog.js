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
    database.getBacklogs(userId).then(result=>{
      res.status(200).send({
        code: code.SUCCESS,
        message: 'Backlogs',
        data: result
      });
    })
    .catch(err=>{
      res.status(200).send({
        code: code.DATABASE_ERROR,
        message: 'Can\'t get backlogs',
        data: err
      });
    });
    return;
  }

  res.status(200).send({ code: code.SERVER_ERROR, message: 'Server error' });
});

// router.post('/login', function (req, res, next) {

//   console.log(req);
//   const user = req.body;
//   console.log('User', user);
//   if (user && user.username && user.password) {
//     database.login({ username: user.username, password: user.password })
//       .then(() => {
//         res.status(200).send({ code: code.SUCCESS, message: 'Login successfully' });
//       })
//       .catch(error => {
//         res.status(200).send({ code: code.DATABASE_ERROR, message: 'Login failure', error: error });
//       })
//   }
//   else {
//     res.status(200).send({ code: code.SERVER_ERROR, message: 'Input error' });
//   }
// });


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
