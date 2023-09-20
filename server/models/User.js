const mongoose = require('mongoose');

// 유저 로그인 시 토큰 생성하여 클라이언트에게 반환. 토큰을 통해 사용자 인증 관련 작업 수행
const jwt = require('jsonwebtoken');

// 유저 패스워드를 실제 패스워드가 아닌 해시 값으로 저장하여 보안 강화
const bcrypt = require('bcryptjs');

// bcrypt는 해시에 salt를 추가하여 각 유저 패스워드에 고유한 소스를 적용. salt: 10자리 소스로 설정
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 10,
    required: true,
  },
  email: {
    type: String,
    trim: true, // trim: 유저가 입력한 스페이스 빈 공간 삭제
    unique: 1, // 이메일 주소 중복을 막기위한 코드
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // role: 사용자 권한 분류
  role: {
    type: Number,
    default: 0, //디폴드 값 0
  },
  image: String,
  // token: 유효성 관리
  token: {
    type: String,
  },
  // 토큰 유효기간
  tokenExp: {
    type: Number,
  },
});

// Save 하기 전 동작할 함수: pre
userSchema.pre('save', function (next) {
  let user = this; // userSchema의 객체들을 가리킴

  // 유저가 암호 변경할 때만 실행하는 코드
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        // 성공 시 유저의 plain 암호를 hash회된 암호로 표출
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//Login요청 시, 클라이언트가 요청한 비번과 DB에 있는 데이터가 일치하는지 비교하는 method생성: comparePassword
userSchema.methods.comparePassword = function (plainPassword, callback) {
  //plainPassword와 암호화한 hashedPassword가 같은지 체크
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    //plainPassword를 bcrypt를 사용하여 다시 암호화 후 DB의 hashedPassword와 일치 여부 체크
    if (err) return callback(err); //false일때
    callback(null, isMatch); //true일때
  });
};

userSchema.methods.generateToken = function (cb) {
  //jsonwebtoken을 이용하여 token생성
  let user = this;
  let token = jwt.sign(user._id.toHexString(), 'secretToken');
  //user._id: DB에 있는 유저들의 _id값임. 이 값을 String으로 변환.
  //user._id + 'secretToken' = token
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user); //save 성공한 경우
  });
};

// token decode 작업
// 1. decode하면 user._id 값을 얻음
// 2. user._id를 통해 유저를 찾고 클라이언트에서 가져온 토큰과 DB에 보관된 토큰의 일치 여부 확인
userSchema.statics.findByToken = function (token, callback) {
  let user = this; // this는 User 모델을 가리킴

  jwt.verify(token, 'secretToken', (err, decoded) => {
    if (err) return callback(err);

    user.findOne({ _id: decoded, token: token }, (err, foundUser) => {
      if (err) return callback(err);
      callback(null, foundUser); // 성공 시 유저 정보 출력
    });
  });
};

// Model 생성
const User = mongoose.model('User', userSchema);

module.exports = { User };
