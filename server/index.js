const express = require('express');
const cors = require('cors'); // CORS Issue를 위한 설정
const config = require('./config/key');
const postings = require('./routes/postings');
const users = require('./routes/users');

const corsOptions = {
  origin: [
    // 클라이언트(프론트) URL 추가
    'http://localhost:3000',
    'https://bittersweet-korea.vercel.app',
  ],
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));

// 'application/json' 형식의 데이터를 parse해 줌
app.use(express.json());

// URL 형식의 데이터를 parse해 줌
app.use(express.urlencoded({ extended: true }));

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

app.listen(config.PORT, config.IP, () => {
  console.log('Server is running on port :: ' + config.PORT);
});
