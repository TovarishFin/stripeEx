var express = require('express');
var router = express.Router();
var stripe = require("stripe")(
  "sk_test_xVeZlPOHokBCkudRolsQ3S02"
);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StripeEx' });
});

router.post('/sendpayment', function(req,res){
  stripe.tokens.create({
    card: {
      "number": req.body.number,
      "exp_month": req.body.exp_month,
      "exp_year": req.body.exp_year,
      "cvc": req.body.cvc,
    }
  }, function(err, token) {
    if(err){
      res.json(err);
    } else {
      stripe.charges.create({
        amount:req.body.amount*100,
        currency:"usd",
        source: token.id,
      }, function(err,charge){
        if(err){
          res.json(err);
        } else {
          res.json(charge);
        };
      });
    };
  });
});

module.exports = router;
