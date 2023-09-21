const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// const https = require('https');
// const httpPort = 5000;
// const httpsPort = 8080;
const config = require('./config/key');
const postings = require('./routes/postings');
const users = require('./routes/users');

// 'application/json' 형식의 데이터를 parse해 줌
app.use(express.json());

// URL 형식의 데이터를 parse해 줌
app.use(express.urlencoded({ extended: true }));

const cors = require('cors'); // CORS Issue를 위한 설정
const corsOptions = {
  origin: [
    // 클라이언트(프론트) URL 추가
    'http://localhost:3000',
    'https://bittersweet-korea.vercel.app',
  ],
  credentials: true,
};
app.use(cors(corsOptions));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// 서버 정상 연결 체크
app.get('/', (req, res) => res.send('Server check!'));

// http://localhost:5000/api/postings
app.use('/api/postings', postings);

// http://localhost:5000/api/users
app.use('/api/users', users);

// Database 연결
const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.error(err));

// // 배포 환경 시 적용할 내용
// if (process.env.NODE_ENV === 'production') {
//   // Encrypt Key
//   const option = {};

//   // https 서버 생성 및 실행 확인
//   https.createServer(option, app).listen(httpsPort, () => {
//     console.log('https 서버 실행 포트 :: ' + httpsPort);
//   });
// } else {
//   // 개발 환경 시 적용 내용
//   app.listen(httpPort, () => {
//     console.log('http 서버 실행 성공 포트 :: ' + httpPort);
//   });
// }

app.listen(PORT, () => {
  console.log('http 서버 실행 성공 포트 :: ' + PORT);
});
