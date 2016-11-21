var express = require('express');
var router = express.Router();

var mongo = require(path+"/Model/users")

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.user){
		return   res.render('index', { title: '主页主页' });
	}else{
		return   res.render('index', { title: '主页' });
	}
});

router.get('/list?*', function(req, res, next) {
  res.render('class', { title: '课程' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});

router.get('/center', function(req, res, next) {
  res.render('center', { title: '个人中心' });
});


//登录
router.post("/login",function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	mongo.users.findOne({"username":username},function(err,user){
		if(user){
			if(user.password == password){
				req.session.user = 1;
				res.send({
					success:1,
					info:"登录成功"
				})
			}
		}else{
			res.send({
				info:"请输入正确的账号密码"
			})
		}
	})
})

//注销

router.get("/logout",function(req,res,next){
	req.session.user = null;
	res.redirect("/")
})


//注册

router.post("/reg",function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var passwordn = req.body.passwordn;

	mongo.users.findOne({"username":username},function(err,user){
		if(err){
			return res.send({
				success: 0,
				info: "注册失败"
			})
		}
		console.log(err)
		if(user){
			return res.send({
				success: 0,
				info: "有重名"
			})
		}else{
			mongo.users.create({
				username: username,
				password: password,
				passwordn: passwordn
			},function(err,data){
				if(err){
					return res.send({
						success: 0,
						info: "注册失败"
					})
				}
				return res.send({
					success: 1,
					info: "注册成功"
				})
			})	
		}
	})
})




module.exports = router;
