const express = require('express');
const router = require('express').Router();
const User = require('../models/User');
const { auth } = require('../middleware/auth');
const cookieParser = require('cookie-parser');
const app = express();

router.use(cookieParser());

// ===== User Register =====
router.post('/register', (req, res) => {
  // 회원가입 시 유저 데이터 DB에 저장
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.statusMessage(200).json({ success: true });
  });
});

// ===== User Login =====
router.post('/login', (req, res) => {
  // client에서 요청한 이메일을 DB에 있는지 탐색
  User.findOne({ email: req.body.email }, (err, user) => {
    // DB에 이메일 없는 경우
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }

    // DB에 이메일 있는 경우: 비밀번호도 일치하는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      // 비밀번호 불일치한 경우
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });
      }

      // 비밀번호도 일치한 경우: Token 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // cookieParser를 이용해 토큰을 쿠키에 저장
        res.cookie('x_auth', user.token).status(200).json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

// ===== User Authentication =====
// 2번째 인자 'auth': 미들웨어로서 콜백함수가 실행되기 전에 실행됨.
router.get('/auth', auth, (req, res) => {
  // 유저 인증 성공한 경우 (auth = true)
  // cf. 'isAdmin'의 role = 0은 유저, 그 이외: 관리자
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

// ===== User Log-out =====
router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

// ===== Get a User Name =====
router.get('/', auth, (req, res) => {
  User.findById({ _id: req.user._id }, (err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json(req.user.name);
  });
});

module.exports = router;
