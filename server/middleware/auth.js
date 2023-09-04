const { User } = require('../models/User');

// 인증 처리
let auth = (req, res, next) => {
  // 클라이언트의 쿠키에서 토큰 가져오기
  let token = req.cookies.x_auth;

  // 토큰을 decode한 후 유저 찾기
  User.findByToken(token, (err, user) => {
    if (err) return err;

    // 해당 유저 없는 경우
    if (!user) return res.json({ isAuth: false, error: true });

    // 해당 유저 있는 경우
    // index.js에서 사용하기위해 req에 token과 user 담기
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
