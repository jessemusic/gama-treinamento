var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');


/* POST criação de compras. */
router.post('/', function(req, res, next) {
  cielo.compra(req.body).then((result) => {
    // res.send(result);
    cielo.captura(result.Payment.PaymentId).then((result) => {
      res.send(result);
    })
  });
 
});

/* GET status de compras. */
router.get('/:compra_id/status', function(req, res, next) {
  res.send('Está funcionado o status também.....');
});


module.exports = router;
