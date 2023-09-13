const express = require('express');
const router = require('express').Router();
const { User } = require('../models/User');
const { auth } = require('../middleware/auth');
const cookieParser = require('cookie-parser');
const app = express();

router.use(cookieParser());

// User Register (Sign-up)
router.post('/register', async (req, res) => {
  try {
    // 이메일 중복 여부 확인 과정
    const checkUser = await User.findOne({ email: req.body.email });
    // 이미 존재하는 이메일인 경우 409(Conflict) 코드 전송
    if (checkUser) {
      res.status(409).send({ success: false, message: '이미 존재하는 이메일 주소입니다.' });
      return;
    }

    const user = new User(req.body);
    await user.save();
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

// User Login
// router.post('/login', (req, res) => {
//   // client에서 요청한 이메일을 DB에 있는지 탐색
//   User.findOne({ email: req.body.email }, (err, user) => {
//     // DB에 이메일 없는 경우
//     if (!user) {
//       return res.status(404).send({
//         loginSuccess: false,
//         message: '제공된 이메일에 해당하는 유저가 없습니다.',
//       });
//     }

//     // DB에 이메일 있는 경우: 비밀번호도 일치하는지 확인
//     user.comparePassword(req.body.password, (err, isMatch) => {
//       // 비밀번호 불일치한 경우
//       if (!isMatch) {
//         return res.json({
//           loginSuccess: false,
//           message: '비밀번호가 틀렸습니다.',
//         });
//       }

//       // 비밀번호도 일치한 경우: Token 생성
//       user.generateToken((err, user) => {
//         if (err) return res.status(400).send(err);

//         // cookieParser를 이용해 토큰을 쿠키에 저장
//         res.cookie('x_auth', user.token).status(200).json({ loginSuccess: true, user });
//       });
//     });
//   });
// });

// User Login
router.post('/login', async (req, res) => {
  try {
    // client에서 요청한 이메일을 DB에 있는지 탐색
    const user = await User.findOne({ email: req.body.email });

    // DB에 이메일 없는 경우
    if (!user) {
      return res.status(404).send({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }

    // 비밀번호 일치 여부를 비동기로 확인
    const isMatch = await user.comparePassword(req.body.password);

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
      res.cookie('x_auth', user.token).status(200).json({ loginSuccess: true, userName: user.name });
    });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send(error);
  }
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
