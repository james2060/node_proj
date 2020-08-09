var express = require('express');
var router = express.Router();

/* 사용자 요청에 따라 처리하는 코드를 모듈화해서 컨트롤러에 옮긴후 라우터에서 해당 컨트롤러 내의 모듈을 불러온다.*/

const userController = require('../controller');
const cvecontroller = require('../controller/cvecontroller');

router.get('/', userController.statusAPI);
router.get('/test', userController.messageAPI)
router.post('/post_test', userController.postAPI)
router.post('/cveSearchAPI', cvecontroller.cveSearchAPI)

module.exports = router;

/* 용도나 목적에 따라 여러 컨트롤러에 API들을 나눠서 작성하는 것이 가독성, 유지보수 측면에서 좋다*/

/*
컨트롤러 추가전 라우트 코드  
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).json(
    {
      "success" : true
    }
  );
});


router.get('/test', function(req, res, next) {
  
  res.status(200).json(
    {
      "message" : "test"
    }
  );
});


router.post('/post_test', function(req, res, next) {
  const user_message = req.body.message;
  console.log(user_message)
  res.status(200).json(
    {
      "res" : user_message
    }
  );
});
*/

