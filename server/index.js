const express = require('express');
const cors = require('cors');
const https = require('https');
const httpPort = 5000;
const httpsPort = 8080;
const app = express();
const mongoose = require('mongoose');
const config = require('./config/key');
const postings = require('./routes/postings');
const users = require('./routes/users');
const { Posting } = require('./models/Posting');

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

// 서버 정상 연결 체크
app.get('/', (req, res) => res.send('Server check!'));

// http://localhost:5000/api/postings
app.use('/api/postings', postings);

// http://localhost:5000/api/users
app.use('/api/users', users);

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.error(err));

// 배포 환경 시 적용할 내용
if (process.env.NODE_ENV === 'production') {
  // Encrypt Key
  const option = {};

  // https 서버 생성 및 실행 확인
  https.createServer(option, app).listen(httpsPort, () => {
    console.log('https 서버 실행 포트 :: ' + httpsPort);
  });
} else {
  // 개발 환경 시 적용 내용
  app.listen(httpPort, () => {
    console.log('http 서버 실행 성공 포트 :: ' + httpPort);
  });
}

// app.post('/api/postings', async (req, res) => {
//   try {
//     const posting = new Posting(req.body);
//     await posting.save();
//     res.status(201).send(posting);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
