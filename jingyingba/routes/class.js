var express = require('express');
var router = express.Router();

var mongo = require(path+"/Model/users")


/* GET users listing. */
router.get('/config', function(req, res, next) {
  res.render("hello",{
  	title: "课程后台上传"
  })
});
router.post('/classList', function(req, res, next) {
  	var className = req.body.className;
	var des = req.body.des;
	var price = req.body.price;
	var oldPrice = req.body.oldPrice;
	var pic = req.body.pic;
	var type = req.body.type;
	

	mongo.wokao.findById("582c1b39af1c4d3e61f0b838",function(err,data){
		console.log(data)
	})
	mongo.wokao.find({"className":"vr"},function(err,data){
		console.log(data);
	})

	mongo.wokao.create({
		className: className,
		des: des,
		price: price,
		oldPrice: oldPrice,
		pic: pic,
		type: type
	},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		return res.send({
			success: 1,
			info: "成功"
		})
	})

});

module.exports = router;
