const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const https = require('https');
const httpPort = 5000;
const httpsPort = 8080;
const app = express();
const mongoose = require('mongoose');
const config = require('./config/key');
const { User } = require('./models/User');
const { Posting } = require('./models/Posting');
const { auth } = require('./middleware/auth');

// 서버 정상 연결 체크
app.get('/', (req, res) => res.send('Server check!'));

// 배포 환경 시 적용할 내용
if (process.env.NODE_ENV === 'production') {
  // Encrypt Key
  const option = {};

  // https 서버 생성 및 실행 확인
  https.createServer(option, app).listen(httpsPort, () => {
    console.log('https 서버 실행 포트 :: ' + httpsPort);
  });

  app.listen(httpPort, () => {
    console.log('http 서버 실행 성공 포트 :: ' + httpPort);
  });
} else {
  // 개발 환경 시 적용 내용
  app.listen(httpPort, () => {
    console.log('http 서버 실행 성공 포트 :: ' + httpPort);
  });
}

// CORS Issue를 위한 설정
let corsOptions = {
  origin: [
    // 클라이언트(프론트) URL 추가
    'http://localhost:3000',
  ],
  credentials: true,
};

// CORS 옵션 적용
app.use(cors(corsOptions));

// 'application/json' 형식의 데이터를 parse해 줌
app.use(express.json());

// URL 형식의 데이터를 parse해 줌
// ex: 'application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Mongoose 통해 MongoDB 연결
// mongoURI는 config 폴더에 적용 환경에 따른 환경변수 처리
// const MongoConnect = async () => {
//   await mongoose
//     .set('strictQuery', false)
//     .connect(config.mongoURI)
//     .then(() => console.log('mongoDB Connected..'))
//     .catch((err) => console.log(err));
// };
// MongoConnect();
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.error(err));

// ===== User Register =====
app.post('/api/users/register', (req, res) => {
  // 회원가입 시 유저 데이터 DB에 저장
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.statusMessage(200).json({ success: true });
  });
});

// ===== User Login =====
app.post('/api/users/login', (req, res) => {
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
app.get('/api/users/auth', auth, (req, res) => {
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
app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

// ===== Get a User Name =====
app.get('/api/users', auth, (req, res) => {
  User.findById({ _id: req.user._id }, (err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json(req.user.name);
  });
});

// ===== New Posting =====
// app.post('/api/posts', (req, res) => {
//   const posting = new Posting(req.body);
//   posting.save((err, result) => {
//     if (err) return res.json({ postSuccess: false, err });
//     return res.status(200).json({ postSuccess: true, result });
//   });
// });

// app.post('/api/posts', (req, res) => {
//   const posting = new Posting(req.body);
//   posting
//     .save()
//     .then((result) => {
//       return res.status(200).json({ postSuccess: true, result });
//     })
//     .catch((err) => {
//       return res.json({ postSuccess: false, err });
//     });
// });

// 게시물 저장 엔드포인트
app.post('/api/posts', (req, res) => {
  // const { writer, title, content } = req.body;
  // 게시물 모델 생성
  const posting = new Posting(req.body);

  // 게시물 저장
  posting
    .save()
    .then((result) => {
      console.log('게시물 저장 성공:', result);
      return res.status(200).json({ postSuccess: true, result });
    })
    .catch((err) => {
      console.error('게시물 저장 실패:', err);
      return res.status(500).json({ postSuccess: false, error: err.message });
    });
});

// ===== Get Posts =====
app.get('/api/posts', (req, res) => {
  Posting.find((err, result) => {
    if (err) return res.json({ getPostsSuccess: false, err });
    return res.status(200).send(result);
  });
});

// ===== Posting Update =====
app.patch('/api/posts/:_id', (req, res) => {
  Posting.findByIdAndUpdate({ _id: req.params._id }, req.body, (err, result) => {
    if (err) return res.json({ editSuccess: false, err });
    return res.status(200).json({ editSuccess: true, result });
  });
});

// ===== Posting Delete =====
app.delete('/api/posts/:_id', (req, res) => {
  Posting.findByIdAndDelete({ _id: req.params._id }, (err, result) => {
    if (err) return res.json({ deleteSuccess: false, err });
    return res.status(200).json({ deleteSuccess: true, result });
  });
});
